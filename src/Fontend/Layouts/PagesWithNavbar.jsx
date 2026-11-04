import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "./Footer";

const PagesWithNavbar = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0B0B] px-[4.4%] text-white">
      <Navbar />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PagesWithNavbar;
