import { MdKeyboardArrowRight } from "react-icons/md";
import { blogPosts } from "./data";
import { BlogPostCard } from "../components/reusables/BlogPostCard";

export const Blog = () => {
  return (
    <div className="md:py-4 flex flex-col">
      <div className="py-10 mb-16 px-4 md:px-10">
        <div className="mt-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              image={post.image}
              date={post.date}
              author={post.author}
              title={post.title}
              onReadMore={() => (window.location.href = "/readmore")}
            />
          ))}
        </div>
      </div>
      <p className="justify-end px-5 flex gap-1 ">
        Older Post <MdKeyboardArrowRight size={30} />
      </p>
    </div>
  );
};
