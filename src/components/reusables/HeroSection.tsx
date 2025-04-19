import React from "react";

const HeroSection: React.FC = ({}) => {
  return (
    <div
      className="relative flex items-center justify-center text-center text-white px-3 sm:px-6 mt-10 sm:mt-14"
      style={{
        backgroundImage: `
        url(/images/hero1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "top left, top right, bottom left, bottom right",
        backgroundRepeat: "no-repeat",
        height: "85vh",
        minHeight: "500px",
      }}
    >
      <div className="relative z-10 p-4 md:p-20">
        <div className="flex flex-col gap-4 sm:gap-2 items-center text-white">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-white font-light">
              Custom
            </p>{" "}
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-semibold">
              Strategies
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-semibold">
              Cutting-Edge
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-white font-light">
              Content
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-white font-light">
              Measurable
            </p>{" "}
            <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-semibold">
              Results
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
