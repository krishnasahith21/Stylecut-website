import { useState } from "react";
import { IoAt, IoCall, IoChatbubbleEllipses, IoLocationSharp, IoMail, IoTime, IoPerson } from "react-icons/io5";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="my-6 rounded-lg border-t-2 border-[#d6a829] bg-gray-200 px-5 py-8 text-[#171717] shadow-xl sm:px-8 sm:py-10 lg:px-12">
      <h1 className="mb-8 text-center text-2xl font-medium tracking-wide sm:text-3xl">
        CONTACT US
      </h1>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
        <section>
          <h2 className="border-b border-[#d3d3d3] pb-2 text-xl font-medium sm:text-2xl">
            HEAD OFFICE
          </h2>
          <div className="space-y-3 px-1 pt-4 text-sm leading-6 sm:px-3">
            <p className="flex items-start gap-1">
              <IoLocationSharp className="mt-1 shrink-0 text-[#d6a829]" aria-hidden="true" />
              <span>Sarojini Devi Road, near Eat Street<br />Tirupati - 517501</span>
            </p>
            <a className="flex items-center gap-1 hover:text-[#b38a18]" href="tel:180021256657">
              <IoCall className="shrink-0 text-[#d6a829]" aria-hidden="true" />
              1800 212 56657
            </a>

            <div className="space-y-2 pt-5">
              <p className="flex items-center gap-1">
                <IoTime className="shrink-0 text-[#d6a829]" aria-hidden="true" />
                Open until 09:00 PM
              </p>
              <p><IoAt className="mr-1 inline text-[#d6a829]" aria-hidden="true" /><strong>Careers:</strong> careers@Stylecut.in</p>
              <p><IoAt className="mr-1 inline text-[#d6a829]" aria-hidden="true" /><strong>Academy:</strong> academy@Stylecut.in</p>
              <p className="flex items-center gap-1">
                <IoChatbubbleEllipses className="shrink-0 text-[#d6a829]" aria-hidden="true" />
                <span><strong>Feedback:</strong> customercare@Stylecut.in</span>
              </p>
              <p><strong>Franchise Opportunities:</strong> franchise@Stylecut.in</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="border-b border-[#d3d3d3] pb-2 text-xl font-medium sm:text-2xl">
            SEND QUERY
          </h2>
          <p className="py-5 text-sm">Kindly fill up your details and submit your query</p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <label className="flex items-center gap-3 border-b border-[#777] py-2">
              <IoPerson className="shrink-0 text-[#d6a829]" aria-hidden="true" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#171717] focus:placeholder:text-gray-500"
                name="name"
                placeholder="Name*"
                required
              />
            </label>
            <label className="flex items-center gap-3 border-b border-[#777] py-2">
              <IoMail className="shrink-0 text-[#d6a829]" aria-hidden="true" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#171717] focus:placeholder:text-gray-500"
                name="email"
                placeholder="Email Id*"
                required
                type="email"
              />
            </label>
            <label className="flex items-center gap-3 border-b border-[#777] py-2">
              <IoCall className="shrink-0 text-[#d6a829]" aria-hidden="true" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#171717] focus:placeholder:text-gray-500"
                name="phone"
                placeholder="Contact*"
                required
                type="tel"
              />
            </label>
            <label className="flex items-start gap-3 border-b border-[#777] py-2">
              <IoChatbubbleEllipses className="mt-1 shrink-0 text-[#d6a829]" aria-hidden="true" />
              <textarea
                className="min-h-12 w-full resize-y bg-transparent text-sm outline-none placeholder:text-[#171717] focus:placeholder:text-gray-500"
                name="Address"
                placeholder="Query*"
                required
                rows="2"
              />
            </label>
            <button
              className="mt-5 bg-[#d6b333] px-6 py-2.5 font-semibold text-white transition-colors hover:bg-[#bd9a24]"
              type="submit"
            >
              Send Query
            </button>
            {submitted && (
              <p className="text-sm text-[#72580d]" role="status">
                This form is Submited.
              </p>
            )}
          </form>

          <div className="mt-3 text-center">
            <p className="text-sm">OR</p>
            <a className="mt-1 inline-block text-[#b58d1d] hover:underline" href="tel:180021256657">
              Call us @ <strong className="text-[#171717]">1800 212 56657</strong>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;