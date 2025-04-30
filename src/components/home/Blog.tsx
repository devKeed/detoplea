import React from "react";
import image1 from "/images/image 1a.png";
import image2 from "/images/image 2.png";
import image3 from "/images/image 3.png";
import BlogCard from "./BlogCard";

const Blog: React.FC = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="bg-[#F5F5F5] rounded-xl md:rounded-3xl p-8 max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h3 className="font-bold uppercase mb-2 mt-5">
            CHECKOUT THE BLOG
          </h3>
          <p className="mb-8 w-full md:w-1/2 text-center">
            From the latest marketing news, to platform updates, to small
            business advice, our experts have compiled it all for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          <BlogCard
            image={image1}
            title="5 ways to increase your ROI in 2025"
          />
          <BlogCard
            image={image2}
            title="10 ways to increase your Social media revenue in 2025"
          />
          <BlogCard
            image={image3}
            title="10 ways to connect with clients via Social media in 2025"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
