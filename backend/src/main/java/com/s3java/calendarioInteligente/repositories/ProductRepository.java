package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.expression.spel.support.ReflectivePropertyAccessor;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByIdUnico(String idUnico);
    Optional<Product> findByName(String name);



}
