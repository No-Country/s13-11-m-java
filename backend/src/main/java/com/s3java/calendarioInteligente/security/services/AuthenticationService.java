package com.s3java.calendarioInteligente.security.services;


import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import com.s3java.calendarioInteligente.security.dto.SignInRequest;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;

public interface AuthenticationService {

    JwtAuthenticationResponse signup(SignUpRequest signUpRequest) throws RuntimeException;

    JwtAuthenticationResponse signIn(SignInRequest signinRequest) throws Exception;

    JwtAuthenticationResponse refreshToken(RefreshTokenRequest resfreshTokenRequest);

}
