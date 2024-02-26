package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.services.inter.ClientService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ClientServiceImpl implements ClientService {


    private final Long companyId = 1L; // TODO debe venir de token

    private final ClientRepository clientRepository;

    ClientServiceImpl(
            ClientRepository clientRepository
    ){
        this.clientRepository = clientRepository;
    }

    @Override
    public Set<Client> getAll() {
        return this.clientRepository.findAllByCompany(this.companyId);
    }

    @Override
    public Client create(Client client) {
        return this.clientRepository.save(client);
    }
}
