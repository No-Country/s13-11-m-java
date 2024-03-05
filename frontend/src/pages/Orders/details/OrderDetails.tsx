import React from "react";
import { useParams } from "react-router-dom";
import OrderDetailsTable from "./OrderDetailsTable";
import { useGetOrderByIdQuery } from "@/app/services/api";
import { CommonAttribute } from '../../../app/services/api/types';
const OrderDetail: React.FC = () => {

  const { orderId } = useParams();
  const { data: OrderData } = useGetOrderByIdQuery(Number(orderId));
  console.log(OrderData)
  // const [order, setOrder] = useState(0);
  // console.log(order);
  // useEffect((): void => {
  //   if (orderId) {
  //     setOrder(Number(orderId));
  //   }
  // }, [orderId]);
const formattedProcess = {
  name: OrderData?.product.productProcesses.map((order) => (order.))
}

  const formattedOrder = {
    id: OrderData?.id,
    name: OrderData?.name,
    clientName: OrderData?.client.commonAttribute.name,
    initialDate: OrderData?.initialDate,
    endDate: OrderData?.finishEstimatedDate,
    state: OrderData?.product.state,


  }
  return <OrderDetailsTable data={formattedOrder}/>;
};

export default OrderDetail;
