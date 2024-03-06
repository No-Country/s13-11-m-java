package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.CommonAttribute;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.services.impl.ClientServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ClientServiceTest {

    private final Long companyId = 1L;
    private static final ClientRepository clientRepository = mock(ClientRepository.class);
    private final ClientServiceImpl clientService = new ClientServiceImpl(clientRepository);

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        // Puedes cargar datos de prueba en el repositorio aquí
        List<Client> clients = new ArrayList<>();

        CommonAttribute ca = new CommonAttribute();

        Client client1 = new Client();
        client1.setId(1L);
        ca.setName("nombre1");
        client1.setCommonAttribute(ca);
        Client client2 = new Client();
        client2.setId(2L);
        ca.setName("nombre2");
        client2.setCommonAttribute(ca);
        Client client3 = new Client();
        client3.setId(3L);
        ca.setName("nombre3");
        client3.setCommonAttribute(ca);

        clients.add(client1);
        clients.add(client2);
        clients.add(client3);


        when(clientRepository.findAll()).thenReturn(clients);


    }


    @Test
    void getAllTest() {
        List<Client> result = clientService.getAll();

        List<Client> clients = new ArrayList<>();

        CommonAttribute ca = new CommonAttribute();

        Client client1 = new Client();
        client1.setId(1L);
        ca.setName("nombre1");
        client1.setCommonAttribute(ca);
        Client client2 = new Client();
        client2.setId(2L);
        ca.setName("nombre2");
        client2.setCommonAttribute(ca);
        Client client3 = new Client();
        client3.setId(3L);
        ca.setName("nombre3");
        client3.setCommonAttribute(ca);
        clients.add(client1);
        clients.add(client2);
        clients.add(client3);

        assertEquals(3, result.size());

        // Verificar que las entidades son las mismas (usando equals)
        assertEquals(result.get(0), client1);
        assertEquals(result.get(1), client2);

    }

    @Test
    void createTest() {
        // Given
        Client newClient = new Client();
        Client savedClient = new Client();

        when(clientRepository.save(newClient)).thenReturn(savedClient);

        // When
        Client result = clientService.create(newClient);

        // Then
        assertEquals(savedClient, result);
        verify(clientRepository, times(1)).save(newClient);
    }

    @Test
    void update() {
        // Given
        Client clientToUpdate = new Client();
        clientToUpdate.setId(1L);
        CommonAttribute newAttributes = new CommonAttribute();
        newAttributes.setName("UpdatedName");
        newAttributes.setEmail("updated@example.com");
        clientToUpdate.setCommonAttribute(newAttributes);

        Client existingClient = new Client();
        existingClient.setId(1L);
        CommonAttribute existingAttributes = new CommonAttribute();
        existingAttributes.setName("OldName");
        existingAttributes.setEmail("old@example.com");
        existingClient.setCommonAttribute(existingAttributes);

        when(clientRepository.findById(1L)).thenReturn(java.util.Optional.of(existingClient));
        when(clientRepository.save(any())).thenAnswer(invocation -> invocation.getArguments()[0]);

        // When
        Client updatedClient = null;
        try {
            updatedClient = clientService.update(clientToUpdate);
        } catch (IllegalAccessException e) {
            fail("IllegalAccessException not expected");
        }

        // Then
        assertEquals(clientToUpdate.getId(), updatedClient.getId());
        assertEquals(clientToUpdate.getCommonAttribute().getName(), updatedClient.getCommonAttribute().getName());
        assertEquals(clientToUpdate.getCommonAttribute().getEmail(), updatedClient.getCommonAttribute().getEmail());

        verify(clientRepository, times(1)).findById(1L);
        verify(clientRepository, times(1)).save(any());
    }

    @Test
    void updateClient_EntityNotFoundException() {
        // Given
        Client clientToUpdate = new Client();
        clientToUpdate.setId(1L);

        when(clientRepository.findById(1L)).thenReturn(java.util.Optional.empty());

        // When/Then
        assertThrows(EntityNotFoundException.class, () -> clientService.update(clientToUpdate));

        verify(clientRepository, times(1)).findById(1L);
        verify(clientRepository, never()).save(any());
    }
}