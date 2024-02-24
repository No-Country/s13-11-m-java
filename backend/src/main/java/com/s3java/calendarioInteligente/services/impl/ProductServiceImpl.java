package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    //Borrar antes de hacer merge
    @Override
    public ResponseEntity<?> getAllProducts() {
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    //Borrar antes de hacer merge
    @Override
    public ResponseEntity<?> createNewProduct(Product product) {
        return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> addProcessToProduct(ProductProcess process, Long productID) {
        Optional<Product> foundProduct = productRepository.findById(productID);
        if (foundProduct.isPresent()){
            Product product = foundProduct.get();
            List<ProductProcess> productList = product.getProductProcesses();
            productList.add(process);
            product.setProductProcesses(productList);
            process.setProduct(product);
            return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
        }
        return new ResponseEntity<>("Product Not Found", HttpStatus.NOT_FOUND);
    }
}
