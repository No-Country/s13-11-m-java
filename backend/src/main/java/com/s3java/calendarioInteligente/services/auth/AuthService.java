package com.s3java.calendarioInteligente.services.auth;

import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signUpRequest);


}
