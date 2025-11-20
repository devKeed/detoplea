"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/custom-swiper.css";
import logo from "/images/LOGO2.png";
import leftArrow from "/images/leftarrow.png";
import rightArrow from "/images/rightarrow.png";

const HighlightCarousel = ({ highlights }: { highlights: HighlightItem[] }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    const cleanUrl = url.split("?")[0];
    return cleanUrl.replace("youtu.be/", "www.youtube.com/embed/");
  };

  return (
    <div className="relative w-full bg-white">
      <h2 className="text-center text-3xl font-bold mb-6">HIGHLIGHTS</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        loop={true}
        className="w-full"
      >
        {highlights.map((highlight) => (
          <SwiperSlide key={highlight.id}>
            <div
              className="relative cursor-pointer"
              onClick={() => setSelectedVideo(highlight.videoUrl)}
            >
              <div className="relative w-full h-[500px]">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover object-top-"
                />
                <div className="absolute inset-0 bg-red-900 mix-blend-multiply"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <img src={logo} alt="Logo" className="w-40 mb-4" />
                <h3 className="text-3xl font-bold">{highlight.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev absolute top-1/2 left-8 transform -translate-y-1/2 z-10 cursor-pointer">
        <img src={leftArrow} alt="Previous" className="w-12 h-12 opacity-90" />
      </div>
      <div className="custom-next absolute top-1/2 right-8 transform -translate-y-1/2 z-10 cursor-pointer">
        <img src={rightArrow} alt="Next" className="w-12 h-12 opacity-90" />
      </div>

      <div className="custom-pagination flex justify-center space-x-2 mt-4"></div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden w-full max-w-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <iframe
              src={getEmbedUrl(selectedVideo)}
              className="w-full h-96"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightCarousel;

interface HighlightItem {
  id: number;
  title: string;
  image: string;
  videoUrl: string;
}
