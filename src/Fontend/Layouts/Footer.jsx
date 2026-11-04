import { HiArrowUpRight, HiClock, HiMapPin, HiPhone, HiScissors } from "react-icons/hi2";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-[#E8D0A1]/20 bg-[#0B0B0B]/85 text-[#D4D0C9]">
      <div className="mx-auto grid max-w-7xl gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:py-14">
        <section>
          <Link className="inline-flex items-center gap-3" to="/home">
            <HiScissors className="h-9 w-9 text-[#E8D0A1]" aria-hidden="true" />
            <span>
              <strong className="block text-xl tracking-[2px] text-[#F4F0E8]">STYLE CUT</strong>
              <small className="text-[9px] tracking-[2px] text-[#A7A29A]">MODERN BARBERSHOP</small>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#A7A29A]">
            Your next great haircut is just an appointment away. Visit us for a fresh cut or book a home visit.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#E8D0A1] px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-[#F2DFB8]"
            to="/booking"
          >
            Book an appointment
            <HiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E8D0A1]">Explore</h2>
          <ul className="space-y-3 text-sm">
            <li><Link className="transition-colors hover:text-[#E8D0A1]" to="/home">Home</Link></li>
            <li><Link className="transition-colors hover:text-[#E8D0A1]" to="/styles">Styles</Link></li>
            <li><Link className="transition-colors hover:text-[#E8D0A1]" to="/services">Services</Link></li>
            <li><Link className="transition-colors hover:text-[#E8D0A1]" to="/about">About us</Link></li>
            <li><Link className="transition-colors hover:text-[#E8D0A1]" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <section>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[2px] text-[#E8D0A1]">Visit us</h2>
          <address className="space-y-4 text-sm not-italic">
            <p className="flex items-start gap-3 leading-6">
              <HiMapPin className="mt-1 h-5 w-5 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
              <span>Sarojini Devi Road, near Eat Street<br />Tirupati - 517501</span>
            </p>
            <a className="flex items-center gap-3 transition-colors hover:text-[#E8D0A1]" href="tel:180021256657">
              <HiPhone className="h-5 w-5 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
              1800 212 56657
            </a>
            <p className="flex items-center gap-3">
              <HiClock className="h-5 w-5 shrink-0 text-[#E8D0A1]" aria-hidden="true" />
              Open until 09:00 PM
            </p>
          </address>
          <a className="mt-4 inline-block text-sm transition-colors hover:text-[#E8D0A1]" href="mailto:customercare@Stylecut.in">
            customercare@Stylecut.in
          </a>
        </section>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-[#8F8A82]">
        © {currentYear} Style Cut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
