package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface ClientRepository extends JpaRepository<Client, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM clients c WHERE c.company_id = :companyId ")
    Set<Client> findAllByCompany(Long companyId);
}
