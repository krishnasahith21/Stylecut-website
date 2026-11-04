import { useState } from "react";
import { useNavigate } from "react-router-dom";
import barberBackground from "../../assets/images/barber-background.png";
import Register from "./register";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to sign in.");
      }

      navigate("/home");
    } catch (requestError) {
      setError(
        requestError instanceof TypeError
          ? "Unable to connect to the server. Please try again."
          : requestError.message,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegistered = (registeredEmail) => {
    setEmail(registeredEmail);
    setShowRegister(false);
    setError("");
    setNotice("Account created. Sign in with your new account.");
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-[#0B0B0B] bg-cover bg-center bg-fixed px-[4.4%]"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.72), rgba(11, 11, 11, 0.82)), url(${barberBackground})`,
      }}
    >
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {showRegister ? (
          <Register
            onLogin={() => {
              setShowRegister(false);
              setError("");
            }}
            onRegistered={handleRegistered}
          />
        ) : (
          <form
            className="w-full max-w-md rounded-2xl border border-[#E8D0A1]/30 bg-[#101010]/90 p-8 text-[#F4F0E8] shadow-2xl"
            onSubmit={handleLogin}
          >
            <p className="mb-2 text-center text-sm uppercase tracking-[3px] text-[#E8D0A1]">
              Style Cut
            </p>
            <h1 className="mb-2 text-center text-3xl font-bold">Welcome Back</h1>
            <p className="mb-7 text-center text-sm text-[#BDB8AF]">
              Login to book your next haircut.
            </p>

            {notice && (
              <p className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-200" role="status">
                {notice}
              </p>
            )}
            {error && (
              <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200" role="alert">
                {error}
              </p>
            )}

            <label className="mb-4 block text-sm">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label className="mb-6 block text-sm">
              Password
              <input
                className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </label>

            <button
              className="w-full rounded-lg bg-[#E8D0A1] p-3 font-bold text-black transition-colors hover:bg-[#F2DFB8] disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
            <p className="mt-6 text-center text-sm text-[#BDB8AF]">
              Don&apos;t have an account?{" "}
              <button
                className="font-semibold text-[#E8D0A1] hover:underline"
                type="button"
                onClick={() => {
                  setShowRegister(true);
                  setError("");
                  setNotice("");
                }}
              >
                Register
              </button>
            </p>
          </form>
        )}
      </main>
    </div>
  );
};

export default Login;
