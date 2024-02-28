package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.services.inter.ClientService;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ClientServiceImpl implements ClientService {


    private final Long companyId = 1L; // TODO debe venir de token

    private final ClientRepository clientRepository;

    public ClientServiceImpl(
            ClientRepository clientRepository
    ){
        this.clientRepository = clientRepository;
    }

    @Override
    public List<Client> getAll() {

        return this.clientRepository.findAll();
    }

    @Override
    public Client create(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public Client update(Client client) throws IllegalAccessException {

        Client oldClient = this.clientRepository.findById(client.getId())
                .orElseThrow(()-> new EntityNotFoundException("Client with id " + client.getId() + " not found"));

        ReflectionUtil.copyNonNullProperties(client, oldClient);
        return this.clientRepository.save(client);
    }
}
