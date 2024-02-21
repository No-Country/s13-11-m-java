package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {
}
