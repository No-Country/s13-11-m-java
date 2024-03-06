package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.exception.exceptions.ProductNotFoundException;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.data.Calculos;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
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

    public Product updateProduct(Long id, Product product) {

        Optional<Product> productOptional = this.productRepository.findById(id);
        if (productOptional.isPresent()) {
            Product productDb = productOptional.get();
            if (!product.getIdUnico().isEmpty() &&
                    !product.getIdUnico()
                            .equalsIgnoreCase(productDb.getIdUnico())
                    && this.productRepository.findByIdUnico(product.getIdUnico()).isPresent()) {
                throw new EntityNotFoundException("product not found");
            }


            productDb.setIdUnico(product.getIdUnico());
            productDb.setName(product.getName());
            productDb.setActive(product.getActive());
            productDb.setDescription(product.getDescription());
            productDb.setCompany(product.getCompany());
            productDb.setInstruction(product.getInstruction());
            productDb.setTimeEstimatedCompletion(product.getTimeEstimatedCompletion());
            productDb.setState(product.getState());

            this.productRepository.save(productDb);
        }
        return new Product();
    }

    public void updateProductTimeEstimatedCompletion(Product product) {
            product.setTimeEstimatedCompletion(product.getTimeEstimatedCompletion());
            this.productRepository.save(product);

    }

}
