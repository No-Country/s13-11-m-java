package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.ProductProcess;
import com.s3java.calendarioInteligente.entities.SubProcess;
import com.s3java.calendarioInteligente.repositories.SubProcessRepository;
import com.s3java.calendarioInteligente.services.inter.SubProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SubProcessServiceImpl implements SubProcessService {
    @Autowired
    private SubProcessRepository subProcessRepository;


    @Override
    public ResponseEntity<?> getAllSubProcesses() {
        return new ResponseEntity<>(subProcessRepository.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> updateByID(SubProcess updatedSubProcess, Long subProcessIDToUpdate) {
        Optional<SubProcess> foundSubProcess = subProcessRepository.findById(subProcessIDToUpdate);
        if (foundSubProcess.isPresent()){
            SubProcess subProcessToUpdate = foundSubProcess.get();

            //Solo actualizo los atributos, lo de relaciones es de otro endpoints
            subProcessToUpdate.setSubProcessAttributes(updatedSubProcess.getSubProcessAttributes());
            return new ResponseEntity<>(subProcessRepository.save(subProcessToUpdate), HttpStatus.OK);
        }
        //TODO: Añadir mejor manejo de excepciones
        return new ResponseEntity<>("Product Not Found", HttpStatus.NOT_FOUND);
    }
}
