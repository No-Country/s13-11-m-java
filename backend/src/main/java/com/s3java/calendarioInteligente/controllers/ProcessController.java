package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.services.impl.ProcessServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProcessController {

    @Autowired
    private ProcessServiceImpl processService;

    @GetMapping("/test")
    public String test(){
        return "Test Process";
    }

    @PostMapping("/")
    public ResponseEntity<?> createProcess(@Valid @RequestBody ProductProcess process){
        return processService.createProcess(process);
    }
}
