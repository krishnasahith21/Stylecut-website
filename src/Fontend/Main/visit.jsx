import { Link } from "react-router-dom";
import { IoArrowForward, IoBriefcaseOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import fadeImage from "../../assets/images/fade-cut.jpg";
import barberImage from "../../assets/images/barber-background.png";
import shaveImage from "../../assets/images/classic-cut.jpg";

const steps = [
  {
    number: "1",
    title: "Choose Your Service",
    description: "Select your preferred haircut, beard trim or grooming package.",
    image: fadeImage,
  },
  {
    number: "2",
    title: "Book Your Time",
    description: "Select your preferred date and time. Enter your address to confirm your booking.",
    image: barberImage,
  },
  {
    number: "3",
    title: "Enjoy Your Haircut",
    description: "Your professional barber arrives at your doorstep and you relax.",
    image: shaveImage,
  },
];

const Visit = () => {
  return (
    <main className="flex-1 py-8 text-[#F4F0E8]">
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <p className="mb-5 text-xs uppercase tracking-[3px] text-[#D4C5A3]">
            Home visit
          </p>
          <h1 className="mb-5 text-5xl font-bold leading-[1.05] sm:text-6xl">
            Your barber
            <br />
            comes to <span className="text-[#E8D0A1]">you.</span>
          </h1>
          <p className="mb-7 max-w-md text-base leading-6 text-[#D1CDC6]">
            No travel, no waiting room. Pick a time, share your address, and a
            Style Cut barber arrives at your door with the full kit.
          </p>
          <Link
            className="inline-flex items-center gap-3 rounded-xl bg-[#E8D0A1] px-6 py-3 font-bold text-black transition-colors hover:bg-[#F2DFB8]"
            to="/booking"
          >
            Book a Home Visit <IoArrowForward aria-hidden="true" />
          </Link>
        </section>

        <section className="space-y-3" aria-label="How home visits work">
          {steps.map((step) => (
            <article
              className="relative flex min-h-32 items-center overflow-hidden rounded-2xl border border-white/10 bg-[#171614]"
              key={step.number}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                src={step.image}
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#11100e] via-[#11100e]/90 to-transparent" />
              <div className="relative max-w-[330px] p-4 sm:p-5">
                <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#E8D0A1] font-bold text-black">
                  {step.number}
                </span>
                <h2 className="mb-1 text-lg font-bold">{step.title}</h2>
                <p className="text-sm leading-5 text-[#D1CDC6]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <section className="mt-3 grid gap-3 sm:grid-cols-3" aria-label="Home visit details">
        <article className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#171614]/90 p-4">
          <IoPersonOutline className="mt-1 h-6 w-6 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
          <div>
            <h2 className="mb-1 font-bold">You Provide</h2>
            <p className="text-sm text-[#D1CDC6]">A comfortable chair and a little space to work.</p>
          </div>
        </article>
        <article className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#171614]/90 p-4">
          <IoBriefcaseOutline className="mt-1 h-6 w-6 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
          <div>
            <h2 className="mb-1 font-bold">We Bring</h2>
            <p className="text-sm text-[#D1CDC6]">Professional tools, haircut equipment and hygiene essentials.</p>
          </div>
        </article>
        <article className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#171614]/90 p-4">
          <IoHomeOutline className="mt-1 h-6 w-6 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
          <div>
            <h2 className="mb-1 font-bold">Our Service</h2>
            <p className="text-sm text-[#D1CDC6]">Home haircut service, beard trimming and hair styling.</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Visit;