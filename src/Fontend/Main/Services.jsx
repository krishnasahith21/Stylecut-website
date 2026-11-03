import { HiScissors } from "react-icons/hi2";
import { IoArrowForward, IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import classicCutImage from "../../assets/images/classic-cut.jpg";
import beardTrimImage from "../../assets/images/beard-trim.jpg";
import fadeCutImage from "../../assets/images/fade-cut.jpg";
import hotTowelImage from "../../assets/images/hot-towel-shave.jpg";
import kidsCutImage from "../../assets/images/kids-cut.jpg";

const services = [
  {
    name: "Classic Cut",
    description: "Timeless, clean and always in style.",
    price: "₹250",
    image: classicCutImage,
  },
  {
    name: "Beard Trim",
    description: "Shape, define and keep it sharp.",
    price: "₹150",
    image: beardTrimImage,
  },
  {
    name: "Fade Cut",
    description: "Smooth fades for a modern look.",
    price: "₹350",
    image: fadeCutImage,
  },
  {
    name: "Hot Towel Shave",
    description: "Relaxing shave with premium products.",
    price: "₹300",
    image: hotTowelImage,
  },
  {
    name: "Kids Cut",
    description: "Gentle cuts for your little ones.",
    price: "₹200",
    image: kidsCutImage,
  },
];

const Services = () => {
  return (
    <section className="py-8" id="services">
      <p className="mb-2 text-[10px] uppercase tracking-[3px] text-[#D4C5A3]">
        Our Services
      </p>
      <h2 className="mb-2 text-3xl font-bold text-[#F4F0E8] max-[580px]:text-2xl">
        Find Your <span className="text-[#E8D0A1]">Perfect Look</span>
      </h2>
      <p className="mb-6 max-w-[500px] text-sm leading-5 text-[#D1CDC6]">
        Every service is available at your home or in the shop. Pick one, then
        choose where you want it.
      </p>

      <div className="grid grid-cols-5 gap-3 max-[900px]:grid-cols-3 max-[580px]:grid-cols-2">
        {services.map((service) => (
          <article
            className="group overflow-hidden rounded-xl border border-[#292722] bg-[#111110]"
            key={service.name}
          >
            <img
              className="h-[112px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={service.image}
              alt={`${service.name} barbershop service`}
              loading="lazy"
            />
            <div className="p-3">
              <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-md border border-[#39352C] text-[#E8D0A1]">
                <HiScissors aria-hidden="true" />
              </span>
              <h3 className="mb-1 text-sm font-bold text-[#F4F0E8]">
                {service.name}
              </h3>
              <p className="min-h-8 text-[10px] leading-4 text-[#BDB8AF]">
                {service.description}
              </p>
              <p className="mb-2 mt-1 flex items-center gap-1 text-[9px] text-[#E8D0A1]">
                <IoHomeOutline aria-hidden="true" />
                At home or in shop
              </p>
              <p className="mb-2 text-sm font-bold text-[#F4F0E8]">
                {service.price}
              </p>
              <Link
                className="flex min-h-8 items-center justify-center gap-2 rounded-md bg-[#342113] px-2 text-[10px] font-bold text-white transition-colors hover:bg-[white] hover:text-black"
                to="/booking"
              >
                Book Now <IoArrowForward aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
