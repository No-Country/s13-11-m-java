import CalendarComponent from "@/components/Calendar/CalendarComponent";

import { useGetOrdersQuery } from "@/app/services/api";

const Calendar = () => {
  const { data: OrderData } = useGetOrdersQuery();

  console.log(OrderData);

  const formattedOrders = OrderData
    ? OrderData.map((order) => ({
        id: order.id,
        title: order.name,
        start: new Date(order.initialDate),
        end: new Date(order.finishEstimatedDate),
      }))
    : [];

  return (
    <div>
      <CalendarComponent events={formattedOrders} />
    </div>
  );
};

export default Calendar;
