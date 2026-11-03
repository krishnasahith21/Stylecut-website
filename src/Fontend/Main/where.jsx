import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Where = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state?.service || "Classic Cut";
  const [place, setPlace] = useState("Shop");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/details", {
      state: { service, place, date, time, address },
    });
  };

  return (
    <main className="grid flex-1 gap-10 py-8 text-[#F4F0E8] lg:grid-cols-[270px_1fr]">
      <aside>
        <h1 className="mb-3 text-3xl font-bold">Book Your Appointment</h1>
        <p className="mb-7 text-sm text-[#D1CDC6]">
          Choose where and when you want your {service}.
        </p>
        <p className="mb-5">1. Select Service</p>
        <p className="mb-5 font-bold text-[#E8D0A1]">2. Where and When</p>
        <p className="mb-5">3. Your Details</p>
        <p>4. Confirm Booking</p>
      </aside>

      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="mb-2 text-3xl font-bold">Where and When</h2>
        <p className="mb-6 text-sm text-[#BDB8AF]">
          Select a place, date and time for your appointment.
        </p>

        <label className="mb-5 block">
          Where would you like your haircut?
          <select
            className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
          >
            <option value="Home">At my home</option>
          </select>
        </label>

        {place === "Home" && (
          <label className="mb-5 block">
            Home address
            <textarea
              className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </label>
        )}

        <label className="mb-5 block">
          Date
          <input
            className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>

        <label className="mb-6 block">
          Time
          <input
            className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </label>

        <div className="flex justify-between">
          <button
            className="rounded-lg border border-[#E8D0A1] px-5 py-3"
            type="button"
            onClick={() => navigate("/booking")}
          >
            Back
          </button>
          <button
            className="rounded-lg bg-[#E8D0A1] px-6 py-3 font-bold text-black"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </main>
  );
};

export default Where;