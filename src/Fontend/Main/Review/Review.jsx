import { IoStar } from "react-icons/io5";

const reviews = [
  {
    name: "K.Rahul",
    service: "Classic Cut",
    rating: 5,
    text: "Excellent service! The barber arrived on time, understood exactly what hairstyle I wanted, and did a fantastic job. The experience was smooth and convenient.",
  },
  {
    name: "M.Arjun",
    service: "Fade Style",
    rating: 5,
    text: "I really loved the service. Booking an appointment was very easy, and the barber was professional and friendly. Definitely a great experience!",
  },
  {
    name: "R.Karthik",
    service: "Beard Trim",
    rating: 4,
    text: "Style Cut made grooming so simple. I could choose my preferred service, book a time, and enjoy a professional haircut at home.",
  },
  {
    name: "Sai Teja",
    service: "Hot Towel Shave",
    rating: 5,
    text: "Very convenient booking process and excellent grooming service. The barber was punctual and maintained good hygiene.",
  },
  {
    name: "P.Naveen",
    service: "Kids Cut",
    rating: 5,
    text: "Style Cut made grooming so simple. I could choose my preferred service, book a time, and enjoy a professional haircut at home.",
  },
  {
    name: "S.Rohith",
    service: "Home Visit",
    rating: 5,
    text: "Amazing experience from booking to service completion. Friendly barber, great styling, and reasonable pricing. Will definitely book again!",
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