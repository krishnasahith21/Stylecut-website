const Login = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f6f2] px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#52745a]">
            Style Cut
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to manage your account and bookings.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#52745a] focus:ring-2 focus:ring-[#52745a]/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#52745a] focus:ring-2 focus:ring-[#52745a]/20"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#52745a] px-4 py-3 font-semibold text-white transition hover:bg-[#405d47] focus:outline-none focus:ring-2 focus:ring-[#52745a] focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login