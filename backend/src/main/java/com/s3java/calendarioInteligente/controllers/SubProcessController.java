package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.services.impl.SubProcessServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subprocess")
public class SubProcessController {

    @Autowired
    private SubProcessServiceImpl subProcessService;

    @GetMapping("/")
    public ResponseEntity<?> getAllSubProcesses(){
        return subProcessService.getAllSubProcesses();
    }
}
