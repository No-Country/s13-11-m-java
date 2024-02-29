import { useGetEmployeersQuery } from "@/app/services/api";

const useOrder = () => {
  const { data, isLoading, isError } = useGetEmployeersQuery();
  return { employees: data ?? [], isLoading, isError } as const;
};
export default useOrder;
