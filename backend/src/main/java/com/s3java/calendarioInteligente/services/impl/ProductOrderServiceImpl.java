package com.s3java.calendarioInteligente.services.impl;

import com.s3java.calendarioInteligente.dto.request.ProductOrderRequest;
import com.s3java.calendarioInteligente.dto.response.ProductOrderResponse;
import com.s3java.calendarioInteligente.entities.Client;
import com.s3java.calendarioInteligente.entities.Company;
import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.ProductOrder;
import com.s3java.calendarioInteligente.exception.ProductOrderNotFoundException;
import com.s3java.calendarioInteligente.mappers.productOrders.ProductOrderMapper;
import com.s3java.calendarioInteligente.repositories.ClientRepository;
import com.s3java.calendarioInteligente.repositories.CompanyRepository;
import com.s3java.calendarioInteligente.repositories.ProductOrderRepository;
import com.s3java.calendarioInteligente.repositories.ProductRepository;
import com.s3java.calendarioInteligente.services.inter.ProductOrderService;
import com.s3java.calendarioInteligente.services.inter.ProductService;
import com.s3java.calendarioInteligente.utils.DateUtils;
import com.s3java.calendarioInteligente.utils.ReflectionUtil;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductOrderServiceImpl implements ProductOrderService {


    private final Long companyId = 1L; // TODO sacar de JWT token
    private final ProductOrderRepository productOrderRepository;
    private final ClientRepository clientRepository; // TODO cambiar por respectivo servicio
    private final ProductOrderMapper productOrderMapper;
    private final ProductService productService;

    private final CompanyRepository companyRepository; // TODO cambiar por respectivo servicio

    private static final Logger logger = LoggerFactory.getLogger(ProductOrderServiceImpl.class);
    private LocalDateTime timeNow = LocalDateTime.now();


    ProductOrderServiceImpl(ProductOrderRepository productOrderRepository,
                            ClientRepository clientRepository,
                            ProductService productService,
                            CompanyRepository companyRepository,
                            ProductOrderMapper productOrderMapper
    ){
        this.productOrderRepository = productOrderRepository;
        this.clientRepository = clientRepository;
        this.productOrderMapper  = productOrderMapper;
        this.productService  = productService;
        this.companyRepository = companyRepository;


    }
    @Override
    public List<ProductOrderResponse> findAllProductOrders() throws Exception {
        List<ProductOrder> productOrder = this.productOrderRepository.findAllProductOrders(companyId);
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


        ProductOrder productOrder = this.createProductOrderWithEntryDateFromRequest(productOrderRequest);


        this.validateDateOrder(productOrder.getInitialDate(), this.timeNow,
                "The initial date must not be earlier than the entry date.");
        this.validateDateOrder(productOrder.getFinishEstimatedDate(), this.timeNow,
                "The finish estimated date must not be earlier than the entry date.");

        this.validateDateOrder(productOrder.getFinishEstimatedDate(), productOrder.getInitialDate(),
                "The finish estimated date must not be earlier than the initial date.");


        productOrder.setActive(true);

        // TODO adaptar cuando esten Product y Client repositorios

        Client clientSaved = this.clientRepository.save(productOrderRequest.getClient());


        Company company = this.companyRepository.findById(this.companyId)
                .orElseThrow(() -> new EntityNotFoundException("company was not found"));


        Product product = this.findProductByIdOrThrow((productOrderRequest.getProductId()));

        productOrder.setProduct(product);
        productOrder.setCompany(company);
        productOrder.setClient(clientSaved);
        ProductOrder productOrderSaved = this.productOrderRepository.save(productOrder);
        return this.productOrderMapper.productOrderToProductOrderResponse(productOrderSaved);
    }

    @Override
    @Transactional
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

    @Transactional
    @Override
    public void deleteProductOrder(Long productOrderId) throws Exception {


        ProductOrder po = this.productOrderRepository.findById(productOrderId)
                .orElseThrow(() -> new EntityNotFoundException("Product order not found with ID: " + productOrderId));
        po.setIsActive(false);
        Company company = po.getCompany();
        Hibernate.initialize(company.getEmployee());
        productOrderRepository.save(po);

    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByFinishDate(String date) {
        logger.debug(date);
        LocalDateTime dateConverted = DateUtils.converFromString(date);
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByFinishDate(dateConverted, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByEntry(String date) {
        LocalDateTime dateConverted = DateUtils.converFromString(date);
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByEntryDate(dateConverted, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    @Override
    public List<ProductOrderResponse> findProductOrdersByInitialDate(String date) {
        LocalDateTime dateConverted = DateUtils.converFromString(date);
        List<ProductOrder> productOrders = this.productOrderRepository.findProductOrdersByInitialDate(dateConverted, companyId);
        return this.productOrderMapper.productOrdersToProductOrdersResponse(productOrders);
    }

    private ProductOrder createProductOrderWithEntryDateFromRequest(ProductOrderRequest productOrderRequest) {
        ProductOrder productOrder = this.productOrderMapper.productOrderRequestToProductOrder(productOrderRequest);
        productOrder.setEntryDate(this.timeNow);
        return productOrder;
    }



    private void validateDateOrder(LocalDateTime firstDateToValidate, LocalDateTime secondDateToValidate, String errorMessage) throws IllegalArgumentException {
        if (DateUtils.isNotBeforeOrEqual(firstDateToValidate, secondDateToValidate)) {
            logger.error(errorMessage);
            throw new IllegalArgumentException(errorMessage +
                    " Please ensure that the date is equal to or later than the entry date");
        }

    }

    //TODO implementar
    /*
    private Client saveClient(Client client) {
        return this.clientService.saveClient(client);
    }*/

    private Product findProductByIdOrThrow(Long productId)
            throws EntityNotFoundException {
        return this.productService.byId(productId)
                .orElseThrow(() -> {
                    logger.error("product with id " +
                            productId +
                            "not found");
                   throw new EntityNotFoundException("product with id " +
                            productId +
                            " not found");
                });
    }

}
