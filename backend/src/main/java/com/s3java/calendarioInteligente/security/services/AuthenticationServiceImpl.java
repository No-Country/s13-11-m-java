package com.s3java.calendarioInteligente.security.services;

import com.s3java.calendarioInteligente.controllers.api.ProductOrderController;
import com.s3java.calendarioInteligente.entities.CommonAttribute;
import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.entities.UserE;
import com.s3java.calendarioInteligente.exception.ProductOrderNotFoundException;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.repositories.UserRepository;
import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import com.s3java.calendarioInteligente.security.dto.SignInRequest;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import com.s3java.calendarioInteligente.security.entities.UserDtls;
import com.s3java.calendarioInteligente.utils.UserRole;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Optional;


@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private final Long companyId = 1L; // harcodeado

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;

    private final CompanyRepository companyRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderController.class);

    public AuthenticationServiceImpl(
                                     UserRepository userRepository,
                                     PasswordEncoder passwordEncoder,
                                     AuthenticationManager authenticationManager,
                                     CompanyRepository companyRepository,
                                     JWTService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.companyRepository = companyRepository;
    }

    public JwtAuthenticationResponse signup(SignUpRequest signUpRequest) throws RuntimeException{


        Optional<UserE> userOptional = this.userRepository.findByEmail(signUpRequest.getEmail());


        if ( userOptional.isPresent()){
            logger.error("That email already exists");
            throw new RuntimeException("That email already exists");
        }

        UserE user = new UserE();


        CommonAttribute commonAttr = new CommonAttribute();

        commonAttr.setEmail(signUpRequest.getEmail());
        commonAttr.setName(signUpRequest.getName());
        user.setRoles(Collections.singleton(UserRole.ROLE_ADMIN));
        commonAttr.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setCommonAttribute(commonAttr);
        Company company = this.companyRepository.findById(this.companyId)
                .orElseThrow(() -> new ProductOrderNotFoundException("company not found"));
        user.setCompany(company);
        this.userRepository.save(user);

        UserDtls userDetails = new UserDtls(signUpRequest.getName(), signUpRequest.getEmail(), signUpRequest.getPassword(),
                user.getRoles());

        String jwt = jwtService.generateToken(userDetails);
        String jwtRefresh = jwtService.generateRefreshToken(new HashMap<>(), userDetails);

        JwtAuthenticationResponse jar = new JwtAuthenticationResponse();
        jar.setToken(jwt);
        jar.setRefreshToken(jwtRefresh);

        return jar;
    }

    public JwtAuthenticationResponse signIn(SignInRequest signinRequest) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(),
                signinRequest.getPassword()));

        UserE userEntity =  userRepository.findByEmail(signinRequest.getEmail())
                .orElseThrow(()-> new IllegalArgumentException("Invalid credential data")
                );

        UserDtls user = new UserDtls(userEntity.getCommonAttribute().getName(),
                userEntity.getCommonAttribute().getEmail(),
                userEntity.getCommonAttribute().getPassword(),
                userEntity.getRoles());

        System.out.println(" ---------------- TOKEN ----------------");

        String jwt = jwtService.generateToken(user);

        String jwtRefresh = jwtService.generateRefreshToken(new HashMap<>(), user );

        JwtAuthenticationResponse jar = new JwtAuthenticationResponse();
        jar.setToken(jwt);
        jar.setRefreshToken(jwtRefresh);

        return jar;

    }

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest resfreshTokenRequest) {
        String userEmail = jwtService.extractUserName(resfreshTokenRequest.getToken());
        UserE user =  userRepository.findByEmail(userEmail)
                .orElseThrow(()-> new RuntimeException("user not found"));
        UserDtls userDtls = new UserDtls();
        if (jwtService.isTokenValid(resfreshTokenRequest.getToken(), userDtls)) {
            String jwt = jwtService.generateToken(userDtls);
            JwtAuthenticationResponse jar = new JwtAuthenticationResponse();
            jar.setToken(jwt);
            jar.setRefreshToken(resfreshTokenRequest.getToken());
            return jar;
        }
        return null;
    }


}
