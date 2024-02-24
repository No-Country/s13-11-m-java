package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import org.springframework.http.ResponseEntity;

public interface ProductService {
    ResponseEntity<?> getAllProducts();//Borrar antes de hacer merge

    ResponseEntity<?> createNewProduct(Product product);//Borrar antes de hacer merge
    ResponseEntity<?> addProcessToProduct(ProductProcess process, Long productID);
}
