package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> list();
    Optional<Product> byId(Long id);
    Product save(Product product);
    void delete(Long id);
    Optional<Product> byIdUnico(String idUnico);
    Optional<Product> byName(String name);
}
