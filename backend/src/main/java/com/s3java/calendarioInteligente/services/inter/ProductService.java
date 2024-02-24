package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import org.springframework.http.ResponseEntity;

public interface ProductService {
    ResponseEntity<?> addProcessToProduct(ProductProcess process, Long productID);
    ResponseEntity<?> deleteProcessFromProduct(Long productID, Long processID);
}
