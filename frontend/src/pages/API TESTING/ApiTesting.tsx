import React from "react";
import { useGetAllProductsQuery, useGetProductByNameQuery } from "../../app/services/api/";

function ApiTesting() {
  const { data: allProductsData, error: allProductsError, isLoading: allProductsLoading } = useGetAllProductsQuery();

  const productName = "SampleProductName";
  const { data: productData, error: productError, isLoading: productLoading } = useGetProductByNameQuery(productName);

  React.useEffect(() => {
    console.log("useGetAllProductsQuery result:", { allProductsData, allProductsError, allProductsLoading });

    console.log("useGetProductByNameQuery result:", { productName, productData, productError, productLoading });
  }, [allProductsData, allProductsError, allProductsLoading, productName, productData, productError, productLoading]);

  return <div>ApiTesting</div>;
}

export default ApiTesting;
