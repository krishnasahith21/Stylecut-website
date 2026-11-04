import { Link, useLocation } from "react-router-dom";
import {
  IoCalendarOutline,
  IoCheckmark,
  IoCutOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoCallOutline,
  IoHeartOutline,
  IoHome,
} from "react-icons/io5";

const BookingSuccess = () => {
  const { state } = useLocation();

  const details = [
    { label: "Appointment Date", value: state?.date || "Not provided", icon: IoCalendarOutline },
    { label: "Select Time", value: state?.time || "Not provided", icon: IoTimeOutline },
    { label: "Service", value: state?.service || "Classic Cut", icon: IoCutOutline },
    { label: "Barber", value: state?.barber || "Any Available Barber", icon: IoPersonOutline },
    { label: "Customer Name", value: state?.name || "Guest", icon: IoPersonOutline },
    { label: "Phone Number", value: state?.phone || "Not provided", icon: IoCallOutline },
    { label: "Payment Method", value: state?.paymentMethod || "Not selected", icon: IoHeartOutline },
  ];

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-8 text-white">
      <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#151515]/95 p-5 shadow-2xl sm:p-8">
        <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-green-600 text-5xl text-white shadow-[0_0_30px_#22c55e]">
          <IoCheckmark aria-hidden="true" />
        </span>
        <h1 className="mb-1 text-4xl text-center font-bold">Thank You!</h1>
        <p className="text-lg text-center">Your appointment has been successfully booked.</p>
        <p className="mb-6 text-sm text-center text-gray-400">
          Our barber will arrive at your doorstep.
        </p>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-left">
          <h2 className="mb-2 text-lg font-bold">Booking Details</h2>
          {details.map(({ label, value, icon: Icon }) => (
            <div className="flex items-center gap-3 border-t border-white/10 py-2.5" key={label}>
              <Icon className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
              <span className="text-sm text-gray-300">{label}</span>
              <strong className="ml-auto text-right text-sm">{value}</strong>
            </div>
          ))}
        </div>

        {state?.place === "Home" && (
          <div className="mt-3 rounded-xl border border-orange-500 bg-black/30 p-3 text-sm text-gray-300">
            Home visit address: {state.address}
          </div>
        )}

        <div className="my-4 flex items-center justify-center gap-3 rounded-xl border border-green-700 bg-green-950/30 p-3 text-left">
          <IoHeartOutline className="h-8 w-8 shrink-0 text-green-500" aria-hidden="true" />
          <p className="text-sm text-gray-300">
            <strong className="block text-white">We appreciate your trust in StyleCut!</strong>
            Sit back, relax and let us take care of your style.
          </p>
        </div>
        <Link
          className="flex items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-bold text-black hover:bg-orange-400"
          to="/home"
        >
          <IoHome aria-hidden="true" /> Back to Home
        </Link>
        <p className="mt-4 text-sm text-center text-gray-400">
          Thank you for choosing StyleCut ❤️
        </p>
      </section>
    </main>
  );
};

export default BookingSuccess;
