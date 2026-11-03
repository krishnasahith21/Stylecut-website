import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import barberBackground from "../../assets/images/barber-background.png";

const PagesWithNavbar = () => {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#0B0B0B] bg-cover bg-center bg-fixed px-[4.4%]"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.72), rgba(11, 11, 11, 0.82)), url(${barberBackground})`,
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PagesWithNavbar;
