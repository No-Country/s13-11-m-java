package com.s3java.calendarioInteligente.security.repositories;

import com.s3java.calendarioInteligente.security.entities.Role;
import com.s3java.calendarioInteligente.security.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepositoryI extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    User findByRole(Role role);

}
