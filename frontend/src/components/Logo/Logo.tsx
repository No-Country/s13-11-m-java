import { Link } from "react-router-dom";

import clsx from "clsx";

const Logo = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link to="/">
      <h1 className={clsx("inline-flex h-10 items-center text-3xl", className)} {...props}>
        LOGO
      </h1>
    </Link>
  );
};

export default Logo;
