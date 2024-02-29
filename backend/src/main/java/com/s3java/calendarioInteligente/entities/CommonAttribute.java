package com.s3java.calendarioInteligente.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Embeddable
public class CommonAttribute {

    @Column(name = "email", unique = true)
    @Email
    @NotBlank
    @Size(max = 70)
    private String email;

    @Column(name = "password")
    @NotBlank
    private String password;

    @Column(name = "address")
    @Size(max = 70)
    private String address;

    @Column(name = "phone")
    @Size(max = 50)
    private String phone;

    @Column(name = "name")
    @NotBlank
    @Size(max = 60)
    private String name;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


}
