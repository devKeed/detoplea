import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "../../pages/blogData";

const Blog: React.FC = () => {
  const recentPosts = [...blogPosts]
    .sort((a, b) => {
      const dateA = a.date.split('/').reverse().join('');
      const dateB = b.date.split('/').reverse().join('');
      return dateB.localeCompare(dateA);
    })
    .slice(0, 3);

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
          {recentPosts.map(post => (
            <BlogCard
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
            />
          ))}
        </div>
        
        {/* <div className="mt-8 text-center">
          <button 
            onClick={() => navigate("/blog")}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            View All Blog Posts
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
