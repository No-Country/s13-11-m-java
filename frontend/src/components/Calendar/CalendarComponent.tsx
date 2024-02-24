import React from "react";
import { Calendar, Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import "moment/dist/locale/es";

moment.locale("es");

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const events: MyEvent[] = [
  {
    id: 1,
    title: "Meeting",
    start: new Date(2022, 8, 15, 10, 0, 0),
    end: new Date(2022, 8, 15, 12, 0, 0),
  },
  {
    id: 2,
    title: "Lunch",
    start: new Date(2022, 8, 16, 12, 0, 0),
    end: new Date(2022, 8, 16, 13, 0, 0),
  },
];

const CalendarComponent: React.FC = () => {
  return (
    <div className="pb-14 capitalize">
      <Calendar
        localizer={localizer}
        views={["month", "week", "day"]}
        events={events}
        defaultDate={moment().toDate()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semanal",
          day: "Diario",
        }}
      />
    </div>
  );
};

export default CalendarComponent;
