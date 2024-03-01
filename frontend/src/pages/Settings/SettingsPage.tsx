import { Link, Outlet } from "react-router-dom";

import { FaRegCalendarAlt } from "react-icons/fa";
import { LuBellRing } from "react-icons/lu";
import { MdOutlineAdminPanelSettings, MdOutlinePersonOutline } from "react-icons/md";

const SettingsPage = () => {
  return (
    <div className="container p-6">
      <div className="border-b-2 py-4">
        <span className="text-3xl">Configuración</span>
      </div>
      <div className="text-2xl">
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <MdOutlineAdminPanelSettings size={24} />
          <Link to="/settings/security">Seguridad y Privacidad</Link>
        </button>
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <MdOutlinePersonOutline size={28} />
          <Link to="/settings/account">Información de la cuenta</Link>
        </button>
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <LuBellRing size={24} />
          <Link to="/settings/notifications">Notificaciones</Link>
        </button>
        <button className=" my-6 flex w-full items-center gap-4 border-b-2 py-4">
          <FaRegCalendarAlt size={24} />
          <Link to="/settings/calendar">Calendario</Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default SettingsPage;
