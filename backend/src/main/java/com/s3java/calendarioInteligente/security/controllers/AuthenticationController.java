package com.s3java.calendarioInteligente.security.controllers;

import com.s3java.calendarioInteligente.security.dto.JwtAuthenticationResponse;
import com.s3java.calendarioInteligente.security.dto.SignInRequest;
import com.s3java.calendarioInteligente.security.dto.SignUpRequest;
import com.s3java.calendarioInteligente.security.dto.RefreshTokenRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.s3java.calendarioInteligente.security.services.AuthenticationService;
@RestController
@RequestMapping("/api/security/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest signUpRequest) {
        try {
        JwtAuthenticationResponse jwt = authenticationService.signup(signUpRequest);
        return ResponseEntity.ok(jwt);
        }
        catch (RuntimeException e){
            return  ResponseEntity.badRequest().body(e.getMessage());
        }


    }

    // The credentials must be previously registered in the database, otherwise a 403 error will be returned.
    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SignInRequest signinRequest) {
        return ResponseEntity.ok(authenticationService.signIn(signinRequest));
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
    }

}
