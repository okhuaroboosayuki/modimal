import { Link, NavLink } from "react-router-dom";
import NProgress from "nprogress";

export function ProgressLink({ to, className, children }) {
  const handleClick = () => {
    NProgress.start();
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export function ProgressNavLink({ to, className, children }) {
  const handleClick = () => {
    NProgress.start();
  };

  return (
    <NavLink to={to} onClick={handleClick} className={className}>
      {children}
    </NavLink>
  );
}
