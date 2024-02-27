import { Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div className="h-full md:px-6">
      <Outlet />
    </div>
  );
};

export default SettingsPage;
