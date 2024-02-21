package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;
import com.s3java.calendarioInteligente.services.auth.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/login")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest){
       UserDto createdUserDto = authService.createUser(signupRequest);
       if (createdUserDto == null)
           return new ResponseEntity<>
           ("User not created",HttpStatus.BAD_REQUEST);

       return new ResponseEntity<>(createdUserDto,HttpStatus.CREATED);

    }

}
