package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM user u WHERE u.email = :email", nativeQuery = true)
    Optional<User> findFirstByEmail(String email);
}
