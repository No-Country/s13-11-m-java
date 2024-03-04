package com.s3java.calendarioInteligente.repositories;

import com.s3java.calendarioInteligente.entities.ProductOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM product_orders po WHERE po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findAllProductOrders(@Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_orders po WHERE po.id = :productOrderId AND po.company_id = :companyId AND po.is_active = true")
    Optional<ProductOrder> findProductOrderById(@Param("productOrderId") Long productOrderId,
                                                        @Param("companyId") Long companyId);


    @Query(nativeQuery = true,
            value = "SELECT * FROM product_orders po WHERE po.client_id = :clientId AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByClientId(@Param("clientId") Long clientId,
                                                           @Param("companyId") Long companyId);
    @Modifying
    @Query(nativeQuery = true, value = "DELETE FROM product_orders WHERE id = :productOrderId")
    void deleteProductOrder(@Param("productOrderId") Long productOrderId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_orders po WHERE po.finish_est_date = :date AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByFinishDate(@Param("date") String date,
                                               @Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_orders po WHERE po.entry_date = :date AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByEntryDate(@Param("date") String date,
                                               @Param("companyId") Long companyId);

    @Query(nativeQuery = true,
            value = "SELECT * FROM product_orders po WHERE po.initial_date = :date AND po.company_id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByInitialDate(@Param("date") String date,
                                               @Param("companyId") Long companyId);

    @Modifying
    @Query("UPDATE ProductOrder po SET po.finishEstimatedDate = :finishEstimatedDate WHERE po.id = :orderId")
    int updateFinishDate(String finishEstimatedDate);


    @Modifying
    @Query("UPDATE ProductOrder po SET po.dateStart = :newStartDate WHERE po.id = :orderId")
    int updateStartDate(@Param("orderId") Long orderId, @Param("newStartDate") Timestamp newStartDate);

    @Modifying
    @Query("UPDATE ProductOrder po SET po.dateEnd = :newEndDate WHERE po.id = :orderId")
    int updateEndDate(@Param("orderId") Long orderId, @Param("newEndDate") Timestamp newEndDate);

    // TODO ver luego para pasar a peticiones con fetch eager
    /*
    @Query(nativeQuery = true, value = "SELECT * FROM product_orders po LEFT JOIN product p ON po.product_id = p.id LEFT JOIN companies c ON po.company_id = c.id WHERE c.id = :companyId AND po.is_active = true")
    List<ProductOrder> findAllProductOrdersEager(@Param("companyId") Long companyId);

    @Query(nativeQuery = true, value = "SELECT * FROM product_orders po LEFT JOIN product p ON po.product_id = p.id LEFT JOIN companies c ON po.company_id = c.id WHERE po.id = :productOrderId")
    Optional<ProductOrder> findProductOrderByIdEager(@Param("productOrderId") Long productOrderId);

    @Query(nativeQuery = true, value = "SELECT * FROM product_orders po LEFT JOIN product p ON po.product_id = p.id LEFT JOIN company c ON po.company_id = c.id WHERE po.client_id = :clientId AND c.id = :companyId AND po.is_active = true")
    List<ProductOrder> findProductOrdersByClientIdEager(@Param("clientId") Long clientId,
                                                        @Param("companyId") Long companyId);*/

}
