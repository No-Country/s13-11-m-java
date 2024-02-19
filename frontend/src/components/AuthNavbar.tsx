import { Link } from "react-router-dom";

function AuthNavbar() {
  return (
    <header className="container fixed inset-x-0 top-0 z-50 flex items-center bg-primary p-4 md:bg-transparent">
      <Link to="/">
        <h1 className="text-3xl text-background">LOGO</h1>
      </Link>
    </header>
  );
}

export default AuthNavbar;
