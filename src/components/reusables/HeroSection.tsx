import React from "react";
// import Socials from "./Socials";
import image22 from "/images/image 22.png";
import image23 from "/images/image 23.png";
import image233 from "/images/image233.png";
import image from "/images/image.png";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  actionText?: string;
  actionLink?: string;
  backgroundImage: string;
  height?: string;
  showSocials?: boolean;
  colorOverlay?: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
  section?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  colorOverlay,
  height = "120vh",
  titleFontSize,
  subtitleFontSize = "lg",
  section,
}) => {
  return (
    <div className="relative mt-28" style={{ minHeight: height }}>
      {/* Container for the 4 background images */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {/* Top Left Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image22})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Top Right Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image23})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Bottom Left Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image233})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Bottom Right Image */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Overlay */}
      {colorOverlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: colorOverlay,
            opacity: 0.7,
          }}
        ></div>
      )}

      {/* Content */}
      <div
        className="relative z-10 flex items-center justify-center text-center text-white px-6 h-full"
        style={{ minHeight: height }}
      >
        <div className="p-4 md:p-20">
          {section == "home" && (
            <div className="flex flex-col gap-2 items-center">
              <div className="flex flex-row items-center gap-5 ">
                <p className="text-3xl md:text-5xl lg:text-4xl  font-light">
                  Custom
                </p>{" "}
                <h1 className="text-6xl md:text-7xl font-semibold">
                  Strategies
                </h1>
              </div>

              <div className="flex flex-row items-center gap-5 ">
                <h1 className="text-6xl md:text-7xl font-semibold">
                  Cutting-Edge
                </h1>
                <p className="text-3xl md:text-5xl lg:text-4xl font-light">
                  Content
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 ">
                <p className="text-3xl md:text-5xl lg:text-4xl font-light">
                  Measurable
                </p>{" "}
                <h1 className="text-6xl md:text-7xl font-semibold">Results</h1>
              </div>
            </div>
          )}

          {section == "warriors" && (
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
                WHERE THE
              </h3>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-tight">
                ACTION NEVER
              </h3>
              <h1 className="text-9xl md:text-8xl lg:text-[300px] uppercase leading-tight">
                DIES
              </h1>
            </div>
          )}

          {section == "dambe" && (
            <div className="flex flex-col items-center">
              <h1 className="text-9xl md:text-8xl lg:text-[240px] uppercase leading-tight">
                DAMBE
              </h1>
            </div>
          )}

          {subtitle && (
            <h3
              className={`text-${subtitleFontSize} font-semibold uppercase subtitleText`}
            >
              {subtitle}
            </h3>
          )}

          <h1 className={`text-${titleFontSize} font-bold titleText`}>
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg max-w-3xl">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
