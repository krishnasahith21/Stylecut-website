import { HiUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Link
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#E8D0A1] transition-colors hover:bg-white/10 hover:text-[#F2DFB8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8D0A1]"
      to="/login"
      aria-label="Profile"
      title="Profile"
    >
      <HiUserCircle className="h-10 w-10" aria-hidden="true" />
    </Link>
  );
};

export default Profile;