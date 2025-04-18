import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import clsx from "clsx";

const reviews = [
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
      <h3 className="text-center font-semibold mb-8">
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={clsx(
                "h-[400px] bg-gray-100 p-6 rounded-2xl border-l-8",
                `border-l-${review.boxColor}`
              )}
            >
              <div
                className={clsx("flex gap-1 mb-3", `text-${review.boxColor}`)}
              >
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h3 className="text-lg text-left font-semibold">
                {review.title}
              </h3>
              <p className="mt-2 text-left text-[16px] italic">
                 "{review.text}"
                </p>
              <p className="mt-4 text-left font-bold">- {review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
