import { Link } from "react-router-dom";

import Logo from "../Logo";

function AuthNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary py-4 md:bg-transparent">
      <div className="container flex items-center">
        <Link to="/" className="flex items-center gap-2 text-background">
          <Logo className="h-14 w-14" />
          <span className="mt-2 w-32 select-none text-sm font-bold">SMART BUSINESS TRACKER</span>
        </Link>
      </div>
    </header>
  );
}

export default AuthNavbar;
