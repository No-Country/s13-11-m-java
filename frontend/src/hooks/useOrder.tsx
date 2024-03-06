import { useListAllOrdersQuery } from "@/app/services/api/order";

const useOrder = () => {
  const { data, isLoading, isError } = useListAllOrdersQuery();
  return { orders: data ?? [], isLoading, isError } as const;
};
export default useOrder;
