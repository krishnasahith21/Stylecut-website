import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  ["Classic Cut", "Timeless, clean and always in style.", "30 min", 250],
  ["Fade Cut", "Smooth fades for a modern look.", "40 min", 350],
  ["Beard Trim", "Shape, define and keep it sharp.", "20 min", 150],
  ["Hot Towel Shave", "Relaxing shave with premium products.", "30 min", 300],
  ["Kids Cut", "Gentle cuts for your little ones.", "25 min", 200],
];

const Book = () => {
  const [selected, setSelected] = useState("Classic Cut");
  const navigate = useNavigate();

  return (
    <main className="grid flex-1 gap-10 py-8 text-[#F4F0E8] lg:grid-cols-[270px_1fr]">
      <aside className="flex flex-col">
        <h1 className="mb-3 text-3xl font-bold leading-tight">
          Book Your
          <br />
          Appointment
        </h1>
        <p className="max-w-xs text-sm leading-5 text-[#D1CDC6]">
          Choose a service, decide where you want it, and pick a time that
          works for you.
        </p>

        <div className="mt-7 space-y-5">
          <p className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8D0A1] font-bold text-black">1</span>
            <span><strong>Select Service</strong><small className="block text-xs text-[#BDB8AF]">Choose your preferred service</small></span>
          </p>
          <p className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8D0A1]">2</span>
            <span><strong>Where and When</strong><small className="block text-xs text-[#BDB8AF]">At home or in shop, plus a time</small></span>
          </p>
          <p className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8D0A1]">3</span>
            <span><strong>Your Details</strong><small className="block text-xs text-[#BDB8AF]">Name, phone and address</small></span>
          </p>
          <p className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8D0A1]">4</span>
            <span><strong>Confirm Booking</strong><small className="block text-xs text-[#BDB8AF]">Review and confirm</small></span>
          </p>
        </div>

        <p className="mt-auto hidden pt-10 font-serif text-2xl italic text-[#E8D0A1] lg:block">
          Great cuts
          <br />
          build confidence.
        </p>
      </aside>

      <section>
        <h2 className="mb-2 text-3xl font-bold">Select Service</h2>
        <p className="mb-5 text-sm text-[#BDB8AF]">Choose the service you want.</p>

        <div className="space-y-2">
          {services.map((service) => (
            <label
              className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-3 sm:p-4 ${
                selected === service[0]
                  ? "border-[#E8D0A1] bg-[#171614]"
                  : "border-white/10 bg-[#171614]/80"
              }`}
              key={service[0]}
            >
              <span className="h-12 w-12 shrink-0 rounded-lg bg-[repeating-linear-gradient(135deg,#1d1d1b_0px,#1d1d1b_8px,#151513_8px,#151513_16px)]" />
              <span className="flex-1">
                <strong className="block">{service[0]}</strong>
                <small className="text-xs text-[#BDB8AF]">
                  {service[1]} · {service[2]}
                </small>
              </span>
              <strong>₹{service[3]}</strong>
              <input
                className="h-5 w-5 accent-[#E8D0A1]"
                type="radio"
                name="service"
                checked={selected === service[0]}
                onChange={() => setSelected(service[0])}
              />
            </label>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="rounded-xl bg-[#E8D0A1] px-7 py-3 font-bold text-black hover:bg-[#F2DFB8]"
            type="button"
            onClick={() => navigate("/where", { state: { service: selected } })}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Book;
