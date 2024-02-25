package com.s3java.calendarioInteligente.services.auth;

import com.s3java.calendarioInteligente.dto.SignupRequest;
import com.s3java.calendarioInteligente.dto.UserDto;
import com.s3java.calendarioInteligente.entities.RoleE;
import com.s3java.calendarioInteligente.entities.UserE;
import com.s3java.calendarioInteligente.repositories.UserRepository;

import com.s3java.calendarioInteligente.utils.RoleType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {


    private final UserRepository userRepository;
    private final PasswordEncoder bCryptPasswordEncoder;

    AuthServiceImpl(
            UserRepository userRepository,
            PasswordEncoder bCryptPasswordEncoder

    ){
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;

    }


    public UserDto createUser(SignupRequest signUpRequest){



        Set<RoleE> roles = signUpRequest.getRoles()
                .stream()
                .map( role -> {
            RoleE roleE = new RoleE();
            roleE.setName(RoleType.valueOf(role));
            return roleE;
        } ).collect(Collectors.toSet());


        UserE user = new UserE();

        user.getCommonAttribute().setEmail(signUpRequest.getEmail());
        user.getCommonAttribute().setName(signUpRequest.getName());
        user.getCommonAttribute().setPassword(new BCryptPasswordEncoder().encode(signUpRequest.getPassword()));
        //user.getCommonAttribute().setPassword(signUpRequest.getPassword());

        user.setRoles(roles);
        UserE createdUser = userRepository.save(user);

        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());

        return userDto;
    }
    
    public Boolean hasUserWithEmail(String email){
        return userRepository.findFirstByEmail(email).isPresent();

    }

}
