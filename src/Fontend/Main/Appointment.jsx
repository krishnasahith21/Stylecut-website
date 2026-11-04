import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ORDERS_STORAGE_KEY = "stylecut.orders";

const Appointment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const appointment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      service: formData.get("service"),
      barber: formData.get("barber"),
      date: formData.get("date"),
      time: formData.get("time"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      paymentMethod: formData.get("paymentMethod"),
      place: state?.place || "Shop",
      address: state?.address || "",
      createdAt: new Date().toISOString(),
    };

    try {
      const savedOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || "[]");

      if (!Array.isArray(savedOrders)) {
        throw new Error("Saved orders are not in a valid format.");
      }

      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([appointment, ...savedOrders]));
      navigate("/orders");
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.name === "QuotaExceededError"
          ? "Unable to save this appointment because browser storage is full."
          : "Unable to save your appointment. Please try again.",
      );
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10 text-white">
      <form
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#171717] p-1 sm:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-1 text-2xl font-bold">Appointment Details</h1>
        <div className="mb-5 h-1 w-16 bg-orange-500" />
        {submitError && (
          <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200" role="alert">
            {submitError}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            Select Service
            <select
              className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3"
              name="service"
              defaultValue={state?.service || "Classic Cut"}
            >
              <option>Classic Cut</option>
              <option>Fade Cut</option>
              <option>Beard Trim</option>
              <option>Hot Towel Shave</option>
              <option>Kids Cut</option>
            </select>
          </label>

          <label>
            Choose Barber
            <select className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3" name="barber">
              <option>Any Available Barber</option>
              <option>Barber 1</option>
              <option>Barber 2</option>
            </select>
          </label>
        </div>

        <label className="mt-4 block">
          Appointment Date
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3"
            type="date"
            name="date"
            defaultValue={state?.date || ""}
            required
          />
        </label>

        <label className="mt-4 block">
          Select Time
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3"
            type="time"
            name="time"
            defaultValue={state?.time || ""}
            required
          />
        </label>

        <label className="mt-4 block">
          Customer Full Name
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="mt-4 block">
          Phone Number
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#111] p-3"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          />
        </label>

        <fieldset className="mt-5">
          <legend className="mb-2 font-medium">Payment Method</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { label: "Cash at shop", value: "Cash at shop" },
              { label: "UPI", value: "UPI" },
              { label: "Credit / Debit Card", value: "Card" },
            ].map((method) => (
              <label
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-[#111] p-3 text-sm transition-colors has-[:checked]:border-orange-500 has-[:checked]:bg-orange-500/10"
                key={method.value}
              >
                <input
                  className="accent-orange-500"
                  type="radio"
                  name="paymentMethod"
                  value={method.value}
                  defaultChecked={method.value === "Cash at shop"}
                  required
                />
                {method.label}
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Choose how you would like to pay. Online payments are not processed on this page.
          </p>
        </fieldset>

        {state?.place === "Home" && (
          <p className="mt-4 text-sm text-gray-300">
            Home visit address: {state.address}
          </p>
        )}

        <button
          className="mt-5 w-full rounded-full bg-orange-500 p-3 font-bold text-black hover:bg-orange-400"
          type="submit"
        >
          Book Appointment
        </button>
      </form>
    </main>
  );
};

export default Appointment;