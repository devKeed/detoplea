import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    image: "https://img.youtube.com/vi/NlYWYOhg2lY/hqdefault.jpg",
    date: "Feb 28",
    readTime: "5 Mins Read",
    title: "Dambe: Africa’s Ancient Fight Sport Under the Spotlight",
    author: "BBC News Africa",
    description:
      "A deep dive into the cultural and modern evolution of Dambe, highlighting its significance in Africa’s traditional sports landscape. \n\n Dambe is an ancient Hausa martial art, practiced in northern Nigeria for centuries. It's popularity is growing and online videos of the fights have gathered millions of views worldwide.",
    link: "https://www.youtube.com/watch?v=NlYWYOhg2lY",
  },
  {
    image: "https://img.youtube.com/vi/rw5u0hF_f28/hqdefault.jpg",
    date: "Mar 01",
    readTime: "5 Mins Read",
    title: "Dambe: Tradition Meets Modernity on the African Stage",
    author: "Africa 24",
    description:
      "An exploration of Dambe’s rich heritage and its growing global appeal, as featured by Africa 24.",
    link: "https://www.youtube.com/watch?v=rw5u0hF_f28",
  },
  {
    image: "https://img.youtube.com/vi/rw5u0hF_f28/hqdefault.jpg",
    date: "Mar 01",
    readTime: "5 Mins Read",
    title: "Dambe: Bridging Ancient Rituals and Contemporary Combat",
    author: "Arise News",
    description:
      "A look at how Dambe, the ancient Nigerian martial art, is making waves in modern combat sports.",
    link: "https://www.youtube.com/watch?v=rw5u0hF_f28",
  },
];

const NewsTopLayout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <NewsCard {...newsData[0]} height={590} mainNews />
        </div>

        <div className="flex flex-col md:border-l-2 md:border-black md:pl-6">
          <NewsCard {...newsData[1]} height={180} />
          <div className="border-t border-gray-300 my-3 md:my-11"></div>

          <NewsCard {...newsData[2]} height={180} />
        </div>
      </div>
    </div>
  );
};

export default NewsTopLayout;
