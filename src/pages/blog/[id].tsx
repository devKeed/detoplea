import { useParams, useNavigate } from "react-router-dom";
import { BlogPostCard } from "../../components/reusables/BlogPostCard";
import { usePost } from "../../hooks/usePost";
import { usePosts } from "../../hooks/usePosts";
import SEO from "../../components/SEO";
import BlogContent from "../../components/reusables/BlogContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, isError } = usePost(slug || "");
  const { data: allPosts } = usePosts({ per_page: 50 }); // Get more posts for related posts

  if (isLoading) {
    return (
      <div className="mt-20 container mx-auto py-10 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="mt-20 container mx-auto py-10 px-4 text-center">
        <div>Post not found</div>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts =
    allPosts?.filter((p) => p.id !== post.id).slice(0, 4) || [];

  const postTitle =
    typeof post.title === "string" ? post.title : post.title.rendered;
  const postExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "");

  return (
    <>
      <SEO
        title={`${postTitle} - Digital Marketing Insights`}
        description={postExcerpt}
        keywords={`${postTitle.toLowerCase()}, digital marketing, business growth, marketing tips, SEO, social media marketing`}
        url={`https://detoplea.com/blog/${post.id}`}
        type="article"
        image={post.featured_media || "/images/default-blog.png"}
      />
      <div className="mt-20">
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-8">
          <h2 className="text-2xl md:text-5xl font-bold md:text-center">
            {postTitle}
          </h2>

          <div className="flex justify-between items-center w-full">
            <p className="text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-500">- Admin</p>
          </div>

          <img
            src={post.featured_media || "/images/default-blog.png"}
            alt={postTitle}
            className="w-full h-auto rounded-lg my-4 object-cover"
          />

          <BlogContent content={post.content.rendered} />

          <div className="flex justify-between items-center pt-10 border-t border-gray-200 text-sm">
            <div className="flex-1"></div>

            <button
              onClick={() => navigate(`/blog`)}
              className="text-gray-600 hover:underline text-sm"
            >
              Back to Blog
            </button>

            <div className="flex-1"></div>
          </div>
        </div>

        <div className="py-5 mb-16 px-4 md:px-10 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
            <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  slug={relatedPost.slug} // Add slug prop
                  image={
                    relatedPost.featured_media || "/images/default-blog.png"
                  }
                  date={relatedPost.date}
                  author="Admin"
                  title={
                    typeof relatedPost.title === "string"
                      ? relatedPost.title
                      : relatedPost.title.rendered
                  }
                  excerpt={
                    relatedPost.excerpt.rendered
                      .replace(/<[^>]+>/g, "")
                      .substring(0, 100) + "..."
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
