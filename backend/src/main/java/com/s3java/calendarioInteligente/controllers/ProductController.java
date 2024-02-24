package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.services.impl.ProductServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductServiceImpl productService;

    @GetMapping("/")//Borrar antes de hacer merge
    public ResponseEntity<?> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("/")//Borrar antes de hacer merge
    public ResponseEntity<?> createNewProduct(@Valid @RequestBody Product product){
        return productService.createNewProduct(product);
    }

    @PostMapping("/process/{productID}")
    public ResponseEntity<?> addProcessToProduct(@Valid @RequestBody ProductProcess productProcess, @PathVariable Long productID){
        return productService.addProcessToProduct(productProcess, productID);
    }

    @DeleteMapping("/process/{productID}/{processID}")
    public ResponseEntity<?> deleteProcess(@PathVariable Long productID, @PathVariable Long processID){
        return productService.deleteProcessFromProduct(productID, processID);
    }
}