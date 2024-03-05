import React from "react";
import { useParams } from "react-router-dom";

import OrderDetailsTable from "./OrderDetailsTable";
import { useGetOrderByIdQuery } from "@/app/services/api";
import moment from "moment";

const OrderDetail: React.FC = () => {
  const { orderId } = useParams();
  const { data: OrderData } = useGetOrderByIdQuery(Number(orderId));

  const mainProcesses = OrderData?.product.productProcesses.map((process) => ({
    id: process.id,
    name: process.processAttributes.name,
    timeReal: process.processAttributes.timeReal,
    timeAverage: process.processAttributes.timeAverage,
    timeMargin: process.processAttributes.timeMargin,
    comment: process.processAttributes.comment,
    state: process.processAttributes.state,
    initialDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    employee: "Juan Perez",
  }));

  const subprocesses = OrderData?.product.productProcesses.flatMap((process) =>
    process.subProcesses.map((subprocess) => ({
      parentId: process.id,
      id: subprocess.id,
      name: subprocess.subProcessAttributes?.name,
      timeReal: subprocess.subProcessAttributes?.timeReal,
      timeAverage: subprocess.subProcessAttributes?.timeAverage,
      timeMargin: subprocess.subProcessAttributes?.timeMargin,
      comment: subprocess.subProcessAttributes?.comment,
      state: subprocess.subProcessAttributes?.state,
      initialDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      employee: "Juan Perez",
    }))
  );

  const formatedOrder = {
    id: OrderData?.id || 0,
    name: OrderData?.name || "",
    clientName: OrderData?.client.commonAttribute.name || "",
    initialDate: OrderData?.initialDate || "",
    endDate: OrderData?.finishEstimatedDate || "",
    state: OrderData?.product.state || true,
    processes: mainProcesses || [],
    subprocesses: subprocesses || [],
  };

  return (
    <>
      <OrderDetailsTable orderData={formatedOrder} />
    </>
  );
};

export default OrderDetail;
