import React from "react";
import { useGetAllProductsQuery } from "../../app/services/api/";

function ApiTesting() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  React.useEffect(() => {
    if (data) {
      console.log("Response from getAllProducts:", data);
    } else if (error) {
      console.error("Error fetching products:", error);
    }
  }, [data, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>API TESTING</div>;
}

export default ApiTesting;
