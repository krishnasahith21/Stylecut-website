import { useState } from "react";
import { Link } from "react-router-dom";

const ORDERS_STORAGE_KEY = "stylecut.orders";

const Orders = () => {
  const [{ orders, loadError }] = useState(() => {
    try {
      const savedOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) || "[]");

      if (!Array.isArray(savedOrders)) {
        throw new Error("Saved orders are not in a valid format.");
      }

      return { orders: savedOrders, loadError: "" };
    } catch {
      return {
        orders: [],
        loadError: "Unable to load your saved appointments from this browser.",
      };
    }
  });

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 text-white sm:px-6">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[3px] text-[#E8D0A1]">Style Cut</p>
          <h1 className="text-3xl font-bold sm:text-4xl">My Appointments</h1>
          <p className="mt-2 text-sm text-[#BDB8AF]">
            Your appointments are saved in this browser.
          </p>
        </div>
        <Link
          className="rounded-lg bg-[#E8D0A1] px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-[#F2DFB8]"
          to="/appointment"
        >
          Book an appointment
        </Link>
      </header>

      {loadError ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200" role="alert">
          {loadError}
        </p>
      ) : orders.length === 0 ? (
        <section className="rounded-2xl border border-white/10 bg-[#151515] p-8 text-center">
          <h2 className="text-xl font-semibold">No appointments yet</h2>
          <p className="mt-2 text-sm text-[#BDB8AF]">
            Once you book an appointment, it will appear here.
          </p>
        </section>
      ) : (
        <section className="space-y-4" aria-label="Your appointments">
          {orders.map((order) => (
            <article
              className="rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-lg sm:p-6"
              key={order.id}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{order.service}</h2>
                  <p className="mt-1 text-sm text-[#BDB8AF]">
                    {order.date} at {order.time}
                  </p>
                </div>
                <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                  Booked
                </span>
              </div>

              <dl className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-[#A7A29A]">Barber</dt>
                  <dd className="mt-1">{order.barber}</dd>
                </div>
                <div>
                  <dt className="text-[#A7A29A]">Customer</dt>
                  <dd className="mt-1">{order.name}</dd>
                </div>
                <div>
                  <dt className="text-[#A7A29A]">Phone</dt>
                  <dd className="mt-1">{order.phone}</dd>
                </div>
                <div>
                  <dt className="text-[#A7A29A]">Location</dt>
                  <dd className="mt-1">{order.place}</dd>
                </div>
                {order.address && (
                  <div>
                    <dt className="text-[#A7A29A]">Address</dt>
                    <dd className="mt-1">{order.address}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-[#A7A29A]">Payment method</dt>
                  <dd className="mt-1">{order.paymentMethod}</dd>
                </div>
              </dl>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Orders;