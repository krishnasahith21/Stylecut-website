import { IoStar } from "react-icons/io5";

const reviews = [
  {
    name: "Sample Customer",
    service: "Classic Cut",
    rating: 5,
    text: "Demo review: replace this with feedback from a real customer.",
  },
  {
    name: "Sample Customer",
    service: "Fade Style",
    rating: 5,
    text: "Demo review: add a genuine customer comment about their visit here.",
  },
  {
    name: "Sample Customer",
    service: "Beard Trim",
    rating: 4,
    text: "Demo review: update this card with verified customer feedback.",
  },
  {
    name: "Sample Customer",
    service: "Hot Towel Shave",
    rating: 5,
    text: "Demo review: add a real customer's thoughts about the shave experience.",
  },
  {
    name: "Sample Customer",
    service: "Kids Cut",
    rating: 5,
    text: "Demo review: replace with verified feedback from a parent or guardian.",
  },
  {
    name: "Sample Customer",
    service: "Home Visit",
    rating: 4,
    text: "Demo review: replace with genuine feedback about the home visit service.",
  },
];

const Review = () => {
  return (
    <section className="my-8 rounded-3xl bg-[#111110] px-5 py-8 text-[#F4F0E8] sm:px-8">
      <header className="mb-6 text-center">
        <p className="mb-2 text-[10px] uppercase tracking-[3px] text-[#D4C5A3]">
          Customer Reviews
        </p>
        <h2 className="text-3xl font-bold max-[580px]:text-2xl">
          What Customers <span className="text-[#E8D0A1]">Say</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[#BDB8AF]">
          Sample reviews for preview only. Replace these with real customer feedback before publishing.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review, index) => (
          <article
            className="rounded-2xl border border-[#39352C] bg-[#181715] p-5"
            key={`${review.service}-${index}`}
          >
            <div
              className="mb-3 flex gap-1 text-[#E8D0A1]"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {Array.from({ length: review.rating }, (_, starIndex) => (
                <IoStar key={starIndex} aria-hidden="true" />
              ))}
            </div>
            <p className="min-h-16 text-sm leading-6 text-[#D1CDC6]">
              “{review.text}”
            </p>
            <div className="mt-4 border-t border-[#39352C] pt-3">
              <p className="text-sm font-bold">{review.name}</p>
              <p className="mt-1 text-xs text-[#A7A29A]">{review.service}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Review;