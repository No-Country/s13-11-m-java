package com.s3java.calendarioInteligente.security.services;

import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JWTService {

    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);

    String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userDetails);


}
