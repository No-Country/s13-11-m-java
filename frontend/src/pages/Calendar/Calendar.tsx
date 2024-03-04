import CalendarComponent from "@/components/Calendar/CalendarComponent";

import { useGetOrdersQuery } from "@/app/services/api";

const Calendar = () => {
  const { data: OrderData } = useGetOrdersQuery();

  const formattedOrders = OrderData
    ? OrderData.map((order) => ({
        id: order.id,
        title: order.name,
        start: new Date(order.entryDate),
        end: new Date(order.entryDate),
      }))
    : [];

  return (
    <div className="mx-auto md:container">
      <CalendarComponent events={formattedOrders} />
    </div>
  );
};

export default Calendar;
