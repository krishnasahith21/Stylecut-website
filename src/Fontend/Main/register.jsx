import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Register = ({ onLogin, onRegistered }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").trim();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to create your account.");
      }

      onRegistered(email);
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

  return (
    <form
      className="w-full max-w-md rounded-2xl border border-[#E8D0A1]/30 bg-[#101010]/90 p-8 text-[#F4F0E8] shadow-2xl"
      onSubmit={handleSubmit}
    >
      <p className="mb-2 text-center text-sm uppercase tracking-[3px] text-[#E8D0A1]">
        Style Cut
      </p>
      <h1 className="mb-2 text-center text-3xl font-bold">Create Account</h1>
      <p className="mb-7 text-center text-sm text-[#BDB8AF]">
        Register to book your next haircut.
      </p>

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
          required
        />
      </label>

      <label className="mb-4 block text-sm">
        Password
        <input
          className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
          type="password"
          name="password"
          placeholder="At least 6 characters"
          autoComplete="new-password"
          minLength={6}
          required
        />
      </label>

      <label className="mb-6 block text-sm">
        Confirm Password
        <input
          className="mt-2 w-full rounded-lg border border-white/15 bg-[#1B1B1B] p-3 outline-none focus:border-[#E8D0A1]"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          minLength={6}
          required
        />
      </label>

      <button
        className="w-full rounded-lg bg-[#E8D0A1] p-3 font-bold text-black transition-colors hover:bg-[#F2DFB8] disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating account..." : "Register"}
      </button>
      <p className="mt-6 text-center text-sm text-[#BDB8AF]">
        Already have an account?{" "}
        <button
          className="font-semibold text-[#E8D0A1] hover:underline"
          type="button"
          onClick={onLogin}
        >
          Login
        </button>
      </p>
    </form>
  );
};

export default Register;
