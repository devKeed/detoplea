import { MyOutlinedButton } from "../reusables/Button";
import RevealOnScroll from "../animations/Reveal";

const Info = () => {
  return (
    <div className=" py-16 md:py-20 items-center flex flex-col gap-4 md:gap-10 justify-center text-center">
      {" "}
      <p className="mx-auto text-center text-xl px-3 md:px-0 md:w-1/2">
        {" "}
        <RevealOnScroll>
          We don’t just manage your marketing we strategically align every piece
          to maximize impact. we cover all the angles to ensure your brand
          stands out and succeeds.{" "}
        </RevealOnScroll>
      </p>
      <MyOutlinedButton text="Learn More" link="" />
    </div>
  );
};

export default Info;
