import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import moment from "moment";
import "moment/dist/locale/es";
import { Calendar, Event, ToolbarProps, View } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("es");

const localizer = momentLocalizer(moment);

enum NavigationDirection {
  PREV = "PREV",
  NEXT = "NEXT",
}

interface CustomToolbarProps extends ToolbarProps {
  onViewChange: (view: View) => void;
}

interface Orders extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

interface CalendarComponentProps {
  events: Orders[];
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ onNavigate, onViewChange, view }) => {
  const [currentDate, setCurrentDate] = useState(moment());

  const handleViewChange = (view: View) => {
    onViewChange(view);
  };

  const changeDate = (direction: NavigationDirection): void => {
    setCurrentDate((prevDate) => {
      switch (view) {
        case "month":
          return direction === NavigationDirection.PREV
            ? prevDate.clone().subtract(1, "month")
            : prevDate.clone().add(1, "month");
        case "week":
          return direction === NavigationDirection.PREV
            ? prevDate.clone().subtract(1, "week")
            : prevDate.clone().add(1, "week");
        case "day":
          return direction === NavigationDirection.PREV
            ? prevDate.clone().subtract(1, "day")
            : prevDate.clone().add(1, "day");
        default:
          return prevDate;
      }
    });
  };

  const handlePrev = () => {
    if (view === "month") {
      onNavigate(NavigationDirection.PREV);
      changeDate(NavigationDirection.PREV);
    } else if (view === "week") {
      setCurrentDate((prevDate) => prevDate.clone().subtract(1, "week"));
      onNavigate(NavigationDirection.PREV);
      changeDate(NavigationDirection.PREV);
    } else if (view === "day") {
      onNavigate(NavigationDirection.PREV);
      changeDate(NavigationDirection.PREV);
    }
  };

  const handleNext = () => {
    if (view === "month") {
      onNavigate(NavigationDirection.NEXT);
      changeDate(NavigationDirection.NEXT);
    } else if (view === "week") {
      setCurrentDate((prevDate) => prevDate.clone().add(1, "week"));
      onNavigate(NavigationDirection.NEXT);
      changeDate(NavigationDirection.NEXT);
    } else if (view === "day") {
      onNavigate(NavigationDirection.NEXT);
      changeDate(NavigationDirection.NEXT);
    }
  };

  return (
    <div>
      <div className="custom-toolbar md:items flex flex-col items-center justify-between gap-2 py-4 md:items-stretch">
        <div className="order-1 flex items-center justify-between gap-1">
          <div className="flex gap-1">
            <Button
              variant="default"
              style={{ opacity: view === "month" ? 1 : 0.55 }}
              onClick={() => handleViewChange("month")}
            >
              Mensual
            </Button>
            <Button
              variant="default"
              style={{ opacity: view === "week" ? 1 : 0.55 }}
              onClick={() => handleViewChange("week")}
            >
              Semanal
            </Button>
            <Button
              variant="default"
              style={{ opacity: view === "day" ? 1 : 0.55 }}
              onClick={() => handleViewChange("day")}
            >
              Diario
            </Button>
          </div>
          <div>
            <Button asChild variant="default" className="flex items-center">
              <Link to="/order">
                <IoMdAddCircle size={20} />
                <span className="hidden pl-3 md:block">Agregar Pedido </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="order-1 flex items-center justify-center gap-2">
          <button onClick={handlePrev} className="transition-transform hover:scale-125">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-bold" style={{ minWidth: "220px", textAlign: "center" }}>
            {view === "month" && currentDate.format("MMMM YYYY")}
            {view === "week" && `Semana ${currentDate.week()}`}
            {view === "day" && currentDate.format("dddd D [-] MMMM YYYY")}
          </span>

          <button onClick={handleNext} className="transition-transform hover:scale-125">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  const [view, setView] = useState<View>("month");

  const eventStyleGetter = () => {
    const newStyle = {
      backgroundColor: "#2a576d",
      color: "WHITE",
      borderRadius: "10px",
      border: "1px solid #a3a3a3",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
    };

    return {
      style: newStyle,
    };
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <div className="capitalize max-md:-mx-5">
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={moment().toDate()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700, border: "none" }}
        views={["month", "week", "day"]}
        view={view}
        eventPropGetter={eventStyleGetter}
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
          toolbar: (props) => <CustomToolbar {...props} view={view} onViewChange={handleViewChange} />,
        }}
      />
    </div>
  );
};

export default CalendarComponent;
