package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Product;
import java.util.List;
import java.util.Optional;
import com.s3java.calendarioInteligente.entities.ProductProcess;
import org.springframework.http.ResponseEntity;

public interface ProductService {

    List<Product> list();
    Optional<Product> byId(Long id);
    Product save(Product product);
    void delete(Long id);
    Optional<Product> byIdUnico(String idUnico);
    Optional<Product> byName(String name);
    ResponseEntity<?> addProcessToProduct(ProductProcess process, Long productID);
    ResponseEntity<?> deleteProcessFromProduct(Long productID, Long processID);

    void updateTimeAverage(Long productId) throws Exception;

    Product updateProduct(Long id, Product product) throws Exception;

    void updateProductTimeEstimatedCompletion(Product product);
}
