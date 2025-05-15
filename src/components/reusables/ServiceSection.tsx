import image1 from "../../../public/images/imagefss.png";
import image2 from "../../../public/images/imageew.png";
import image3 from "../../../public/images/image 9.png";
import image4 from "../../../public/images/image 10.png";
import image6 from "../../../public/images/imaged.png";
import { ServiceCard } from "../home/ServiceCard";

const services = [
  {
    title: "Brand Identity Development",
    description:
      "Branding is more than just a logo it’s the heartbeat of your business. We help craft unique, compelling brand identities that resonate with your audience and set you apart from the competition.",
    image: image3,
    features: [
      "Brand Identity & Positioning",
      "Logo & Visual Aesthetic",
      "Tone of Voice & Messaging",
      "Market & Competitor Analysis",
      "Brand Guidelines",
      "Brand Strategy",
    ],
    breakdown:
      "A strong brand identity is crucial for business growth. We craft visual and strategic elements that make your brand memorable and impactful.",
  },
  {
    title: "Paid Ads",
    description:
      "We put your brand in front of the right audience, at the right time, with ads that actually convert.",
    image: image4,
    features: [
      "Facebook & Instagram Ads",
      "Tiktok Ads",
      "Snapchat Ads",
      "Google & Youtube Ads",
      "Rtargeting Campaigns",
      "Performance Tracking & Optimization",
    ],
    breakdown:
      "Running ads isn’t just about spending money—it’s about making money. We craft result-driven ad campaigns designed to maximize your return on investment. Fromhigh-converting creatives to laser-focused targeting to creating the best offer for your business, we handle every aspect of paid media, ensuring your budget works smarter, not harder. Our team continuously monitors performance, optimizes strategies, andstays ahead of algorithm changes to drive measurable results.",
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
      "Every brand is unique, which is why we craft custom social media strategies tailoredto your goals. We go beyond just posting—we focus on engagement, growth tactics, and storytelling that builds a loyal audience. Our team stays ahead of trends, algorithm updates, and platform shifts, so you don’t have to. With high-qualitycontent and smart social strategies, we help you build a thriving, engaged communitythat strengthens your brand’s digital presence.",
  },
  {
    title: "Email Marketing",
    description:
      "Stop relying on algorithms—start owning your audience with email marketingthat converts.",
    image: image2,
    features: [
      "Automated Funnels & Sequences",
      "Campaign Strategy & Execution",
      "Copywriting & Design",
      "Analytics & Performance Tracking",
      "Lead Magnets & Opt-Ins",
    ],
    breakdown:
      "Email marketing is one of the most effective ways to turn followers into customers and keep them coming back. We design and implement strategic email campaigns that nurture your audience, boost sales, and strengthen brand loyalty. Whether it’s a full automation setup, a weekly newsletter, or a targeted promotion, we create emails that get opened, read, and acted upon.",
  },
  {
    title: "Web Design & Development",
    description:
      "A great website isn’t just beautiful—it’s built to convert. We create stunning, user-friendly websites designed to elevate your brand and drive real results.",
    image: image1,
    features: [
      "Custom Website Design",
      "E-Commerce Development",
      "Landing Pages & Sales Funnels",
      "UX/UI Optimization",
      "Mobile Responsiveness & Speed Optimization",
      "Search Engine Optimization",
    ],
    breakdown:
      "Your website is often the first impression people have of your brand—make it count. We build custom, high-performing websites that not only look great but also functionseamlessly. Every site is designed with user experience in mind, ensuring easynavigation, fast load times, and a mobile-friendly layout. Whether you need a sleekportfolio, a conversion-focused sales page, or a full-scale e-commerce store, we bringyour vision to life with strategy and creativity",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white py-12 px-4 mb-10">
      <div style={{ maxWidth: "1500px" }} className=" mx-auto space-y-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
