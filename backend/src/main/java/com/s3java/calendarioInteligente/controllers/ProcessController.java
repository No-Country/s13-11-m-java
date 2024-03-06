package com.s3java.calendarioInteligente.controllers;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import com.s3java.calendarioInteligente.exception.exceptions.BindingResultException;
import com.s3java.calendarioInteligente.services.impl.ProcessServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/process")
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

    @DeleteMapping("/{processID}")
    public ResponseEntity<?> deleteProcessByID(@PathVariable Long processID){
        return processService.deleteByID(processID);
    }

    @PutMapping("/{processID}")
    public ResponseEntity<?> updateProcessByID(@RequestBody @Valid ProductProcess updatedProcess, BindingResult bindingResult, @PathVariable Long processID){
        if (bindingResult.hasErrors()){
            throw new BindingResultException(bindingResult);
        }
        return processService.updateByID(updatedProcess, processID);
    }

    @PostMapping("/subprocess/{processID}")
    public ResponseEntity<?> addSubProcessToProcess(@RequestBody @Valid  SubProcess subProcess, BindingResult bindingResult, @PathVariable Long processID){
        if (bindingResult.hasErrors()){
            throw new BindingResultException(bindingResult);
        }
        return processService.addSubProcessToProcess(subProcess, processID);
    }

    @DeleteMapping("/subprocess/{processID}/{subprocessID}")
    public ResponseEntity<?> deleteSubProcess(@PathVariable Long processID, @PathVariable Long subprocessID){
        return processService.deleteSubProcessFromProcess(processID, subprocessID);
    }

}
