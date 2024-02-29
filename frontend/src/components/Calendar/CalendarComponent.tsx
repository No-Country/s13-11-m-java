import React, { useState } from "react";
import { Calendar, Event, ToolbarProps, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import "moment/dist/locale/es";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

moment.locale("es");

const localizer = momentLocalizer(moment);

enum NavigationDirection {
  PREV = "PREV",
  NEXT = "NEXT",
}

const entryDate = [2024, 2, 26, 21, 36, 54, 786464000];

interface CustomToolbarProps extends ToolbarProps {
  onViewChange: (view: View) => void;
}

interface MyEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const events: MyEvent[] = [
  {
    id: 1,
    title: "Terminar el calendario",
    start: new Date(...entryDate.slice(0, 5)),
    end: new Date(...entryDate.slice(0, 5)),
  },
];

const CustomToolbar: React.FC<CustomToolbarProps> = ({ onNavigate, onViewChange }) => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handleViewChange = (view: View) => {
    onViewChange(view);
  };

  const changeDate = (direction: NavigationDirection): void => {
    setCurrentDate((prevDate) => {
      switch (direction) {
        case NavigationDirection.PREV:
          return prevDate.clone().subtract(1, "months");
        case NavigationDirection.NEXT:
          return prevDate.clone().add(1, "months");
        default:
          return prevDate;
      }
    });
  };

  const handlePrev = () => {
    onNavigate(NavigationDirection.PREV);
    changeDate(NavigationDirection.PREV);
  };

  const handleNext = () => {
    onNavigate(NavigationDirection.NEXT);
    changeDate(NavigationDirection.NEXT);
  };

  return (
    <div>
      <div className="custom-toolbar flex items-center justify-between gap-3 py-4">
        <div className="flex gap-3">
          <Button variant="default" onClick={() => handleViewChange("month")}>
            Mensual
          </Button>
          <Button variant="default" onClick={() => handleViewChange("week")}>
            Semanal
          </Button>
          <Button variant="default" onClick={() => handleViewChange("day")}>
            Diario
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handlePrev} className="transition-transform hover:scale-125">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-bold" style={{ minWidth: "150px", textAlign: "center" }}>
            {currentDate.format("MMMM YYYY")}
          </span>
          <button onClick={handleNext} className="transition-transform hover:scale-125">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link to="/order">
              <IoMdAddCircle size={20} />
              Agregar Pedido
            </Link>
          </Button>
          <button className="hover:opacity-90">
            <FaGear size={40} color="#00304B" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarComponent: React.FC = () => {
  const [view, setView] = useState<View>("month");

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <div className="pb-14 capitalize">
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={moment().toDate()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        views={["month", "week", "day"]}
        view={view}
        onView={handleViewChange}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semanal",
          day: "Diario",
        }}
        components={{
          toolbar: (props) => <CustomToolbar {...props} onViewChange={handleViewChange} />,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
