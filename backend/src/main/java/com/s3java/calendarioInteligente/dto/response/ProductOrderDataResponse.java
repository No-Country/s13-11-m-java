package com.s3java.calendarioInteligente.dto.response;

import java.time.Month;
import java.util.Map;

public class ProductOrderDataResponse {
    private Integer totalPendientes;
    private Integer totalProgreso;
    private Integer totalTerminados;
    private Integer totalSuspendidos;
    private Integer totalProductOrders;
    private Map<Month, Integer> ordersByMonth;

    public ProductOrderDataResponse() {
    }

    public Integer getTotalPendientes() {
        return totalPendientes;
    }

    public void setTotalPendientes(Integer totalPendientes) {
        this.totalPendientes = totalPendientes;
    }

    public Integer getTotalProgreso() {
        return totalProgreso;
    }

    public void setTotalProgreso(Integer totalProgreso) {
        this.totalProgreso = totalProgreso;
    }

    public Integer getTotalTerminados() {
        return totalTerminados;
    }

    public void setTotalTerminados(Integer totalTerminados) {
        this.totalTerminados = totalTerminados;
    }

    public Integer getTotalSuspendidos() {
        return totalSuspendidos;
    }

    public void setTotalSuspendidos(Integer totalSuspendidos) {
        this.totalSuspendidos = totalSuspendidos;
    }

    public Integer getTotalProductOrders() {
        return totalProductOrders;
    }

    public void setTotalProductOrders(Integer totalProductOrders) {
        this.totalProductOrders = totalProductOrders;
    }

    public Map<Month, Integer> getOrdersByMonth() {
        return ordersByMonth;
    }

    public void setOrdersByMonth(Map<Month, Integer> ordersByMonth) {
        this.ordersByMonth = ordersByMonth;
    }
}
