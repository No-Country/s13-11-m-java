import React from "react";
import { useParams } from "react-router-dom";

import OrderDetailsTable from "./OrderDetailsTable";
import { useGetOrderByIdQuery } from "@/app/services/api";

const OrderDetail: React.FC = () => {
  const { orderId } = useParams();
  const { data: OrderData } = useGetOrderByIdQuery(Number(orderId));
  console.log(OrderData);
  const formattedProcess = {
    name: OrderData?.processes.map((process) => process.processAttributes.name),
  };

  console.log(formattedProcess);

  const formattedOrder = {
    id: OrderData?.id,
    name: OrderData?.name,
    clientName: OrderData?.client.commonAttribute.name,
    initialDate: OrderData?.initialDate,
    endDate: OrderData?.finishEstimatedDate,
    state: OrderData?.product.state,
  };
  return (
    <>
      <OrderDetailsTable data={formattedOrder} />
    </>
  );
};

export default OrderDetail;
