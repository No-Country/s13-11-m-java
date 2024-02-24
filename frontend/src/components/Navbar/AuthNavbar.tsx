import Logo from "../Logo/Logo";

function AuthNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary py-4 md:bg-transparent">
      <div className="container flex items-center">
        <Logo className="text-background" />
      </div>
    </header>
  );
}

export default AuthNavbar;
