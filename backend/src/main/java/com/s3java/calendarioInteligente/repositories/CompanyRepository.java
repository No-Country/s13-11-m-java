package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
