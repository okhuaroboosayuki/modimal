import { Link, NavLink } from "react-router-dom";
import NProgress from "nprogress";

export function ProgressLink({ to, state, className, children, onClick }) {
  const handleClick = () => {
    NProgress.start();
    if (onClick) onClick();
  };

  return (
    <Link to={to} state={state} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

export function ProgressNavLink({ to, state, className, onClick, children }) {
  const handleClick = () => {
    NProgress.start();
    onClick && onClick();
  };

  return (
    <NavLink to={to} state={state} onClick={handleClick} className={className}>
      {children}
    </NavLink>
  );
}
