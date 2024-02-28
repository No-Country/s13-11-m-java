package com.s3java.calendarioInteligente.security.services;


import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import com.s3java.calendarioInteligente.security.dto.SignInRequest;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import com.s3java.calendarioInteligente.security.entities.Role;
import com.s3java.calendarioInteligente.security.entities.User;
import com.s3java.calendarioInteligente.security.repositories.UserRepositoryI;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepositoryI userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;

    public AuthenticationServiceImpl(UserRepositoryI userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JWTService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public User signup(SignUpRequest signUpRequest) {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setName(signUpRequest.getName());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepository.save(user);
    }

    public JwtAuthenticationResponse signIn(SignInRequest signinRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()));

        var user = userRepository.findByEmail(signinRequest.getEmail())
                .orElseThrow(()-> new IllegalArgumentException("Invalid credential data")
                );

        var jwt = jwtService.generateToken(user);

        var jwtRefresh = jwtService.generateRefreshToken(new HashMap<>(), user );

        JwtAuthenticationResponse jar = new JwtAuthenticationResponse();
        jar.setToken(jwt);
        jar.setRefreshToken(jwtRefresh);

        return jar;

    }

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest resfreshTokenRequest) {
        String userEmail = jwtService.extractUserName(resfreshTokenRequest.getToken());
        User user =  userRepository.findByEmail(userEmail).orElseThrow();
        if (jwtService.isTokenValid(resfreshTokenRequest.getToken(), user)) {
            var jwt = jwtService.generateToken(user);
            JwtAuthenticationResponse jar = new JwtAuthenticationResponse();
            jar.setToken(jwt);
            jar.setRefreshToken(resfreshTokenRequest.getToken());
            return jar;
        }
        return null;
    }


}
