"use client";

import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BlogPostCard } from "@/components/reusables/BlogPostCard";

export default function BlogClient({ posts }: { posts: any[] }) {
  const postsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const start = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(start, start + postsPerPage);

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
                  .slice(0, 100) + "..."
              }
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 pt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center"
          >
            <MdKeyboardArrowLeft size={30} />
            <span className="text-xs">Previous</span>
          </button>

          <span className="text-xs">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center"
          >
            <span className="text-xs">Next</span>
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
