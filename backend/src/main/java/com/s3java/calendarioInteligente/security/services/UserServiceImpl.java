package com.s3java.calendarioInteligente.security.services;


import com.s3java.calendarioInteligente.entities.UserE;
import com.s3java.calendarioInteligente.repositories.UserRepository;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import com.s3java.calendarioInteligente.security.entities.UserDtls;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.attribute.UserPrincipal;

@Service
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
       this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

                System.out.println("-------------ENTRA A LOADER ---------");
                UserE userEntity = userRepository
                        .findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found."));
                UserDtls ud = new UserDtls(
                        userEntity.getCommonAttribute().getName(),
                        userEntity.getCommonAttribute().getEmail(),
                        userEntity.getCommonAttribute().getPassword(),
                        userEntity.getRoles()
                        );

                return ud;
            }
        };
    }

    @Override
    public UserE createUser(SignUpRequest signUpRequest) {
        return null;
    }

}
