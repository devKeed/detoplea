import image1 from "../../../public/images/imagefss.png";
import image2 from "../../../public/images/imageew.png";
import image3 from "../../../public/images/image 9.png";
import image4 from "../../../public/images/image 10.png";
import image6 from "../../../public/images/imaged.png";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Brand Identity Development",
    description:
      "We help businesses establish a strong brand presence with stunning visuals and strategic positioning.",
    image: image3,
    features: ["Logo & Visual Identity", "Brand Guidelines", "Market Research"],
    breakdown:
      "A strong brand identity is crucial for business growth. We craft visual and strategic elements that make your brand memorable and impactful.",
  },
  {
    title: "Paid Ads",
    description:
      "Maximize your reach and ROI with targeted advertising across digital platforms.",
    image: image4,
    features: [
      "Google Ads",
      "Facebook & Instagram Ads",
      "Conversion Optimization",
    ],
    breakdown:
      "We specialize in running data-driven ad campaigns that ensure maximum engagement and conversions, making every ad dollar count.",
  },
  {
    title: "Social Media Management",
    description:
      "We help brands cut through the noise and make a lasting impression that keeps people coming back for more.",
    image: image6,
    features: [
      "Instagram, TikTok, Facebook",
      "LinkedIn, Pinterest",
      "Stories & Feed Posts",
      "Influencer Collaborations",
      "Community Engagement",
      "Content Creation",
      "Paid Social Ads",
    ],
    breakdown:
      "Every brand is unique, which is why we craft custom social media strategies tailored to your goals. Our team stays ahead of trends and algorithms, helping you build a thriving online community.",
  },
  {
    title: "Email Marketing",
    description:
      "Boost customer engagement with personalized email campaigns and automation.",
    image: image2,
    features: ["Newsletter Design", "Automated Campaigns", "A/B Testing"],
    breakdown:
      "We create highly engaging email campaigns that nurture leads, retain customers, and drive conversions through personalized messaging.",
  },
  {
    title: "Web Design & Development",
    description:
      "Create stunning, high-performance websites that drive results and enhance user experience.",
    image: image1,
    features: [
      "Responsive Design",
      "E-Commerce Integration",
      "SEO Optimization",
    ],
    breakdown:
      "We build fast, secure, and visually appealing websites that ensure an exceptional user experience, helping businesses thrive in the digital space.",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-12 px-4 mb-10">
      <div style={{maxWidth:"1500px"}} className=" mx-auto space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
