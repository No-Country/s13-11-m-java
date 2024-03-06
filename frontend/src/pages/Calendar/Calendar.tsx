import CalendarComponent from "@/components/Calendar/CalendarComponent";

import { useListAllOrdersQuery } from "@/app/services/api/order";

const Calendar = () => {
  const { data: OrderData } = useListAllOrdersQuery();

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
