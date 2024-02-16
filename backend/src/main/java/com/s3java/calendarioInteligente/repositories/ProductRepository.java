package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
