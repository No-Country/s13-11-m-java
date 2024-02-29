import React from "react";
import { useGetAllProductsQuery, useGetProductByNameQuery, useGetOrdersQuery } from "../../app/services/api/";

function ApiTesting() {
  const { data: allProductsData, error: allProductsError, isLoading: allProductsLoading } = useGetAllProductsQuery();

  const productName = "SampleProductName";
  const { data: productData, error: productError, isLoading: productLoading } = useGetProductByNameQuery(productName);

  const { data: GetOrdersResponse, error: errorOrders, isLoading: isLoadingOrders } = useGetOrdersQuery();

  // const {DeleteProductResponse, error: errorDelete, isLoading: errorLoading}= useDeleteProductMutation()

  React.useEffect(() => {
    console.log("useGetAllProductsQuery result:", { allProductsData, allProductsError, allProductsLoading });
    console.log("useGetProductByNameQuery result:", { productName, productData, productError, productLoading });
    console.log("useGetOrdersResponse result:", { GetOrdersResponse, errorOrders, isLoadingOrders });
    // console.log("DeleteProductsResponse result:", { DeleteProductResponse, errorDelete, errorLoading });
  }, [
    allProductsData,
    allProductsError,
    allProductsLoading,
    productName,
    productData,
    productError,
    productLoading,
    GetOrdersResponse,
    errorOrders,
    isLoadingOrders,
  ]);

  return <div>ApiTesting</div>;
}

export default ApiTesting;

// function ApiTesting() {
//   const { data, error, isLoading } = useGetAllProductsQuery();
//   const { data, error, isLoading } = useGetOrdersQuery();

//   React.useEffect(() => {
//     if (data) {
//       console.log("Response from getAllProducts:", data);
//     } else if (error) {
//       console.error("Error fetching products:", error);
//     }
//   }, [data, error]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return <div>API TESTING</div>;
// }

// export default ApiTesting;
