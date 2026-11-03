import { Link } from "react-router-dom";

const HomeVisit = () => {
  return (
    <main className="flex flex-1 flex-col items-start justify-center py-16">
      <p className="mb-3 text-xs uppercase tracking-[3px] text-[#D4C5A3]">
        At your doorstep
      </p>
      <h1 className="mb-4 text-4xl font-bold text-[#F4F0E8]">
        A barber who comes to you
      </h1>
      <p className="mb-6 max-w-xl text-[#D1CDC6]">
        Enjoy a professional haircut at home. Choose a service and book an
        appointment that fits your schedule.
      </p>
      <Link
        className="rounded-xl bg-[#E8D0A1] px-6 py-3 font-bold text-black"
        to="/booking"
      >
        Book a home visit
      </Link>
    </main>
  );
};

export default HomeVisit;
