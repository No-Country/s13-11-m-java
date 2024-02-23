package com.s3java.calendarioInteligente.controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.s3java.calendarioInteligente.dto.AuthenticationRequest;
import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;
import com.s3java.calendarioInteligente.entities.User;
import com.s3java.calendarioInteligente.repositories.UserRepository;
import com.s3java.calendarioInteligente.services.auth.AuthService;
import com.s3java.calendarioInteligente.utils.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Optional;

@RestController

public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING= "Authorization";
    private final AuthService authService;

    public AuthController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService, UserRepository userRepository, JwtUtil jwtUtil, AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.authService = authService;
    }

    @PostMapping("/login")
    public void createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest,

                                        HttpServletResponse response) throws IOException, JSONException {
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()));
        } catch (BadCredentialsException e){
            throw new BadCredentialsException("Incorrect username o password.");
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        Optional<User> optionalUser = userRepository.findFirstByEmail(userDetails.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        if (optionalUser.isPresent()){
            response.getWriter().write(new JSONObject()
                    .put("userId", optionalUser.get().getId())
                    .put("role", optionalUser.get().getRole())
                    .toString()
            );

            response.addHeader(HEADER_STRING, TOKEN_PREFIX + jwt);
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest){
        if (authService.hasUserWithEmail(signupRequest.getEmail())){
            return new ResponseEntity<>("User already exist", HttpStatus.NOT_ACCEPTABLE);
        }
        UserDto userDto = authService.createUser(signupRequest);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
