import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <form
        className="w-full max-w-md rounded-2xl border border-[#E8D0A1]/30 bg-[#101010]/90 p-8 text-[#F4F0E8] shadow-2xl"
        onSubmit={handleSubmit}
      >
        <p className="mb-2 text-center text-sm uppercase tracking-[3px] text-[#E8D0A1]">
          Style Cut
        </p>
        <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>
        <p className="mb-7 text-center text-sm text-[#BDB8AF]">
          Login to book your next haircut.
        </p>

        <label className="mb-4 block text-sm">
          Email
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="mb-6 block text-sm">
          Password
          <input
            className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
        </label>

        <button
          className="w-full rounded-lg bg-[#E8D0A1] p-3 font-bold text-black transition-colors hover:bg-[#F2DFB8]"
          type="submit"
        >
          Login
        </button>

      </form>
    </main>
  );
};

export default Login;