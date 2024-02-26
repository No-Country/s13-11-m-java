package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcessRepository extends JpaRepository<ProductProcess, Long> {
}
