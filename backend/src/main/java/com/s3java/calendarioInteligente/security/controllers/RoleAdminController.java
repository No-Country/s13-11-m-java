package com.s3java.calendarioInteligente.security.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/security/admin")
public class RoleAdminController {

    @GetMapping
    public ResponseEntity<String> response() {
        return ResponseEntity.ok("Hello Admin!");
    }

}
