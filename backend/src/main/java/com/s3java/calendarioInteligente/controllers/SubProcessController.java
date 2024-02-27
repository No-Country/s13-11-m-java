package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.SubProcess;
import com.s3java.calendarioInteligente.services.impl.SubProcessServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subprocess")
public class SubProcessController {

    @Autowired
    private SubProcessServiceImpl subProcessService;

    @GetMapping("/")
    public ResponseEntity<?> getAllSubProcesses(){
        return subProcessService.getAllSubProcesses();
    }

    @PutMapping("/{subProcessID}")
    public ResponseEntity<?> updateSubProcessByID(@Valid @RequestBody SubProcess subProcess, @PathVariable Long subProcessID){
        return subProcessService.updateByID(subProcess ,subProcessID);
    }
}
