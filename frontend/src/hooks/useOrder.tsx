import { useGetOrdersQuery } from "@/app/services/api/order";

const useOrder = () => {
  const { data, isLoading, isError } = useGetOrdersQuery();
  return { orders: data ?? [], isLoading, isError } as const;
};
export default useOrder;
