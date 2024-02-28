package com.s3java.calendarioInteligente.security.services;


import com.s3java.calendarioInteligente.security.repositories.UserRepositoryI;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {


    private final UserRepositoryI userRepository;

    public UserServiceImpl(UserRepositoryI userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRepository
                        .findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found."));
            }
        };
    }

}
