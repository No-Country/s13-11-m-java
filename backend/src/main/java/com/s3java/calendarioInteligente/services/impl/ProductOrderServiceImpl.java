package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.mappers.productOrders.ProductOrderMapper;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {


    private final Long companyId = 1L;
    private final ProductOrderRepository productOrderRepository;
    private final ClientRepository clientRepository;
    private final ProductOrderMapper productOrderMapper;

    private final ProductRepository productRepository;

    private final CompanyRepository companyRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderServiceImpl.class);



    ProductOrderServiceImpl(ProductOrderRepository productOrderRepository,
                            ClientRepository clientRepository,
                            ProductRepository productRepository,
                            CompanyRepository companyRepository,
                            ProductOrderMapper productOrderMapper
    ){
        this.productOrderRepository = productOrderRepository;
        this.clientRepository = clientRepository;
        this.productOrderMapper  = productOrderMapper;
        this.productRepository  = productRepository;
        this.companyRepository = companyRepository;


    }
    @Override
    public List<ProductOrderResponse> findAllProducts() throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository.findAllProducts(companyId);
        List<ProductOrderResponse> productOrdersResponse = this.productOrderMapper.productOrdersToProductOrdersResponse(productOrder);
        return productOrdersResponse;
    }

    @Override
    public ProductOrderResponse findProductOrderById(Long productOrderId) throws Exception {
        logger.info(""+productOrderId + companyId);
         Optional<ProductOrder> productOrderOptional = this.productOrderRepository
                 .findProductOrderById(productOrderId, this.companyId);
         productOrderOptional.orElseThrow( ()-> new Exception("user no found"));
         return this.productOrderMapper.productOrderToProductOrderResponse(productOrderOptional.get());
    }


    @Override
    public List<ProductOrderResponse> findProductOrdersByClientId(Long clientId) throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository
                .findProductOrdersByClientId(clientId, this.companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrder);
    }

    @Transactional
    @Override
    public ProductOrderResponse createProductOrder(ProductOrderRequest productOrderRequest) throws Exception {


        ProductOrder productOrder = this.productOrderMapper.productOrderRequestToProductOrder(productOrderRequest);
        productOrder.setEntryDate(LocalDate.now());
        productOrder.setActive(true);



        // TODO adaptar cuando este Product y demas repositorios
        Company company = this.companyRepository.findById(this.companyId)
                .orElseThrow(() -> new EntityNotFoundException("company not found"));
        Product p = new Product();
        Client c = new Client();
        p = this.productRepository.save(p);
        c = this.clientRepository.save(c);


        /*Product product = this.productRepository.findById(productOrderRequest.getProductId())
                .orElseThrow(() -> new  EntityNotFoundException("product not found"));*/

        productOrder.setProduct(p);

        productOrder.setCompany(company);


        //-------------------------------

        List lista = new ArrayList();
        ProductOrder productOrderSaved = this.productOrderRepository.save(productOrder);
        lista.add(productOrderSaved);
        company.setProductOrders(lista);
        return this.productOrderMapper.productOrderToProductOrderResponse(productOrderSaved);
    }

    @Override
    public ProductOrderResponse updateProductOrder(Long productOrderId,
                                                   ProductOrderRequest productOrderRequest) throws Exception {
        ProductOrder oldProductOrder = this.productOrderRepository
                .findProductOrderById(productOrderId, this.companyId)
                .orElseThrow(() ->
                        new EntityNotFoundException("user + " + productOrderId + "does not found"));

        ReflectionUtil.copyNonNullProperties(productOrderRequest, oldProductOrder);

        ProductOrder productOrderUpdated = this.productOrderRepository.save(oldProductOrder);
        return this.productOrderMapper.productOrderToProductOrderResponse(productOrderUpdated);
    }

    @Override
    public void deleteProductOrder(Long productOrderId) throws Exception {
        Optional<ProductOrder> optionalOrder = this.productOrderRepository.findById(productOrderId);
        optionalOrder.ifPresent(productOrder -> {
            productOrder.setIsActive(false);
            productOrderRepository.save(productOrder);
        });
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByFinishDate(LocalDate date) {
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByFinishDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByEntry(LocalDate date) {
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByEntryDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByInitialDate(LocalDate date) {
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByInitialDate(date, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }
}
