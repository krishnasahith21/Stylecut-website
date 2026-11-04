import { IoArrowForward, IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png"





const Hero = () => {
  return (
    <main className="relative -mx-[4.4vw] flex h-[712px] w-[1690PX] flex-col justify-between overflow-hidden ">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 5, 5, 0.98) 0%, rgba(7, 7, 7, 0.88) 22%, rgba(7, 7, 7, 0.25) 60%), linear-gradient(0deg, rgba(5, 5, 5, 0.60), transparent 1%), url(${bg1})`,
          backgroundPosition: "left top",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative ml-25 mt-25">
        <p className="mb-5 text-[11px] uppercase tracking-[3px] text-[#BCB5A9] max-[600px]:text-[9px] font-bold max-[600px]:tracking-[1.5px]">
          Premium barbershop · At home or in shop
        </p>

        <h1 className="mt-10 font-[sans-serif] text-6xl font-bold leading-[1.02] text-[#F4F0E8] max-[600px]:text-4xl">
          Sharp Styles.
          <br />
          <span className="text-[#E8D0A1]">Confident You.</span>
        </h1>

        <p className="mb-5 mt-10 max-w-[440px] text-md leading-[1.65] text-[#D1CDC6]">
          More than just a haircut. Book a barber who comes to your door, or
          reserve your chair at the shop. Either way, it takes a minute.
        </p>

        <div className="flex flex-wrap mt-10 gap-2">
          <Link
            className="inline-flex min-h-[42px] items-center justify-center gap-3 rounded-lg bg-[#311E13] px-10 text-xs font-bold text-white transition-colors hover:bg-[#F0F0F0] hover:text-[#191A1B]"
            to="/appointment"
          >
            Book an Appointment <IoArrowForward aria-hidden="true" />
          </Link>
          <Link
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-white/50 px-10 py-5 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#191A1B]"
            to="/home-visit"
          >
            <IoHomeOutline aria-hidden="true" /> Barber at My Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
