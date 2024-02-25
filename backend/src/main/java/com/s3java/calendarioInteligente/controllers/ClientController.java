package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.services.inter.ClientService;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/clients")

public class ClientController {

    private final ClientService clientService;

    ClientController(
            ClientService clientService
    ){

        this.clientService = clientService;

    }

    @GetMapping(path = "/findAll")
    public ResponseEntity<Map<String, Object>> getAll(
            @RequestParam(defaultValue = "0") Integer offset,
            @RequestParam(defaultValue = "10") Integer limit
    ){
        return null;

    }
}
