package com.s3java.calendarioInteligente.dto;


import com.s3java.calendarioInteligente.entities.RoleE;

import java.util.HashSet;
import java.util.Set;

public class UserDto {

    private Long id;
    private String email;
    private String name;

    private Set<RoleE> userRoles = new HashSet<>();

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<RoleE> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<RoleE> userRoles) {
        this.userRoles = userRoles;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", userRoles=" + userRoles +
                '}';
    }
}
