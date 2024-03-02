package com.s3java.calendarioInteligente.dto;


import com.s3java.calendarioInteligente.utils.UserRole;

import java.util.HashSet;
import java.util.Set;


public class UserDto {

    private Long id;
    private String email;


    private Set<UserRole> userRoles = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", userRoles=" + userRoles +
                '}';
    }
}
