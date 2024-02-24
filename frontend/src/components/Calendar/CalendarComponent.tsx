import React from "react";
import { Calendar, Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/components/Calendar/CalendarComponent.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
    title: "Test",
    start: new Date(2024, 2, 25, 10, 0, 0),
    end: new Date(2024, 2, 25, 12, 0, 0),
  },
];

const customToolbar = () => {
  return (
    <div className="custom-toolbar flex items-center justify-center gap-3">
      <button>
        <FaArrowLeft />
      </button>
      <h3>Febrero</h3>
      <h3>2024</h3>
      <button>
        <FaArrowRight />
      </button>
    </div>
  );
};

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
        components={{
          toolbar: customToolbar,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
