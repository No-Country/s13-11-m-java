package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.request.ClientRequest;
import com.s3java.calendarioInteligente.dto.response.ClientResponse;
import com.s3java.calendarioInteligente.entities.Client;

import java.util.List;
import java.util.Set;

public interface ClientService {

    List<Client> getAll();

    Client create(Client client);

    Client update(Client client) throws IllegalAccessException;


}
