import { HiScissors } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex min-h-[102px] items-center justify-between gap-6 max-[850px]:min-h-[86px] max-[580px]:min-h-auto max-[580px]:flex-wrap max-[580px]:py-[18px]">
      <Link className="flex shrink-0 items-center gap-[14px] max-[580px]:gap-[9px]" to="/home">
        <HiScissors className="h-10 w-10 text-[#EEE9DF] max-[580px]:h-8 max-[580px]:w-8" aria-hidden="true" />
        <span className="block">
          <strong className="block text-2xl font-bold tracking-[2px] text-[#F4F0E8] max-[850px]:text-[19px] max-[580px]:text-[17px]">STYLE CUT</strong>
          <small className="mt-[3px] block text-[9px] tracking-[2px] text-[#A7A29A] max-[580px]:text-[7px]">MODERN BARBERSHOP</small>
        </span>
      </Link>

      <nav className="flex items-center gap-10">
        <NavLink className={({ isActive }) => `text-md transition-colors hover:text-[#E8D0A1] ${isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"}`} to="/home">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => `text-md transition-colors hover:text-[#E8D0A1] ${isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"}`} to="/styles">
          Styles
        </NavLink>
        <NavLink className={({ isActive }) => `text-md transition-colors hover:text-[#E8D0A1] ${isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"}`} to="/reviews">
          Reviews
        </NavLink>
        <NavLink className={({ isActive }) => `text-md transition-colors hover:text-[#E8D0A1] ${isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"}`} to="/contact">
          Contact
        </NavLink>
        <NavLink className={({ isActive }) => `text-md transition-colors hover:text-[#E8D0A1] ${isActive ? "font-bold text-[#E8D0A1]" : "text-[#D4D0C9]"}`} to="/about">
          About Us
        </NavLink>
      </nav>

      <div className="flex items-center">
        <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#E8D0A1] px-[26px] text-sm font-bold text-black transition-colors hover:bg-[#F2DFB8] max-[580px]:min-h-[42px] max-[580px]:px-[17px]" to="/login">Logout</Link>
      </div>
    </header>
  );
};

export default Navbar;
