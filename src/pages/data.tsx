import { FiArrowUpRight } from "react-icons/fi";

export const reviews: {
  name: string;
  title: string;
  text: string;
  rating: number;
  boxColor: BoxColor;
}[] = [
  {
    name: "Sophia T.",
    title: "The Best Team for Digital Marketing!",
    text: "I absolutely love working with Detoplea Marketing Agency! They’ve helped me with social media management and paid ads, and the results have been phenomenal. Not only do they provide top-tier services, but they also take the time to explain their strategy, ensuring I understand the impact of each campaign. Their passion and expertise shine through in everything they do. Highly recommend them to anyone looking to grow their business online!",
    rating: 5,
    boxColor: "orange-400",
  },
  {
    name: "Ma.R",
    title: "Expert Marketing Team That Delivers Results!",
    text: "Detoplea Marketing Agency exceeded all my expectations! From designing a beautiful, high-converting website to managing my paid ad campaigns, their expertise has helped my business thrive. Their team is knowledgeable, proactive, and always willing to go the extra mile. Thanks to their strategic approach to digital marketing, I’ve seen a significant increase in leads and engagement. If you’re serious about growing your business, Detoplea is the agency to trust!",
    rating: 5,
    boxColor: "teal-400",
  },
  {
    name: "John D.",
    title: "Fantastic Work & Great Communication!",
    text: "Detoplea Marketing Agency completely transformed my brand. Their brand development strategy gave my business a fresh, professional identity that truly resonates with my audience. From logo design to messaging, they took care of everything with exceptional attention to detail. My brand now stands out, and I’ve seen a huge boost in engagement. If you need a branding expert, Detoplea is the team to call!",
    rating: 4,
    boxColor: "yellow-400",
  },
];

export type BoxColor = "orange-400" | "teal-400" | "yellow-400";

export const colorClassMap: Record<BoxColor, { border: string; text: string }> = {
  "orange-400": {
    border: "border-l-orange-400",
    text: "text-orange-400",
  },
  "teal-400": {
    border: "border-l-teal-400",
    text: "text-teal-400",
  },
  "yellow-400": {
    border: "border-l-yellow-400",
    text: "text-yellow-400",
  },
};

export const portfolioItems = [
  {
    id: 1,
    company: "GREYSLTD",
    image: "/images/image77.png",
    height: "500px",
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
    height: "500px",
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
    height: "800px",
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
    height: "600px",
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
    height: "600px",
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
    height: "600px",
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
    height: "500px",
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
    height: "500px",
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
    height: "800px",
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

export const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Our pricing varies based on your specific needs and goals. We offer customized packages starting at $2,500 per month for our standard services. For enterprise solutions or comprehensive campaigns, we'll provide a detailed quote after understanding your requirements during our discovery call.",
  },
  {
    question: "What's The First Step?",
    answer:
      "The first step is to book a discovery call with our team. During this 30-minute session, we'll discuss your business goals, current marketing efforts, and how we might be able to help. This allows us to understand if we're a good fit for each other before proceeding with a detailed proposal.",
  },
  {
    question: "What Do I Need To Give You To Get Started?",
    answer:
      "To get started efficiently, we'll need access to your current marketing assets (social media accounts, website admin, analytics), brand guidelines if available, and information about your target audience. We'll provide a detailed onboarding checklist after our initial agreement to ensure a smooth transition.",
  },
  {
    question: "Is There A Contract Minimum?",
    answer:
      "Yes, we typically work with clients on a minimum 3-month initial contract. This allows enough time to implement our strategy and start seeing meaningful results. After the initial period, we offer month-to-month options with a 30-day notice period.",
  },
  {
    question: "Is My Business A Good Fit?",
    answer:
      "We work best with established businesses that have clear goals and are ready to invest in their growth. Our sweet spot is B2C brands in health, wellness, lifestyle, and e-commerce with annual revenues between $500K and $10M. However, we evaluate each potential client individually, so we encourage you to book a discovery call to discuss your specific situation.",
  },
];