package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.repositories.SubProcessRepository;
import com.s3java.calendarioInteligente.services.inter.SubProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SubProcessServiceImpl implements SubProcessService {
    @Autowired
    private SubProcessRepository subProcessRepository;


    @Override
    public ResponseEntity<?> getAllSubProcesses() {
        return new ResponseEntity<>(subProcessRepository.findAll(), HttpStatus.OK);
    }
}
