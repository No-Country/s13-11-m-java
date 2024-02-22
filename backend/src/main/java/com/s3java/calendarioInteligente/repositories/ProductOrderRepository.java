package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM product_order po WHERE po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findAllProducts(@Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_order po WHERE po.id = :productOrderId AND po.company_id = :companyId")
    Optional<ProductOrder> findProductOrderById(@Param("productOrderId") Long productOrderId,
                                                        @Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_order po WHERE po.date = :date AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByDate(@Param("date") LocalDate date,
                                                       @Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_order po WHERE po.client_id = :clientId AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByClientId(@Param("clientId") Long clientId,
                                                           @Param("companyId") Long companyId);
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM product_order WHERE id = :productOrderId")
    void deleteProductOrder(@Param("productOrderId") Long productOrderId);

}
