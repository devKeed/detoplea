"use client";

import { useParams, useRouter } from "next/navigation";
import { BlogPostCard } from "@/components/reusables/BlogPostCard";
import { usePost } from "@/hooks/usePost";
import { usePosts } from "@/hooks/usePosts";
import BlogContent from "@/components/reusables/BlogContent";
import Image from "next/image";



export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "";
  const { data: post, isLoading, isError } = usePost(slug);
  const { data: allPosts } = usePosts({ per_page: 50 });

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
          onClick={() => router.push("/blog")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const relatedPosts =
    allPosts?.filter((p) => p.id !== post.id).slice(0, 4) || [];

  const postTitle =
    typeof post.title === "string" ? post.title : post.title.rendered;


  return (
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

        {post.featured_media && (
          <div className="relative w-full h-96">
            <Image
              src={post.featured_media}
              alt={postTitle}
              className="w-full h-full object-cover rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <BlogContent content={post.content.rendered} />

        <div className="flex justify-between items-center pt-10 border-t border-gray-200 text-sm">
          <div className="flex-1"></div>

          <button
            onClick={() => router.push(`/blog`)}
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
                slug={relatedPost.slug}
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
  );
}