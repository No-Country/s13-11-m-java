package com.s3java.calendarioInteligente.ProductTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<?> list(){
        return ResponseEntity.ok(productService.list());
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Product product){
        Product productDb = productService.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productDb);
    }

}
