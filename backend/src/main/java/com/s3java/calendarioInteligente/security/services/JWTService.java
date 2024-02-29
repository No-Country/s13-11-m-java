package com.s3java.calendarioInteligente.security.services;

import com.s3java.calendarioInteligente.security.entities.UserDtls;

import java.util.Map;

public interface JWTService {

    String extractUserName(String token);

    String generateToken(UserDtls userDetails);

    boolean isTokenValid(String token, UserDtls userDetails);

    String generateRefreshToken(Map<String, Object> extraClaims, UserDtls userDetails);


}
