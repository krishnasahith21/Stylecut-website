import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <main className="flex flex-1 flex-col items-start justify-center py-16">
      <p className="mb-3 text-xs uppercase tracking-[3px] text-[#D4C5A3]">
        Style Cut
      </p>
      <h1 className="mb-4 text-4xl font-bold text-[#F4F0E8]">
        Book an appointment
      </h1>
      <p className="mb-6 max-w-xl text-[#D1CDC6]">
        Choose a service from our services page, then contact the shop to
        arrange a time.
      </p>
      <Link
        className="rounded-xl bg-[#E8D0A1] px-6 py-3 font-bold text-black"
        to="/services"
      >
        View services
      </Link>
    </main>
  );
};

export default Booking;
