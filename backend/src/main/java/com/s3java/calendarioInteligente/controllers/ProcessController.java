package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.services.impl.ProcessServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/process")
public class ProcessController {

    @Autowired
    private ProcessServiceImpl processService;

    @GetMapping("/")
    public ResponseEntity<?> getAllProcess(){
        return processService.getAllProcess();
    }


    @GetMapping("/{processID}")
    public ResponseEntity<?> getProcessByID(@PathVariable Long processID){
        return processService.getProcessByID(processID);
    }
}
