import { IoArrowForward, IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="grid flex-1 grid-cols-2 items-center gap-[7%] py-[22px] pb-7 max-[850px]:grid-cols-1 max-[850px]:gap-[34px] max-[850px]:py-[34px] max-[580px]:py-9 max-[580px]:pb-[22px]" >
      <div className="max-w-[570px] max-[850px]:max-w-[650px]">
        <p className="mb-7 text-[13px] uppercase tracking-[3px] text-[#BCB5A9] max-[580px]:mb-5 max-[580px]:text-[10px] max-[580px]:tracking-[2px]">
          Premium barbershop · At home or in shop
        </p>
        <h1 className="m-0 font-[Arial_Narrow,sans-serif] text-7xl font-bold leading-[1] text-[#F4F0E8]">
          Sharp Styles.
          <br />
          <span className="text-[#E8D0A1]">Confident You.</span>
        </h1>
        <p className="mb-7 mt-[25px] max-w-[520px] text-lg leading-[1.65] text-[#D1CDC6] max-[580px]:mb-[22px] max-[580px]:mt-[19px] max-[580px]:text-[15px]">
          More than just a haircut. Book a barber who comes to your door, or
          reserve your chair at the shop. Either way, it takes a minute.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#311E13] px-6 text-sm font-bold text-[#FFFFFF] transition-colors hover:text-[#191A1B] hover:bg-[#F0F0F0]" to="/appointment">
            Book an Appointment <IoArrowForward aria-hidden="true" />
          </Link>
          <Link className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border px-6 text-sm font-bold text-[#FFFFFF] transition-colors hover:text-[#191A1B] hover:bg-[#F0F0F0]" to="/home-visit">
            <IoHomeOutline aria-hidden="true" /> Barber at My Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
