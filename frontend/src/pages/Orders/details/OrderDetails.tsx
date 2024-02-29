import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderDetailsTable from "./OrderDetailsTable";

const OrderDetail: React.FC = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(0);
  console.log(order);
  useEffect((): void => {
    if (orderId) {
      setOrder(Number(orderId));
    }
  }, [orderId]);
  return (
    <>
      <OrderDetailsTable orderId={order} />
    </>
  );
};

export default OrderDetail;
