import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import clsx from "clsx";

// Step 1: Define allowed color keys
type BoxColor = "orange-400" | "teal-400" | "yellow-400";

// Step 2: Map color keys to Tailwind classes
const colorClassMap: Record<BoxColor, { border: string; text: string }> = {
  "orange-400": {
    border: "border-l-orange-400",
    text: "text-orange-400",
  },
  "teal-400": {
    border: "border-l-teal-400",
    text: "text-teal-400",
  },
  "yellow-400": {
    border: "border-l-yellow-400",
    text: "text-yellow-400",
  },
};

// Step 3: Define reviews with strict types
const reviews: {
  name: string;
  title: string;
  text: string;
  rating: number;
  boxColor: BoxColor;
}[] = [
  {
    name: "Sophia T.",
    title: "The Best Team for Digital Marketing!",
    text: "I absolutely love working with Detoplea Marketing Agency! They’ve helped me with social media management and paid ads, and the results have been phenomenal. Not only do they provide top-tier services, but they also take the time to explain their strategy, ensuring I understand the impact of each campaign. Their passion and expertise shine through in everything they do. Highly recommend them to anyone looking to grow their business online!",
    rating: 5,
    boxColor: "orange-400",
  },
  {
    name: "Ma.R",
    title: "Expert Marketing Team That Delivers Results!",
    text: "Detoplea Marketing Agency exceeded all my expectations! From designing a beautiful, high-converting website to managing my paid ad campaigns, their expertise has helped my business thrive. Their team is knowledgeable, proactive, and always willing to go the extra mile. Thanks to their strategic approach to digital marketing, I’ve seen a significant increase in leads and engagement. If you’re serious about growing your business, Detoplea is the agency to trust!",
    rating: 5,
    boxColor: "teal-400",
  },
  {
    name: "John D.",
    title: "Fantastic Work & Great Communication!",
    text: "Detoplea Marketing Agency completely transformed my brand. Their brand development strategy gave my business a fresh, professional identity that truly resonates with my audience. From logo design to messaging, they took care of everything with exceptional attention to detail. My brand now stands out, and I’ve seen a huge boost in engagement. If you need a branding expert, Detoplea is the team to call!",
    rating: 4,
    boxColor: "yellow-400",
  },
];

const ReviewSlider = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 px-4 w-full">
      <h3 className="text-center text-4xl md:text-6xl font-semibold mb-8">
        TRUSTED BY DIFFERENT PEOPLE
      </h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2.2 },
        }}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review, index) => {
          const color = colorClassMap[review.boxColor];

          return (
            <SwiperSlide key={index}>
              <div
                className={clsx(
                  "h-[380px] bg-gray-100 p-6 rounded-2xl border-l-8",
                  color.border
                )}
              >
                <div className={clsx("flex gap-1 mb-3", color.text)}>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-left mb-2">
                  {review.title}
                </h3>
                <p className="text-left text-[16px] italic line-clamp-6">
                  "{review.text}"
                </p>
                <p className="mt-4 font-bold text-left">- {review.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
