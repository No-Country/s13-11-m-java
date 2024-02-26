package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
