import React from "react";

import {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetOrdersQuery,
  useGetProductByNameQuery,
} from "../../app/services/api/";

function ApiTesting() {
  const { data: allProductsData, error: allProductsError, isLoading: allProductsLoading } = useGetAllProductsQuery();

  const [createProduct, { data: creacionProducto, isLoading }] = useCreateProductMutation();

  const productName = "rueda";
  const { data: productData, error: productError, isLoading: productLoading } = useGetProductByNameQuery(productName);

  const { data: GetOrdersResponse, error: errorOrders, isLoading: isLoadingOrders } = useGetOrdersQuery();

  // const {DeleteProductResponse, error: errorDelete, isLoading: errorLoading}= useDeleteProductMutation()

  const handleClick = async () => {
    await createProduct({
      idUnico: "prueba123",
      description: "prueba123",
      instruction: "instruccion",
      name: "prueba123",
      timeEstimatedCompletion: "123",
    });
  };

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

  return (
    <div>
      {isLoading && <h2>cargando...</h2>}
      {creacionProducto && <h2>{creacionProducto.name}</h2>}
      <button onClick={handleClick}>crear un producto</button>
    </div>
  );
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
