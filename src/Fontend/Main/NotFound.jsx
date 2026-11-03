import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-1 flex-col items-start justify-center py-16">
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <Link className="text-[#E8D0A1] underline" to="/">
        Return home
      </Link>
    </main>
  );
};

export default NotFound;
