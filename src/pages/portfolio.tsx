import { GoArrowDownRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

// Enhanced portfolio items with additional information
const portfolioItems = [
  {
    id: 1,
    company: "GREYSLTD",
    image: "/images/image77.png",
    height: "300px",
    description:
      "A comprehensive rebranding project that boosted online engagement by 45% and increased customer retention through strategic digital marketing.",
    services: ["Branding", "Web Design", "Marketing Strategy"],
    year: "2024",
    buttons: [
      { text: "View Branding Guide", icon: <FiArrowUpRight size={20} /> },
      { text: "See Website", icon: <FiArrowUpRight size={20} /> },
      { text: "Results & Metrics", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 2,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "400px",
    description:
      "Developed a full-scale e-commerce solution with custom product showcases that led to a 78% increase in online sales within the first quarter.",
    services: ["E-commerce", "Product Photography", "SEO"],
    year: "2023",
    buttons: [
      { text: "Shop The Store", icon: <FiArrowUpRight size={20} /> },
      { text: "Case Study", icon: <FiArrowUpRight size={20} /> },
      { text: "Product Gallery", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 3,
    company: "WOUR NOW",
    image: "/images/image79.png",
    height: "350px",
    description:
      "Created an immersive digital experience and social media campaign that generated over 1 million impressions and 10,000 new followers.",
    services: ["Social Media", "Content Creation", "Advertising"],
    year: "2024",
    buttons: [
      { text: "Campaign Highlights", icon: <FiArrowUpRight size={20} /> },
      { text: "Social Media", icon: <FiArrowUpRight size={20} /> },
      { text: "Analytics Report", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 4,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "450px",
    description:
      "Seasonal campaign that utilized influencer partnerships to achieve a 300% ROI and establish the brand as a leader in sustainable beauty.",
    services: ["Influencer Marketing", "Campaign Strategy", "Analytics"],
    year: "2023",
    buttons: [
      { text: "Influencer Collaborations", icon: <FiArrowUpRight size={20} /> },
      { text: "Campaign Timeline", icon: <FiArrowUpRight size={20} /> },
      { text: "Success Metrics", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 5,
    company: "GREYSLTD",
    image: "/images/image77.png",
    height: "320px",
    description:
      "Revitalized brand positioning through strategic content marketing and PR initiatives, resulting in features across major industry publications.",
    services: ["PR", "Content Strategy", "Brand Positioning"],
    year: "2022",
    buttons: [
      { text: "Press Features", icon: <FiArrowUpRight size={20} /> },
      { text: "Content Examples", icon: <FiArrowUpRight size={20} /> },
      { text: "Brand Evolution", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 6,
    company: "MELANDRA COSMETICS",
    image: "/images/image78.png",
    height: "380px",
    description:
      "Launched a product line with custom packaging design and digital marketing campaign that sold out inventory within the first 48 hours.",
    services: ["Product Launch", "Packaging Design", "Digital Marketing"],
    year: "2024",
    buttons: [
      { text: "Product Launch Video", icon: <FiArrowUpRight size={20} /> },
      { text: "Packaging Showcase", icon: <FiArrowUpRight size={20} /> },
      { text: "Marketing Materials", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 7,
    company: "WOUR NOW",
    image: "/images/image77.png",
    height: "360px",
    description:
      "Developed an integrated marketing campaign across multiple channels that increased brand awareness by 65% in key target markets.",
    services: [
      "Integrated Marketing",
      "Market Research",
      "Campaign Management",
    ],
    year: "2023",
    buttons: [
      { text: "Market Analysis", icon: <FiArrowUpRight size={20} /> },
      { text: "Campaign Assets", icon: <FiArrowUpRight size={20} /> },
      { text: "Performance Results", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 8,
    company: "GREYSLTD",
    image: "/images/image78.png",
    height: "400px",
    description:
      "Created a brand refresh and digital strategy that positioned the client as an industry innovator and attracted high-value partnerships.",
    services: ["Brand Strategy", "Digital Transformation", "UX Design"],
    year: "2024",
    buttons: [
      { text: "Brand Guidelines", icon: <FiArrowUpRight size={20} /> },
      { text: "Digital Strategy", icon: <FiArrowUpRight size={20} /> },
      { text: "Partner Network", icon: <FiArrowUpRight size={20} /> },
    ],
  },
  {
    id: 9,
    company: "GREYSLTD",
    image: "/images/image79.png",
    height: "320px",
    description:
      "Designed and implemented a customer journey optimization strategy that reduced acquisition costs by 35% while improving conversion rates.",
    services: ["CRO", "UI/UX Design", "Analytics Implementation"],
    year: "2023",
    buttons: [
      { text: "UX Case Study", icon: <FiArrowUpRight size={20} /> },
      { text: "Journey Maps", icon: <FiArrowUpRight size={20} /> },
      { text: "Conversion Data", icon: <FiArrowUpRight size={20} /> },
    ],
  },
];

const Portfolio = () => {
  // Animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.85,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-16 mb-20">
      {/* Portfolio Header */}
      <div className="text-center mb-16 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Our <span className="text-[#F2720D]">Portfolio</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Because you're after results, and we know how to get them.
        </p>
      </div>

      {/* Masonry Layout Portfolio */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="mb-6 break-inside-avoid">
            {/* Portfolio Item with Hover Effect */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <p
                style={{
                  marginTop: item.id === 1 ? "0" : "20px",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px",
                }}
                className="text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2"
              >
                <GoArrowDownRight size={20} />
                {item.company}
              </p>
              <img
                src={item.image}
                alt={item.company}
                className="w-full object-cover"
                style={{ height: item.height }}
              />

              {/* Semi-transparent black overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                variants={overlayVariants}
                initial="initial"
                whileHover="hover"
              />

              {/* Content that appears on hover */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center text-white p-6"
                variants={contentVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.p
                  className="text-sm mb-4 text-gray-200"
                  variants={itemVariants}
                >
                  {item.description}
                </motion.p>

                <motion.div
                  className="flex flex-col gap-3 mt-2"
                  variants={itemVariants}
                >
                  {item.buttons.map((button, index) => (
                    <button
                      key={index}
                      className=" border text-white pl-7 pr-7 flex items-center justify-between px-4 py-3 rounded-3xl transition w-auto"
                    >
                      <span>{button.text}</span>
                      {button.icon}
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
