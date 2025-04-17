import { FiArrowUpRight } from "react-icons/fi";

const Sponsors = () => {
  return (
    <div className="bg-[#F2F2F2] py-16 md:py-20 items-center flex flex-col gap-4 md:gap-10 justify-center text-center">
      <p className=" text-center text-xl tracking-wide w-1/2">
        We don’t just manage your marketing we strategically align every piece
        to maximize impact. we cover all the angles to ensure your brand stands
        out and succeeds.
      </p>
      <button className="border border-black text-black-500 flex items-center gap-2 px-4 py-3 rounded-3xl hover:bg-gray-500 hover:text-white transition">
        Learn More <FiArrowUpRight size={22} />
      </button>
    </div>
  );
};

export default Sponsors;
