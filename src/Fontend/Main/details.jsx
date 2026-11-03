import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(state?.address || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/confirm", {
      state: { ...state, name, phone, address },
    });
  };

  return (
    <main className="grid flex-1 gap-10 py-8 text-white lg:grid-cols-[270px_1fr]">
      <aside>
        <h1 className="mb-3 text-3xl font-bold">Book Your Appointment</h1>
        <p className="mb-7 text-sm text-gray-300">
          Enter your details to continue.
        </p>
        <p className="mb-5">1. Select Service</p>
        <p className="mb-5">2. Where and When</p>
        <p className="mb-5 font-bold text-[#E8D0A1]">3. Your Details</p>
        <p>4. Confirm Booking</p>
      </aside>

      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="mb-2 text-3xl font-bold">Your Details</h2>
        <p className="mb-6 text-sm text-gray-300">
          Add your name and phone number for the appointment.
        </p>

        <label className="mb-5 block">
          Customer Name
          <input
            className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="mb-5 block">
          Phone Number
          <input
            className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter phone number"
            required
          />
        </label>

        {state?.place === "Home" && (
          <label className="mb-5 block">
            Home Address
            <textarea
              className="mt-2 block w-full rounded-lg bg-white p-3 text-black"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Enter your address"
              required
            />
          </label>
        )}

        <div className="flex justify-between">
          <button
            className="rounded-lg border border-[#E8D0A1] px-5 py-3"
            type="button"
            onClick={() => navigate("/where", { state })}
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

export default Details;