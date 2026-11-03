import { Link } from "react-router-dom";
import {
  IoCutOutline,
  IoHomeOutline,
  IoSparklesOutline,
  IoTimeOutline,
} from "react-icons/io5";

const values = [
  {
    icon: IoCutOutline,
    title: "Made for your style",
    description:
      "From a neat classic cut to a fresh new look, we take time to understand what works for you.",
  },
  {
    icon: IoSparklesOutline,
    title: "The details matter",
    description:
      "Thoughtful finishing touches and a welcoming chair make every visit feel a little better.",
  },
  {
    icon: IoHomeOutline,
    title: "Comfort comes first",
    description:
      "Enjoy your appointment at the barbershop or choose a home visit that fits your day.",
  },
];

const About = () => {
  return (
    <main className="mx-auto my-6 w-full max-w-5xl rounded-3xl border border-[#39352C] bg-[#111110]/95 px-5 py-8 text-[#F4F0E8] shadow-2xl sm:px-10 sm:py-12">
      <header className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-[10px] uppercase tracking-[3px] text-[#D4C5A3]">
          About Us
        </p>
        <h1 className="text-3xl font-bold sm:text-5xl">
          More than a haircut. <span className="text-[#E8D0A1]">A little time for you.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#D1CDC6] sm:text-base">
          StyleCut is a modern barbershop made for people who care about how
          they look and how they feel. We bring timeless barbering and
          contemporary style together in a relaxed, friendly space where you
          can settle in, talk through your look, and leave feeling refreshed.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Our values">
        {values.map(({ icon: Icon, title, description }) => (
          <article
            className="rounded-2xl border border-[#39352C] bg-[#181715] p-5"
            key={title}
          >
            <Icon className="mb-4 h-7 w-7 text-[#E8D0A1]" aria-hidden="true" />
            <h2 className="mb-2 text-lg font-bold">{title}</h2>
            <p className="text-sm leading-6 text-[#BDB8AF]">{description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl border border-[#39352C] bg-[#181715] p-5 sm:p-7">
        <div className="flex items-start gap-4">
          <IoTimeOutline className="mt-1 h-6 w-6 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
          <div>
            <h2 className="text-xl font-bold">The StyleCut experience</h2>
            <p className="mt-3 text-sm leading-7 text-[#D1CDC6]">
              We believe a great style starts by listening. Whether you know
              exactly what you want or are ready to try something different,
              we make room for a proper conversation and careful attention to
              the details. From the first hello to the final check in the
              mirror, our aim is to make your visit easy, personal, and worth
              looking forward to.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-5 text-center text-xs text-[#8F897F]">
        Feel Free
      </p>

      <div className="mt-8 text-center">
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E8D0A1] px-6 text-sm font-bold text-black transition-colors hover:bg-[#F2DFB8]"
          to="/booking"
        >
          Book an Appointment
        </Link>
      </div>
    </main>
  );
};

export default About;