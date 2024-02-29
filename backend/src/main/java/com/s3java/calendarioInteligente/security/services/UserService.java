package com.s3java.calendarioInteligente.security.services;

import com.s3java.calendarioInteligente.entities.UserE;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserDetailsService userDetailsService();

    UserE createUser(SignUpRequest signUpRequest);

}
