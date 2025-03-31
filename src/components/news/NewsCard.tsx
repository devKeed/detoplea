import { Calendar, Clock } from "lucide-react";
import React from "react";

interface NewsCardProps {
  image: string;
  date: string;
  readTime: string;
  title: string;
  author: string;
  description: string;
  height?: number;
  compact?: boolean;
  mainNews?: boolean;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  readTime,
  title,
  author,
  description,
  mainNews,
  compact,
  link,
}) => {
  return (
    <div
      style={{ background: "#f4f4f4" }}
      className=" rounded-xl overflow-hidden"
    >
      <div className="overflow-hidden p-4 ">
        {mainNews ? (
          <img
            src={image}
            alt={title}
            // style={{ height: `${height}px` }}
            className="w-full object-cover h-64 md:h-full object-top rounded-lg"
          />
        ) : (
          <img
            src={image}
            alt={title}
            // style={{ height: `${height}px` }}
            className="w-full object-cover h-64 object-top rounded-lg"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-between h-full items-start space-y-6">
          <div className="flex items-center justify-start space-y-2 md:justify-between flex-wrap text-gray-500 text-xs space-x-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Calendar size={12} /> <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={12} /> <span>{readTime}</span>
              </div>
            </div>
            <span className="font-bold text-black">— {author}</span>
          </div>
          <div>
            <p className="text-lg font-semibold mt-2 text-left">{title}</p>
            {!compact && (
              <p className="text-gray-600 text-sm mt-1 text-left">
                {description}
              </p>
            )}
          </div>
        </div>
        <button className="mt-3 mr-auto border border-green-600 text-green-600 px-4 py-2 rounded-[40px] h-10 self-center">
          <a href={link}>Read</a>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
