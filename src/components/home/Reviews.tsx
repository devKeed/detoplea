import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Sophia T.",
    title: "The Best Team for Digital Marketing!",
    text: "I absolutely love working with Example Marketing Agency! They've helped me with social media management and paid ads...",
    rating: 5,
    borderColor: "border-l-orange-400",
  },
  {
    name: "Ma.R",
    title: "Expert Marketing Team That Delivers Results!",
    text: "Example Marketing Agency exceeded all my expectations from designing to execution...",
    rating: 5,
    borderColor: "border-l-teal-400",
  },
  {
    name: "John D.",
    title: "Fantastic Work & Great Communication!",
    text: "Working with this team has been an amazing experience! They truly understand branding...",
    rating: 4,
    borderColor: "border-l-yellow-400",
  },
];

const ReviewSlider = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <h2 className="text-center text-4xl font-semibold mb-8">
        TRUSTED BY DIFFERENT PEOPLE
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2} // Show a part of the next slide
        breakpoints={{
          768: { slidesPerView: 2.2 }, // On medium screens, show 2 full cards + partial next
        }}
        loop={true}
        className="px-4 md:px-0"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative bg-gray-100 p-6 rounded-lg shadow-md border-l-4 ${review.borderColor}`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3 text-orange-400">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="text-lg font-semibold">{review.title}</h3>

              {/* Review Text */}
              <p className="text-gray-600 mt-2">{review.text}</p>

              {/* Reviewer Name */}
              <p className="mt-4 font-bold">- {review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
