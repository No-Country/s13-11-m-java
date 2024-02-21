package com.s3java.calendarioInteligente.services.auth;

import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;
import com.s3java.calendarioInteligente.entities.User;
import com.s3java.calendarioInteligente.repositories.UserRepository;

import com.s3java.calendarioInteligente.utils.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    public UserDto createUser(SignupRequest signupRequest){
        User user = new User();

        user.getCommonAttribute().setEmail(signupRequest.getEmail());
        user.getCommonAttribute().setName(signupRequest.getName());
        user.setCompany(signupRequest.getCompany());
        user.getCommonAttribute().setPassword(signupRequest.getPassword());

        user.setRole(Role.ROLE_EMPLOYEE);
        User createdUser = userRepository.save(user);

        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());

        return userDto;
    }



}
