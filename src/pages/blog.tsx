import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BlogPostCard } from "../components/reusables/BlogPostCard";
import { blogPosts } from "./blogData";

export const Blog = () => {
  // Adding pagination for better organization
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="md:py-4 flex flex-col">
      <div className="py-10 mb-16 px-4 md:px-10">
        <div className="grid gap-5 grid-cols-1 mt-5 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {currentPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              image={post.image}
              date={post.date}
              author={post.author}
              title={post.title}
              excerpt={post.content.introduction.substring(0, 100) + '...'}
            />
          ))}
        </div>
        
        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-4 pt-10">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className={`flex items-center ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-black'}`}
          >
            <MdKeyboardArrowLeft size={30} />
            <span className="text-sm">Previous</span>
          </button>
          
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-black'}`}
          >
            <span className="text-sm">Next</span>
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
