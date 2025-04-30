import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostCard } from "../components/reusables/BlogPostCard";
import { blogPosts } from "./blogData";

const Readmore = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the first blog post after a short delay
    // This is just for demonstration - in production you might handle this differently
    const timer = setTimeout(() => {
      navigate("/blog/1");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Redirecting to Dynamic Blog Post...</h2>
          <p className="mt-4">This is a legacy page. You'll be redirected to our new dynamic blog system shortly.</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>
            Advertising is powerful for local businesses, but its effectiveness
            depends on reaching the right audience. Whether using display
            banners or platforms like social media or search engines, your
            campaigns are successful when your ads are relevant. This guide
            breaks down effective strategies to ensure your ads reach the most
            suitable audience.
          </p>
        </section>
      </div>

      <div className="py-5 mb-16 px-4 md:px-10">
        <h3 className="text-2xl font-semibold mb-6">Featured Articles</h3>
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <div key={post.id}>
              <BlogPostCard
                image={post.image}
                title={post.title}
                date={post.date}
                author={post.author}
                onReadMore={() => (window.location.href = `/blog/${post.id}`)}
                key={post.id}
                id={post.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readmore;
