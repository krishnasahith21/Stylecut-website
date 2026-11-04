import { IoHomeOutline, IoShieldCheckmarkOutline, IoStarOutline } from "react-icons/io5";
import { HiScissors } from "react-icons/hi2";

const Benefits = () => {
  return (
    <section
      className="relative z-10 grid w-full grid-cols-4 text-black gap-6 px-5 pb-5 pt-3 sm:px-8 lg:px-12 max-[580px]:grid-cols-2 max-[580px]:gap-x-3 max-[580px]:gap-y-4"
      aria-label="Why choose Cutcraft"
    >
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-md">
        <HiScissors className="h-7 w-7  text-[#F0ECE4]  max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Expert Barbers<br />&amp; Stylists</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-md">
        <IoShieldCheckmarkOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Hygienic &amp; Safe<br />Tools Every Visit</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2 max-[580px]:text-md">
        <IoStarOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Premium Products<br />Only</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-md">
        <IoHomeOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Barber Comes<br />to Your Home</span>
      </div>
    </section>
  );
};

export default Benefits;
