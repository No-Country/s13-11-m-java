package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.CommonAttribute;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.services.impl.ClientServiceImpl;
import org.junit.jupiter.api.BeforeAll;
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
        Client client = new Client();
        CommonAttribute ca = new CommonAttribute();
        ca.setEmail("ejemplo@gmail.com");
        ca.setName("nombre");
        ca.setPhone("123456");
        client.setId(1L);
        client.setCommonAttribute(ca);

        Client updatedClient = new Client();
        ca.setName("nombreActualizado");
        ca.setPassword("advc");
        updatedClient.setId(1L);
        updatedClient.setCommonAttribute(ca);
        doReturn(updatedClient).when(clientRepository).save(client);

        // When
        Client result = null;
        try {
            result = clientService.update(client);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }

        // Then
        // Verificar que el resultado es el cliente actualizado simulado
        assertEquals(updatedClient, result);

        // Verificar que el método save del repositorio fue llamado con el cliente modificado
        verify(clientRepository, times(1)).save(client);
    }
}