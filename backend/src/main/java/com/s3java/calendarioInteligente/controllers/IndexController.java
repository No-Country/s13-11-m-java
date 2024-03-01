package com.s3java.calendarioInteligente.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public ResponseEntity<?> index() {

        Map<String, String> map = new HashMap<>();
        map.put("message","Hello World!");
        map.put("team","s13-11-m-java");
        map.put("deploy","https://s13-11-m-java.vercel.app/");
        return ResponseEntity.ok(map);
    }
}
