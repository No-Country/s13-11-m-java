import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { menuItems } from "./items";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-max -translate-x-1/2 overflow-hidden rounded-lg border bg-background shadow-2xl md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
      <nav className="max-md:px-6 md:py-6">
        <ul className="flex max-md:space-x-1 md:flex-col">
          {menuItems.map((item, index) => (
            <li
              key={index}
              data-active={pathname === item.href}
              className="relative before:absolute before:w-0.5 hover:before:bg-primary/50 data-[active=true]:bg-accent before:data-[active=true]:bg-primary max-md:before:bottom-0 max-md:before:h-0.5 max-md:before:w-full md:before:left-0 md:before:h-full"
            >
              <Button asChild className="h-12 w-12 text-2xl" size="icon" variant="ghost" aria-label={item.label}>
                <Link to={item.href}>{item.icon}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
