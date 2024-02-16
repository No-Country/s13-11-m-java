import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  MdOutlineCalendarMonth,
  MdOutlineDashboard,
  MdOutlineListAlt,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
} from "react-icons/md";

const menuItems = [
  {
    icon: <MdOutlineCalendarMonth size={24} />,
    label: "Calendario",
  },
  {
    icon: <MdOutlineDashboard size={24} />,
    label: "Dashboard",
  },
  {
    icon: <MdOutlineListAlt size={24} />,
    label: "Listado",
  },
  {
    icon: <MdOutlinePeopleAlt size={24} />,
    label: "Listado",
  },
  {
    icon: <MdOutlineSettings size={24} />,
    label: "Configuración",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(0);

  const handleChange = (index: number) => {
    setActive(index);
  };

  return (
    <div className="fixed left-4 z-10 flex h-screen items-center">
      <nav className="relative flex flex-col items-center justify-center space-y-4 rounded-lg bg-white py-6 text-[#05344f] shadow-2xl">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            className={cn(
              "hover:bg-slate-30 ",
              active === index &&
                "before: relative transition-all duration-300 ease-in-out before:absolute before:left-0 before:h-full before:w-0.5 before:bg-[#05344f]"
            )}
            variant="ghost"
            aria-label={item.label}
            onClick={() => handleChange(index)}
          >
            {item.icon}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
