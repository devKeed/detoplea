import { GoArrowDownRight } from "react-icons/go";

const portfolioItems = [
  { id: 1, company: "GREYSLTD", image: "/images/image77.png", height: "300px" },
  {
    id: 2,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "400px",
  },
  { id: 3, company: "WOUR NOW", image: "/images/image79.png", height: "350px" },
  {
    id: 4,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "450px",
  },
  { id: 5, company: "GREYSLTD", image: "/images/image77.png", height: "320px" },
  {
    id: 6,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "380px",
  },
  { id: 7, company: "WOUR NOW", image: "/images/image77.png", height: "360px" },
  { id: 8, company: "GREYSLTD", image: "/images/image78.png", height: "400px" },
  { id: 9, company: "GREYSLTD", image: "/images/image79.png", height: "320px" },
];

const Portfolio = () => {
  return (
    <section className="w-full py-16 px-4 md:px-16 mb-20">
      {/* Portfolio Header */}
      <div className="text-center mb-16 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Our <span className="text-[#F2720D]">Portfolio</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Because you’re after results, and we know how to get them.
        </p>
      </div>

      {/* Masonry Layout Portfolio */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="mb-6 break-inside-avoid ">
            <p style={{marginTop: item.id == 1 ? "none" : "20px"}} className="text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2">
              <GoArrowDownRight size={20} />
              {item.company}
            </p>
            <img
              src={item.image}
              alt={item.company}
              className="w-full object-cover "
              style={{ height: item.height }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
