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
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;


class ProductOrderServiceTest {

    @Mock
    private ProductOrderRepository productOrderRepository;

    @Mock
    private ClientRepository clientRepository;

    @Mock
    private ProductOrderMapper productOrderMapper;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private CompanyRepository companyRepository;

    @InjectMocks
    private ProductOrderServiceImpl productOrderService;

    @Test
    void findAllProducts() {
        when(productOrderRepository.findAllProducts(anyLong())).thenReturn(Arrays.asList(new ProductOrder()));


        List<ProductOrderResponse> result = null;
        try {
            result = productOrderService.findAllProducts();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        assertNotNull(result);
        assertFalse(result.isEmpty());
    }

    @Test
    void findProductOrderById() {
    }

    @Test
    void findProductOrdersByDate() {
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
}