"use client";
import { useState } from "react";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The best coffee shop in town! Their caramel latte is absolutely divine.",
    rating: 5,
  },
  {
    id: 2,
    name: "James L.",
    text: "As a coffee connoisseur, I'm very particular about my brew.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emily R.",
    text: "I come here every morning before work. It's my happy place!",
    rating: 4,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <AiFillStar key={i} className="text-amber-500 text-xl" />
      ))}
      {hasHalfStar && <AiTwotoneStar className="text-amber-500 text-xl" />}
      {[...Array(emptyStars)].map((_, i) => (
        <AiOutlineStar key={i} className="text-gray-400 text-xl" />
      ))}
    </div>
  );
};

const TestReview = () => {
  const [theme, setTheme] = useState("light"); // or "dark"

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`p-6 rounded-lg shadow-lg transition-all hover:scale-105 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              {renderStars(t.rating)}
              <p className="italic mt-2 mb-4">"{t.text}"</p>
              <p className="font-semibold text-amber-600">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestReview;
