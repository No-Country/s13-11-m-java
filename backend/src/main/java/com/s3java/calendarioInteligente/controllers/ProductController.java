package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public List<Product> list(){
        return productService.list();
    }

    @GetMapping("product-id/{id}")
    public ResponseEntity<?> detail(@PathVariable Long id){
        Optional<Product> productOptional = productService.byId(id);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(productOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("product-name/{name}")
    public ResponseEntity<?> findByName(@PathVariable String name){
        Optional<Product> productOptional = productService.byName(name);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(productOptional.get());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("product-id-unico/{idUnico}")
    public ResponseEntity<?> finbyIdUnico(@PathVariable String idUnico){
        Optional<Product> productOptional = productService.byIdUnico(idUnico);
        if(productOptional.isPresent()){
            return ResponseEntity.ok(productOptional.get());
        }
        return ResponseEntity.notFound().build();
    }


    @PostMapping("/create")
    public ResponseEntity<?> save(@Valid @RequestBody Product product, BindingResult result) {
        if(result.hasErrors()){
            return getResponseEntity((result));
        }
        if(!product.getName().isEmpty() && productService.byIdUnico(product.getIdUnico()).isPresent()){
            return ResponseEntity.badRequest()
                    .body(Collections
                            .singletonMap("mensaje", "Ya existe un producto con ese id unico"));
        }
        product.setState(true);
        product.setActive(true);
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(product));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> edit(@Valid @RequestBody Product product, BindingResult result, @PathVariable Long id){
        if (result.hasErrors()) {
            return getResponseEntity(result);
        }
        Optional<Product> productOptional = productService.byId(id);
        if(productOptional.isPresent()){
            Product productDb = productOptional.get();
            if(!product.getIdUnico().isEmpty() &&
                    !product.getIdUnico()
                            .equalsIgnoreCase(productDb.getIdUnico())
                                && productService.byIdUnico(product.getIdUnico()).isPresent()){
                return ResponseEntity.badRequest()
                        .body(Collections
                                .singletonMap("mensaje", "Ya existe un producto con ese id Unico"));
            }
            productDb.setIdUnico(product.getIdUnico());
            productDb.setName(product.getName());
            productDb.setActive(product.getActive());
            productDb.setDescription(product.getDescription());
            productDb.setCompany(product.getCompany());
            productDb.setInstruction(product.getInstruction());
            productDb.setTimeEstimatedCompletion(product.getTimeEstimatedCompletion());
            productDb.setState(product.getState());
            productDb.setTimeEstimatedCompletion(product.getCreateDate());
            return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(productDb));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Product> productOptional = productService.byId(id);
        if(productOptional.isPresent()){
            productService.delete(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    private static ResponseEntity<Map<String, String>> getResponseEntity(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(error ->
                errors.put(error.getField(), "El campo " + error.getField() + " " + error.getDefaultMessage())
        );
        return ResponseEntity.badRequest().body(errors);
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
