package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.ProcessAttributes;
import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.exception.exceptions.ProductNotFoundException;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.data.Calculos;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private Calculos calculos;

    @Override
    @Transactional(readOnly = true)
    public List<Product> list() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Product> byId(Long id) {
        return productRepository.findById(id);
    }

    @Override
    @Transactional
    public Product save(Product product) {

        List<ProductProcess> processes = product.getProductProcesses();



            processes.stream().forEach(process -> {
                ProcessAttributes pa = process.getProcessAttributes();

                if(process.getSubProcesses().size() > 0){

                    pa.setTimeEstimatedCompletion(this.calculateEstimateTimeCompletionForProocess(process));
                    process.setProcessAttributes(pa);
                    process.getProcessAttributes()
                            .setTimeAverage(
                                    this.calculateTimeMargin(process.getProcessAttributes()
                                            .getTimeEstimatedCompletion()));
                }
            });

        Double timeEstimated = this.calculateEstimateTimeCompletion(product);

        product.setTimeEstimatedCompletion(timeEstimated);

        product.setTimeAverage(Double.valueOf(0));
        product.setTimeMargin(this.calculateTimeMargin(product.getTimeEstimatedCompletion()));

        return productRepository.save(product);
    }

    @Override
    public void delete(Long id) {
        productRepository.deleteById(id);

    }

    @Override
    @Transactional
    public Optional<Product> byIdUnico(String idUnico) {
        return productRepository.findByIdUnico(idUnico);
    }

    @Override
    public Optional<Product> byName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public ResponseEntity<?> addProcessToProduct(ProductProcess process, Long productID) {
        Optional<Product> foundProduct = productRepository.findById(productID);
        if (foundProduct.isPresent()) {
            Product product = foundProduct.get();
            List<ProductProcess> productList = product.getProductProcesses();
            productList.add(process);
            product.setProductProcesses(productList);
            process.setProduct(product);

            //TODO revisar

            product.setTimeEstimatedCompletion(
                    this.calculateEstimateTimeCompletion(product));
            product.setTimeAverage(this.calculateTimeMargin(product.getTimeEstimatedCompletion()));


            return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
        }
        //TODO: Mejor manejo de excepcion
        throw new ProductNotFoundException("No product found with id: " + productID);
    }

    @Override
    public ResponseEntity<?> deleteProcessFromProduct(Long productID, Long processID) {
        Optional<Product> foundProduct = productRepository.findById(productID);
        if (foundProduct.isPresent()) {
            Product product = foundProduct.get();
            List<ProductProcess> processList = product.getProductProcesses();
            processList.removeIf(p -> Objects.equals(p.getId(), processID));
            product.setProductProcesses(processList);
            return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
        }
        //TODO: Mejor manejo de excepcion
        throw new ProductNotFoundException("No product found with id: " + productID);
    }

    @Override
    public void updateTimeAverage(Long productId) throws Exception {
        Double timeAverage = calculos.timeAverage(productId);
        Product product = this.byId(productId)
                .orElseThrow(() -> new Exception("product not found"));
        product.setTimeAverage(timeAverage);
        this.productRepository.save(product);
    }


    private Double calculateTimeMargin(Double timeEstimateCompletion) {
        return calculos.timeMargin(timeEstimateCompletion);
    }

    private Double calculateEstimateTimeCompletion(Product product) {

        return calculos.timeEstimatedCompletionProduct(product.getProductProcesses());

    }

    public Product updateProduct(Long id, Product product) throws Exception {

        Optional<Product> productOptional = this.productRepository.findById(id);
        if (productOptional.isPresent()) {
            Product productDb = productOptional.get();
            try {
                ReflectionUtil.copyNonNullProperties(product, productDb);
                return this.productRepository.save(productDb);
            } catch (IllegalAccessException e) {
                throw new Exception(e);
            }
        }
        throw new ProductNotFoundException("product not found");

    }

    public void updateProductTimeEstimatedCompletion(Product product) {
            product.setTimeEstimatedCompletion(product.getTimeEstimatedCompletion());
            this.productRepository.save(product);
    }

    public Double calculateEstimateTimeCompletionForProocess(ProductProcess productProcess){
            return calculos.timeEstimatedCompletionProcess(productProcess.getSubProcesses());
    }

}
