package com.s3java.calendarioInteligente.services.auth;

import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;
import com.s3java.calendarioInteligente.entities.User;
import com.s3java.calendarioInteligente.repositories.UserRepository;
import com.s3java.calendarioInteligente.roles.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserDto createUser(SignupRequest signUpRequest){
        User user = new User();

        user.getCommonAttribute().setEmail(signUpRequest.getEmail());
        user.getCommonAttribute().setName(signUpRequest.getName());
        user.getCommonAttribute().setPassword(new BCryptPasswordEncoder().encode(signUpRequest.getPassword()));
        user.setRole(Role.ROLE_EMPLOYEE);
        User createdUser = userRepository.save(user);

        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());

        return userDto;
    }

    public Boolean hasUserWithEmail(String email){
        return userRepository.findFirstByEmail(email).isPresent();

    }

}
