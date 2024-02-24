package com.s3java.calendarioInteligente.services.inter;

import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.mappers.productOrders.ProductOrderMapper;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.impl.ProductOrderServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ProductOrderServiceTest {

    @Mock
    private ProductOrderRepository productOrderRepository;

    @Mock
    private ClientRepository clientRepository;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private CompanyRepository companyRepository;

    @Mock
    private ProductOrderMapper productOrderMapper;

    @InjectMocks
    private ProductOrderServiceImpl productOrderService;

    @Test
    void findAllProductOrders() throws Exception {

        List<ProductOrder> mockProductOrders = Arrays.asList(/* create some ProductOrder instances */);
        when(productOrderRepository.findAllProductOrders(anyLong())).thenReturn(mockProductOrders);
        List<ProductOrderResponse> result = productOrderService.findAllProductOrders();
        assertNotNull(result);
    }

    @Test
    void findProductOrderById() {

        Long productId = 1L;
        ProductOrder mockProductOrder = /* create a ProductOrder instance */;
        Optional<ProductOrder> optionalProductOrder = Optional.of(mockProductOrder);
        when(productOrderRepository.findProductOrderById(eq(productId), anyLong())).thenReturn(optionalProductOrder);

        ProductOrderResponse result = productOrderService.findProductOrderById(productId);


        assertNotNull(result);
    }

    @Test
    void findProductOrdersByClientId() {
    }

    @Test
    void createProductOrder() {
    }

    @Test
    void updateProductOrder() {
    }

    @Test
    void deleteProductOrder() {
    }

    @Test
    void findProductOrdersByFinishDate() {
    }

    @Test
    void findProductOrdersByEntry() {
    }

    @Test
    void findProductOrdersByInitialDate() {
    }
}