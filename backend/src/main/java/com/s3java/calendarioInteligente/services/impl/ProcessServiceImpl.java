package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.repositories.ProcessRepository;
import com.s3java.calendarioInteligente.services.inter.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ProcessServiceImpl  implements ProcessService {

    @Autowired
    private ProcessRepository processRepository;


    @Override
    public ResponseEntity<?> createProcess(ProductProcess productProcess) {
        return new ResponseEntity<>(processRepository.save(productProcess), HttpStatus.OK);
    }
}
