import { useLocation, useNavigate } from "react-router-dom";

const Appointment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    navigate("/booking-success", {
      state: {
        service: formData.get("service"),
        barber: formData.get("barber"),
        date: formData.get("date"),
        time: formData.get("time"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        place: state?.place,
        address: state?.address,
      },
    });
  };

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10 text-white">
      <form
        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#171717] p-6 sm:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-1 text-2xl font-bold">Appointment Details</h1>
        <div className="mb-5 h-1 w-16 bg-orange-500" />

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
          Customer Name
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