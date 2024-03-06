package com.s3java.calendarioInteligente.mappers.productOrders;

import com.s3java.calendarioInteligente.dto.request.ClientRequest;
import com.s3java.calendarioInteligente.dto.response.ClientResponse;
import com.s3java.calendarioInteligente.entities.Client;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {TagMapper.class})
public interface ClientMapper {

    ClientMapper INSTANCE = Mappers.getMapper(ClientMapper.class);
    Client ClientRequestToClient(ClientRequest ClientRequest);

    ClientResponse clientToClientResponse(Client client);

    List<ClientResponse> ClientsToClientsResponse(List<Client> clients);

}
