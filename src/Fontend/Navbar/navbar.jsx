import { HiScissors } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Profile from "./nav right/Profile";

const Navbar = () => {
  return (
    <header className="flex min-h-[80px] items-center justify-between gap-6 max-[850px]:min-h-[86px] max-[850px]:gap-4 max-[700px]:flex-wrap max-[700px]:py-4">
      <Link className="flex shrink-0 items-center gap-[14px]" to="/home">
        <HiScissors className="h-10 w-10 text-[#EEE9DF]" aria-hidden="true" />
        <span>
          <strong className="block text-2xl font-bold tracking-[2px] text-[#F4F0E8] max-[850px]:text-[19px]">
            STYLE CUT
          </strong>
          <small className="mt-[3px] block text-[9px] tracking-[2px] text-[#A7A29A]">
            MODERN BARBERSHOP
          </small>
        </span>
      </Link>

      <nav className="flex items-center gap-8 max-[850px]:gap-4 max-[700px]:order-3 max-[700px]:w-full max-[700px]:justify-between max-[700px]:gap-2 -ml-30">
        {[
          ["Home", "/home"],
          ["Styles", "/styles"],
          ["Appointments", "/orders"],
          ["Reviews", "/reviews"],
          ["Contact", "/contact"],
          ["About Us", "/about"],
        ].map(([label, to]) => (
          <NavLink
            className={({ isActive }) =>
              `whitespace-nowrap text-lg transition-colors hover:text-[#E8D0A1] max-[700px]:text-xs ${
                isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"
              }`
            }
            key={to}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Profile />
    </header>
  );
};

export default Navbar;
