package com.s3java.calendarioInteligente.dto.request;

import com.s3java.calendarioInteligente.entities.ProcessAttributes;
import com.s3java.calendarioInteligente.entities.Product;
import com.s3java.calendarioInteligente.entities.SubProcess;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

/**
 * DTO for {@link com.s3java.calendarioInteligente.entities.ProductProcess}
 */
public class ProductProcessRequest implements Serializable {
    @NotNull
    private final Product product;
    @NotNull
    private final List<SubProcess> subProcesses;
    @NotNull
    private final ProcessAttributes processAttributes;

    public ProductProcessRequest(Product product, List<SubProcess> subProcesses, ProcessAttributes processAttributes) {
        this.product = product;
        this.subProcesses = subProcesses;
        this.processAttributes = processAttributes;
    }

    public Product getProduct() {
        return product;
    }

    public List<SubProcess> getSubProcesses() {
        return subProcesses;
    }

    public ProcessAttributes getProcessAttributes() {
        return processAttributes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductProcessRequest entity = (ProductProcessRequest) o;
        return Objects.equals(this.product, entity.product) &&
                Objects.equals(this.subProcesses, entity.subProcesses) &&
                Objects.equals(this.processAttributes, entity.processAttributes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(product, subProcesses, processAttributes);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "product = " + product + ", " +
                "subProcesses = " + subProcesses + ", " +
                "processAttributes = " + processAttributes + ")";
    }
}