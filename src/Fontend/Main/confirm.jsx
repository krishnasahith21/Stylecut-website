import { Link, useLocation } from "react-router-dom";

const Confirm = () => {
  const { state } = useLocation();

  return (
    <main className="grid flex-1 gap-10 py-8 text-white lg:grid-cols-[270px_1fr]">
      <aside>
        <h1 className="mb-3 text-3xl font-bold">Book Your Appointment</h1>
        <p className="mb-7 text-sm text-gray-300">Review your booking.</p>
        <p className="mb-5">1. Select Service</p>
        <p className="mb-5">2. Where and When</p>
        <p className="mb-5">3. Your Details</p>
        <p className="font-bold text-[#E8D0A1]">4. Confirm Booking</p>
      </aside>

      <section>
        <h2 className="mb-2 text-3xl font-bold">Confirm Booking</h2>
        <p className="mb-6 text-sm text-gray-300">Check your details.</p>

        <div className="max-w-2xl space-y-3 rounded-xl border border-white/10 bg-black/30 p-5">
          <p>Service: {state?.service || "Classic Cut"}</p>
          <p>Place: {state?.place || "Home"}</p>
          {state?.address && <p>Address: {state.address}</p>}
          <p>Date: {state?.date || "Not selected"}</p>
          <p>Time: {state?.time || "Not selected"}</p>
          <p>Name: {state?.name || "Not entered"}</p>
          <p>Phone: {state?.phone || "Not entered"}</p>
        </div>

        <div className="mt-6">
          <Link
            className="inline-block rounded-lg bg-[#E8D0A1] px-6 py-3 font-bold text-black"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Confirm;