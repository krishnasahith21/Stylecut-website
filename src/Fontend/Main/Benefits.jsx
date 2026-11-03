import { IoHomeOutline, IoShieldCheckmarkOutline, IoStarOutline } from "react-icons/io5";
import { HiScissors } from "react-icons/hi2";

const Benefits = () => {
  return (
    <section
      className="grid w-full grid-cols-4 gap-6 px-5 py-[30px] pb-6 max-[580px]:grid-cols-2 max-[580px]:gap-x-3 max-[580px]:gap-y-[22px] max-[580px]:py-5 max-[580px]:pb-7"
      aria-label="Why choose Cutcraft"
    >
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-xs">
        <HiScissors className="h-7 w-7  text-[#F0ECE4]  max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Expert Barbers<br />&amp; Stylists</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-xs">
        <IoShieldCheckmarkOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Hygienic &amp; Safe<br />Tools Every Visit</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2 max-[580px]:text-xs">
        <IoStarOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Premium Products<br />Only</span>
      </div>
      <div className="flex items-center gap-[15px] text-sm leading-[1.4] text-[#D5D1C9] max-[580px]:gap-2.5 max-[580px]:text-xs">
        <IoHomeOutline className="h-7 w-7 shrink-0 text-[#F0ECE4] stroke-[1.8] max-[580px]:h-6 max-[580px]:w-6" aria-hidden="true" />
        <span>Barber Comes<br />to Your Home</span>
      </div>
    </section>
  );
};

export default Benefits;
