package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.repositories.ProcessRepository;
import com.s3java.calendarioInteligente.services.inter.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ProcessServiceImpl  implements ProcessService {

    @Autowired
    private ProcessRepository processRepository;


    @Override
    public ResponseEntity<?> getAllProcess() {
        return new ResponseEntity<>(processRepository.findAll(), HttpStatus.OK);
    }


    @Override
    public ResponseEntity<?> getProcessByID(Long processID) {
        Optional<ProductProcess> foundProcess = processRepository.findById(processID);
        if (foundProcess.isPresent()){
            return new ResponseEntity<>(foundProcess.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>("No process found", HttpStatus.NOT_FOUND);
    }
}
