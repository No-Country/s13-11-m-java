package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Client;

import java.util.Set;

public interface ClientService {

    public Set<Client> getAll();

    public Client create(Client client);
}
