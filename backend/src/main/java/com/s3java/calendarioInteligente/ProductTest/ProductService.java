package com.s3java.calendarioInteligente.ProductTest;

import java.util.List;

public interface ProductService {

    List<Product> list();

    Product save(Product product);
}
