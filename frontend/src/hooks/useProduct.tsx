import { useGetAllProductsQuery } from "@/app/services/api/product";

const useProduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return { products: data ?? [], error, isLoading } as const;
};
export default useProduct;
