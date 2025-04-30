import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogPostCard } from "../../components/reusables/BlogPostCard";
import { blogPosts } from "../blogData";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === Number(id));
    setPost(currentPost);

    // Get related posts (excluding current post)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.id !== currentPost.id)
        .slice(0, 4);
      setRelatedPosts(related);
    }
  }, [id]);

  if (!post) {
    return <div className="mt-20 text-center">Post not found</div>;
  }

  return (
    <div className="mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-8">
        <h2 className="text-2xl md:text-5xl font-bold md:text-center ">
          {post.content.title}
        </h2>

        <div className="flex justify-between items-center w-full">
          <p className="text-gray-500">{post.date}</p>
          <p className="text-gray-500">- {post.author}</p>
        </div>

        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-auto rounded-lg my-4"
        />

        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>{post.content.introduction}</p>
        </section>

        {post.content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold">{index + 1}. {section.heading}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>

      <div className="py-5 mb-16 px-4 md:px-10">
        <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id}>
              <BlogPostCard
                image={relatedPost.image}
                title={relatedPost.title}
                date={relatedPost.date}
                author={relatedPost.author}
                onReadMore={() => (window.location.href = `/blog/${relatedPost.id}`)}
                id={relatedPost.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
