import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogPostCard } from "../../components/reusables/BlogPostCard";
import { blogPosts } from "../blogData";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<(typeof blogPosts)[0] | undefined>(
    undefined
  );
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);

  useEffect(() => {
    const currentPost = blogPosts.find((post) => post.id === Number(id));

    if (!currentPost) {
      navigate("/blog");
      return;
    }

    setPost(currentPost);

    if (currentPost) {
      const related = blogPosts
        .filter((p) => p.id !== currentPost.id)
        .sort((a, b) => {
          if (
            a.author === currentPost.author &&
            b.author !== currentPost.author
          ) {
            return -1;
          }
          if (
            a.author !== currentPost.author &&
            b.author === currentPost.author
          ) {
            return 1;
          }
          return 0;
        })
        .slice(0, 4);
      setRelatedPosts(related);
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="mt-20 container mx-auto py-10 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-8">
        <h2 className="text-2xl md:text-5xl font-bold md:text-center">
          {post.content.title}
        </h2>

        <div className="flex justify-between items-center w-full">
          <p className="text-gray-500">{post.date}</p>
          <p className="text-gray-500">- {post.author}</p>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-lg my-4 object-cover"
        />

        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>{post.content.introduction}</p>
        </section>

        {post.content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold">
              {section.heading}
            </h2>
            <p className="py-2">{section.content}</p>
            {section.list ? (
              <ul className="list-disc pl-6 space-y-1">
                {section.list.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
          </section>
        ))}

        <div className="flex justify-between items-center pt-10 border-t border-gray-200 text-sm">
          {prevPost ? (
            <button
              onClick={() => navigate(`/blog/${prevPost.id}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              ← Previous:{" "}
              {prevPost.title.length > 25
                ? prevPost.title.substring(0, 25) + "..."
                : prevPost.title}
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={() => navigate(`/blog`)}
            className="text-gray-600 hover:underline text-sm"
          >
            Back to Blog
          </button>

          {nextPost ? (
            <button
              onClick={() => navigate(`/blog/${nextPost.id}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-black text-sm"
            >
              Next:{" "}
              {nextPost.title.length > 25
                ? nextPost.title.substring(0, 25) + "..."
                : nextPost.title}{" "}
              →
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="py-5 mb-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard
                key={relatedPost.id}
                image={relatedPost.image}
                title={relatedPost.title}
                date={relatedPost.date}
                author={relatedPost.author}
                id={relatedPost.id}
                excerpt={
                  relatedPost.content.introduction.substring(0, 80) + "..."
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
