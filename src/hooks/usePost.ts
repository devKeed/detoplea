import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/wp";
import { blogPosts } from "../pages/blogData"; // DEPRECATED – using static JSON fallback

export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      try {
        const post = await getPost(slug);
        return { ...post, source: "api" };
      } catch {
        const fallbackPost = blogPosts.find((post) => post.slug === slug);
        if (!fallbackPost) {
          throw new Error("Post not found in fallback data");
        }
        return {
          id: fallbackPost.id,
          slug: fallbackPost.slug || "fallback-slug",
          date: fallbackPost.date,
          title: { rendered: fallbackPost.title },
          excerpt: { rendered: fallbackPost.content.introduction || "" },
          content: {
            rendered: fallbackPost.content.sections
              .map((section) => section.content)
              .join("\n"),
          },
          featured_media: fallbackPost.image || null,
          source: "fallback",
        };
      }
    },
  });
};
