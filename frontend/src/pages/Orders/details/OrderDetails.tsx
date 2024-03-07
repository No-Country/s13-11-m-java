import { useParams } from "react-router-dom";

import OrderDetailsTable from "./OrderDetailsTable";
import { useGetOrderByIdQuery } from "@/app/services/api/order";
import { State } from "@/app/services/api/types";

export interface FormatedOrder {
  id: number;
  name: string;
  clientName: string;
  initialDate: string;
  endDate: string;
  state: State;
  processes: FormatedProcess[];
  subprocesses: FormatedSubProcess[];
}

export interface FormatedProcess {
  id?: number;
  name?: string;
  timeReal?: number;
  timeAverage?: number;
  timeMargin?: number;
  comment?: string;
  state?: State;
  initialDate: string;
  endDate: string;
  employee: string;
}

export interface FormatedSubProcess {
  parentId: number;
  id?: number;
  name?: string;
  timeReal?: number;
  timeAverage?: number;
  timeMargin?: number;
  comment?: string;
  state?: State;
  initialDate: string;
  endDate: string;
  employee: string;
}

const OrderDetail = () => {
  const { orderId } = useParams();
  const { data } = useGetOrderByIdQuery(Number(orderId));

  // const mainProcesses: FormatedProcess[] =
  //   OrderData?.product.productProcesses?.map((process) => ({
  //     id: process.id,
  //     name: process.processAttributes?.name,
  //     timeAverage: process.processAttributes?.timeAverage,
  //     timeMargin: process.processAttributes?.timeMargin,
  //     comment: process.processAttributes?.comment,
  //     state: process.processAttributes?.state,
  //     initialDate: moment().format("YYYY-MM-DD"),
  //     endDate: moment().format("YYYY-MM-DD"),
  //     employee: "Pedro Pérez",
  //   })) ?? [];

  // const subprocesses: FormatedSubProcess[] =
  //   OrderData?.product.productProcesses?.flatMap(
  //     (process) =>
  //       process.subProcesses?.map((subprocess) => ({
  //         parentId: process.id!,
  //         id: subprocess.id,
  //         name: subprocess.subProcessAttributes?.name ?? "",
  //         timeAverage: subprocess.subProcessAttributes?.timeAverage,
  //         timeMargin: subprocess.subProcessAttributes?.timeMargin,
  //         comment: subprocess.subProcessAttributes?.comment,
  //         state: subprocess.subProcessAttributes?.state,
  //         initialDate: moment().format("YYYY-MM-DD"),
  //         endDate: moment().format("YYYY-MM-DD"),
  //         employee: "Ana Rodríguez",
  //       })) ?? []
  //   ) ?? [];

  // const formatedOrder: FormatedOrder = {
  //   id: OrderData?.id || 0,
  //   name: OrderData?.name || "",
  //   clientName: OrderData?.client.commonAttribute.name || "",
  //   initialDate: OrderData?.initialDate || "",
  //   endDate: OrderData?.finishEstimatedDate || "",
  //   state: OrderData?.product.state ?? State.PENDIENTE,
  //   processes: mainProcesses || [],
  //   subprocesses: subprocesses || [],
  // };

  return <OrderDetailsTable orderData={data} />;
};
export default OrderDetail;
