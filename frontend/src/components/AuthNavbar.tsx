import { Link } from "react-router-dom";

function AuthNavbar() {
  return (
    <header className="container fixed inset-x-0 top-0 z-50 flex items-center p-4">
      <Link to="/">
        <h1 className="text-3xl">LOGO</h1>
      </Link>
    </header>
  );
}

export default AuthNavbar;
