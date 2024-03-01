import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { menuItems } from "./items";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 h-max -translate-x-1/2 overflow-hidden rounded-lg border bg-background shadow-2xl md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
      <nav className="flex max-md:space-x-4 max-md:px-6 md:flex-col md:space-y-4 md:py-6">
        {menuItems.map((item, index) => (
          <Button
            asChild
            key={index}
            data-active={pathname === item.href}
            className="relative before:absolute before:w-0.5 hover:before:bg-primary/50 data-[active=true]:bg-accent before:data-[active=true]:bg-primary max-md:py-6 max-md:before:bottom-0 max-md:before:h-0.5 max-md:before:w-full md:before:left-0 md:before:h-full"
            size="sm"
            variant="ghost"
            aria-label={item.label}
          >
            <Link to={item.href} key={index}>
              {item.icon}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
