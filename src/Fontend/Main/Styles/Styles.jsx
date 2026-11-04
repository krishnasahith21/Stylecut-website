import { useState } from "react";
import { IoStar } from "react-icons/io5";
import classicCutImage from "../../../assets/images/classic-cut.jpg";
import beardTrimImage from "../../../assets/images/beard-trim.jpg";
import fadeCutImage from "../../../assets/images/fade-cut.jpg";
import hotTowelImage from "../../../assets/images/hot-towel-shave.jpg";
import kidsCutImage from "../../../assets/images/kids-cut.jpg";
import barberBackgroundImage from "../../../assets/images/barber-background.png";

const styles = [
  {
    name: "Classic Cut",
    description: "Timeless and professional look.",
    rating: "4.8",
    reviews: "2.5k reviews",
    category: "Classic",
    image: classicCutImage,
  },
  {
    name: "Modern Quiff",
    description: "Stylish and trendy hairstyle.",
    rating: "4.7",
    reviews: "1.8k reviews",
    category: "Modern",
    image: hotTowelImage,
  },
  {
    name: "Fade Style",
    description: "Clean fade with sharp lines.",
    rating: "4.9",
    reviews: "3.1k reviews",
    category: "Fade Styles",
    image: fadeCutImage,
  },
  {
    name: "Curly Style",
    description: "Natural curls, fresh look.",
    rating: "4.6",
    reviews: "1.2k reviews",
    category: "Trending",
    image: kidsCutImage,
  },
  {
    name: "Beard & Hair",
    description: "Perfect style with beard.",
    rating: "4.8",
    reviews: "2.7k reviews",
    category: "Beard Styles",
    image: beardTrimImage,
  },
  {
    name: "Messy Texture",
    description: "Effortless and stylish.",
    rating: "4.7",
    reviews: "1.5k reviews",
    category: "Trending",
    image: barberBackgroundImage,
  },
  {
    name: "Textured Crop",
    description: "Short sides with a textured, easy-to-style top.",
    rating: "4.8",
    reviews: "1.9k reviews",
    category: "Modern",
    image: null,
  },
  {
    name: "Crew Cut",
    description: "A neat, low-maintenance cut with a clean finish.",
    rating: "4.7",
    reviews: "1.6k reviews",
    category: "Classic",
    image: null,
  },
  {
    name: "Pompadour",
    description: "A voluminous top paired with neatly tapered sides.",
    rating: "4.8",
    reviews: "2.1k reviews",
    category: "Modern",
    image: null,
  },
  {
    name: "Side Part",
    description: "A polished, timeless style with a defined part.",
    rating: "4.6",
    reviews: "1.4k reviews",
    category: "Classic",
    image: null,
  },
  {
    name: "Buzz Cut",
    description: "An even, close cut for a sharp, simple look.",
    rating: "4.7",
    reviews: "1.7k reviews",
    category: "Trending",
    image: null,
  },
  {
    name: "Undercut",
    description: "Bold contrast with short sides and a longer top.",
    rating: "4.8",
    reviews: "2.3k reviews",
    category: "Modern",
    image: null,
  },
  {
    name: "French Crop",
    description: "A clean fringe and cropped top with a fresh fade.",
    rating: "4.7",
    reviews: "1.8k reviews",
    category: "Fade Styles",
    image: null,
  },
  {
    name: "Taper Fade",
    description: "A smooth, gradual fade around the neckline and temples.",
    rating: "4.9",
    reviews: "2.8k reviews",
    category: "Fade Styles",
    image: null,
  },
  {
    name: "High and Tight",
    description: "A crisp, short style with clean high-fade sides.",
    rating: "4.6",
    reviews: "1.3k reviews",
    category: "Fade Styles",
    image: null,
  },
  {
    name: "Slick Back",
    description: "A smooth, brushed-back style with a refined finish.",
    rating: "4.8",
    reviews: "2.0k reviews",
    category: "Trending",
    image: null,
  },
];

const categories = ["All Styles", "Classic", "Modern", "Beard Styles", "Fade Styles", "Trending"];

const Styles = () => {
  const [activeCategory, setActiveCategory] = useState("All Styles");

  const filteredStyles = styles.filter(
    (style) => activeCategory === "All Styles" || style.category === activeCategory,
  );

  return (
    <main className="mb-8 rounded-[24px] bg-[#fbf8f4] px-4 py-6 text-[#171513] shadow-2xl sm:px-6 sm:py-8 lg:px-8">
      <header className="mb-5 text-center">
        <p className="text-sm text-[#68635e] sm:text-base">
          Choose your favorite look from our trendy hairstyles
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                activeCategory === category
                  ? "border-[#d99512] bg-[#e6a51a] text-white shadow-md"
                  : "border-[#ded9d2] bg-white text-[#292521] hover:border-[#d99512]"
              }`}
              key={category}
              onClick={() => {
                setActiveCategory(category);
              }}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStyles.map((style) => (
            <article
              className="group overflow-hidden rounded-xl border border-[#e4dfd8] bg-white shadow-[0_4px_12px_rgba(35,25,15,0.12)] transition-transform hover:-translate-y-1"
              key={style.name}
            >
              <div className="relative h-44 overflow-hidden sm:h-40 lg:h-36">
                {style.image && (
                  <img
                    alt={`${style.name} hairstyle`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    src={style.image}
                  />
                )}
              </div>

              <div className="p-3">
                <h2 className="truncate text-base font-bold">{style.name}</h2>
                <p className="mt-0.5 truncate text-xs text-[#706b65]">{style.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="flex items-center gap-1 text-[11px] text-[#77716a]">
                    <IoStar className="h-3.5 w-3.5 text-[#ed9b13]" aria-hidden="true" />
                    <span className="font-semibold text-[#302b25]">{style.rating}</span>
                    <span>({style.reviews})</span>
                  </p>
                </div>
              </div>
            </article>
        ))}
      </div>

    </main>
  );
};

export default Styles;