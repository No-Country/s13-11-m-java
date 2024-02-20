package com.s3java.calendarioInteligente.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/hello")
    public String hello(){
        return "hello actualizado ultima prueba de produccion ";
    }
}
