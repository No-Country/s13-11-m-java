import { Link } from "react-router-dom";

function AuthNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary py-4 md:bg-transparent">
      <div className="container flex items-center">
        <Link to="/">
          <h1 className="text-3xl text-background">LOGO</h1>
        </Link>
      </div>
    </header>
  );
}

export default AuthNavbar;
