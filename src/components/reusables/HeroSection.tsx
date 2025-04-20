import React from "react";

const HeroSection: React.FC = ({}) => {
  return (
    <div
      className="relative flex items-center justify-center text-center text-white px-3 sm:px-6 mt-10 md:mt-16 sm:mt-14"
      style={{
        backgroundImage: `
        url(/images/hero1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
        height: "85vh",
        minHeight: "500px",
      }}
    >
      <div className=" p-4 md:p-20">
      <SmallText text="Strategies" />
        <BigText text=" Cutting-Edge" />
        <SmallText text="Content" />
        <BigText text=" Measurable" />
        <SmallText text="Results" />
      </div>
    </div>
  );
};

export default HeroSection;

export const BigText = (props: { text: string }) => {
  return (
    <span className="text-3xl sm:text-5xl md:text-7xl text-white font-semibold mr-2">
      {props.text}
    </span>
  );
};

export const SmallText = (props: { text: string }) => {
  return (
   <> <span className="text-xl sm:text-3xl md:text-4xl text-white font-semibold mr-2">
   {props.text}
 </span></>
  );
};
