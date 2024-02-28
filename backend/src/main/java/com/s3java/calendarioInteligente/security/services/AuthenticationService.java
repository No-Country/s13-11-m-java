package com.s3java.calendarioInteligente.security.services;


import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import com.s3java.calendarioInteligente.security.dto.SignInRequest;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import com.s3java.calendarioInteligente.security.entities.User;

public interface AuthenticationService {

    User signup(SignUpRequest signUpRequest);

    JwtAuthenticationResponse signIn(SignInRequest signinRequest);

    JwtAuthenticationResponse refreshToken(RefreshTokenRequest resfreshTokenRequest);

}
