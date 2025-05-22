
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

export const colorClassMap: Record<BoxColor, { border: string; text: string }> =
  {
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

export const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "We offer a range of packages designed to fit your brand’s unique needs. Lookingfor something more customized? We’re happy to tailor a solution just for you! Click the button below to fill out the form, and we’ll send over detailed pricingandpackage options.",
  },
  {
    question: "What's The First Step?",
    answer: [
      "Once the initial paperwork is complete, the next step is filling out our detailed brand and business questionnaire. This helps us dive deep into your brand, goals, and vision. Next, we’ll hop on a kickoff call to align on strategy, set expectations, and ensure we’re all on the same page. From there, our team gets to work—crafting and executing a strategy designed to drive real results.",
      "Our Process: How We Work Together",
      "1. Drafting Your Content: Within 2–4 weeks, we’ll create the first draft of your content—whether it’s social media posts, ad creatives, or email campaigns—along with a strategic layout.",
      "2. Feedback & Revisions: You’ll review the draft and provide feedback. We offer up to two rounds of revisions to ensure everything aligns with your brand’s vision and messaging.",
      "3. Finalization Once visuals and copy are approved, we’ll finalize your content calendar. We start with a Bi-weekly content planning approach to stay agile, adapting to platformupdates, business events, and trends in real time.",
      "4. Execution & Management With everything in place, we’ll begin posting, launching ads, or sending campaigns onyour behalf. Throughout the month, we stay engaged, making necessary adjustments and optimizing for the best performance.",
      "5. Ongoing Communication Clear, proactive communication is key to success. You’ll have direct access toour team via your private Slack channel, where we’ll provide performance updates, brainstorm ideas, and collaborate in real time—keeping your strategy alignedandmoving forward.",
    ],
  },
  {
    question: "What Do I Need To Give You To Get Started?",
    answer:
      "The more branding assets and direction you provide, the more opportunities we haveto craft standout content that truly represents your brand. We encourage you to shareyour branding guidelines, logos, images, videos, and any UGC content to helpus bring your vision to life. Don’t have all your visuals ready? No problem! We can create them for you. Just keepin mind that the less guidance you provide, the more creative freedomwe’ll take—which may impact revision timelines if the final result differs fromyour initial vision.",
  },
  {
    question: "Is There A Contract Minimum?",
    answer:
      "We don’t believe in long-term contracts that trap you—we believe in partnerships that deliver. Our initial commitment is 4 months, giving us enough time to ramp up, test strategies, and optimize for the best results. After that, we go month-to-month withfull flexibility. Want to commit to long-term growth? We offer exclusive discounts for 6- and12-month contracts as a thank-you to our clients who trust the process and invest insustainable success.",
  },
  {
    question: "Is My Business A Good Fit?",
    answer:
      "We’re Not Here to Play It Safe—We’re Here to Get You Results. Our clients understand that real growth requires stepping outside their comfort zone. If you'reready to build a long-term partnership with us, here’s what we look for in the brands we work with: You’re ready to collaborate. Whether it’s you or someone on your team, we need a dedicated point of contact towork with us for the best results. You can provide quality content—or invest in our content creation. Strong visuals and messaging are key to success. If you’re unable to provideconsistent content, we can handle it for you. You understand that digital marketing isn’t your entire business. Social media, ads, and email marketing are powerful tools, but they work best whencombined with a solid business foundation. You trust the process. Results don’t happen overnight. The brands that see the best outcomes are the ones that commit to the strategy and allow time for real, sustainable growth. Our best clients are those who are excited to collaborate, willing to invest in the right areas, and understand that digital marketing is just one piece of their overall success. Ready to grow?",
  },
];
