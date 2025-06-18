import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PortfolioCard } from "../../components/portfolio/PortfolioCard";
import { fadeInUpVariants } from "../../utils/animations";
import { portfolioItems } from "../../components/portfolio/PortfoiloData";
import SEO from "../../components/SEO";

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);

  const isPortfolioInView = useInView(portfolioRef, {
    once: true,
    amount: 0.1,
  });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.6 });

  return (
    <>
      <SEO
        title="Our Portfolio - Successful Digital Marketing Case Studies"
        description="Explore Detoplea Marketing's portfolio of successful digital marketing campaigns. See real results from our SEO, social media, web design, and brand development projects for businesses across various industries."
        keywords="digital marketing portfolio, marketing case studies, SEO results, social media campaigns, web design portfolio, brand development examples, marketing success stories"
        url="https://detoplea.com/portfolio"
        type="website"
      />
      <section className="w-full py-16 px-4 md:px-16 mb-20">
        <motion.div
          ref={headerRef}
          className="text-center mb-16 mt-16"
          initial={{ opacity: 0, y: -30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-bold uppercase text-4xl md:text-6xl">
            Our{" "}
            <span className="text-[#F2720D] text-4xl md:text-6xl">
              Portfolio
            </span>
          </p>
          <p className="mt-2">
            Because you're after results, and we know how to get them.
          </p>
        </motion.div>

        <motion.div
          ref={portfolioRef}
          className="columns-1 sm:columns-2 md:columns-3 gap-6"
          initial="hidden"
          animate={isPortfolioInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15 }}
        >
          {portfolioItems.map((item: any) => (
            <motion.div
              key={item.id}
              className="mb-6 break-inside-avoid"
              variants={fadeInUpVariants}
            >
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Portfolio;
