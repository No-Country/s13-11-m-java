package com.s3java.calendarioInteligente.services.inter;

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

    }

    @Test
    void findProductOrderById() {


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