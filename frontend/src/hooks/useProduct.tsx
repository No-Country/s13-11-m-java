import { useGetAllProductsQuery } from "@/app/services/api";

const useProduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return { products: data, error, isLoading } as const;
};
export default useProduct;
