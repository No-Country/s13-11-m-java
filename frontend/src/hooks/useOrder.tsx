import { useGetOrderByIdQuery } from "@/app/services/api";

const useOrder = (id: number ) => {
  const { data, isLoading, isError } = useGetOrderByIdQuery(id);
  return { orders: data ?? [], isLoading, isError } as const;
};
export default useOrder;
