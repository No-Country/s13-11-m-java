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
import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: <MdOutlineCalendarMonth size={24} />,
    label: "Calendario",
    href: "/calendar ",
  },
  {
    icon: <MdOutlineDashboard size={24} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <MdOutlineListAlt size={24} />,
    label: "Pedidos",
    href: "/orders",
  },
  {
    icon: <MdOutlinePeopleAlt size={24} />,
    label: "Empleados",
    href: "/employees",
  },
  {
    icon: <MdOutlineSettings size={24} />,
    label: "Configuración",
    href: "/configuration",
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
          <Link to={item.href} key={index}>
            <Button
              key={index}
              className={cn(
                "hover:bg-slate-30 ",
                active === index &&
                  "before: ease-zin-out relative transition-all duration-300 before:absolute before:left-0 before:h-full before:w-0.5 before:bg-[#05344f]"
              )}
              variant="ghost"
              aria-label={item.label}
              onClick={() => handleChange(index)}
            >
              {item.icon}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
