"use client";

import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BlogPostCard } from "@/components/reusables/BlogPostCard";
import { usePosts } from "@/hooks/usePosts";

export default function Blog() {
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
  } = usePosts({
    per_page: postsPerPage,
    page: currentPage,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !posts) {
    return <div>Error loading posts.</div>;
  }

  const currentPosts = posts;

  const totalPages = Math.ceil(posts.length / postsPerPage);

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
        <div className="grid gap-5 grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {currentPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              slug={post.slug}
              image={post.featured_media || "/images/default-blog.png"}
              date={post.date}
              author="Admin"
              title={
                typeof post.title === "string"
                  ? post.title
                  : post.title.rendered
              }
              excerpt={
                post.excerpt.rendered
                  .replace(/<[^>]+>/g, "")
                  .substring(0, 100) + "..."
              }
            />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-4 pt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-black"
            }`}
          >
            <MdKeyboardArrowLeft size={30} />
            <span className="text-xs">Previous</span>
          </button>

          <span className="text-xs">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center ${
              currentPage === totalPages
                ? "text-gray-300 cursor-not-allowed"
                : "text-black"
            }`}
          >
            <span className="text-xs">Next</span>
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}