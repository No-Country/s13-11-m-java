import { Link } from "react-router-dom";

import Logo from "../Logo";

function AuthNavbar() {
  return (
    <header className="container fixed inset-x-0 top-0 z-50 ml-20 flex items-center bg-primary p-4 md:bg-transparent">
      <Link to="/" className="flex items-center gap-2">
        <Logo className="h-14 w-14 text-background" />
        <span className="mt-4 w-40 select-none font-bold text-white">SMART BUSINESS TRACKER</span>
      </Link>
    </header>
  );
}

export default AuthNavbar;
