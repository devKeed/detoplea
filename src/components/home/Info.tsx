import { MyOutlinedButton } from "../reusables/Button";

const Info = () => {
  return (
    <div className="bg-[#F2F2F2] py-16 md:py-20 items-center flex flex-col gap-4 md:gap-10 justify-center text-center">
      {/* <RevealOnScroll> */}
        {" "}
        <p className=" text-center text-xl tracking-wide px-3 md:px-0 md:w-1/2">
          We don’t just manage your marketing we strategically align every piece
          to maximize impact. we cover all the angles to ensure your brand
          stands out and succeeds.
        </p>
      {/* </RevealOnScroll> */}
      <MyOutlinedButton text="Learn More" link="" />
    </div>
  );
};

export default Info;
