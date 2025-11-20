import { blogPosts } from "../../pages/blogData";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: string | null;
}

const API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE;

const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout = 5000
) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn("Fetch failed:", error);
    throw error;
  }
};

// Helper function to get featured image URL
const getFeaturedImageUrl = async (mediaId: number): Promise<string | null> => {
  if (!mediaId || !API_BASE) return null;
  try {
    const media = await fetchWithTimeout(`${API_BASE}/media/${mediaId}`);
    return media.source_url || null;
  } catch {
    return null;
  }
};

export const getPosts = async ({
  per_page = 10,
  page = 1,
  search = "",
}): Promise<WPPost[]> => {
  if (!API_BASE) {
    console.warn("NEXT_PUBLIC_WP_API_BASE is missing. Falling back to static data.");
    return blogPosts.map((post) => ({
      id: post.id,
      slug: post.slug || "fallback-slug",
      date: post.date,
      title: { rendered: post.title },
      excerpt: { rendered: post.content.introduction || "" },
      content: {
        rendered: post.content.sections
          .map((section) => section.content)
          .join("\n"),
      },
      featured_media: post.image || null,
    })) as WPPost[]; // Fallback
  }

  try {
    const url = `${API_BASE}/posts?per_page=${per_page}&page=${page}&search=${encodeURIComponent(
      search
    )}`;
    const posts = await fetchWithTimeout(url);

    // Fetch featured image URLs for each post
    const postsWithImages = await Promise.all(
      posts.map(async (post: any) => {
        const featuredImageUrl = await getFeaturedImageUrl(post.featured_media);
        return {
          ...post,
          featured_media: featuredImageUrl || post.featured_media,
        };
      })
    );

    return postsWithImages;
  } catch {
    return blogPosts.map((post) => ({
      id: post.id,
      slug: post.slug || "fallback-slug",
      date: post.date,
      title: { rendered: post.title },
      excerpt: { rendered: post.content.introduction || "" },
      content: {
        rendered: post.content.sections
          .map((section) => section.content)
          .join("\n"),
      },
      featured_media: post.image || null,
    })) as WPPost[]; // Fallback
  }
};

export const getPost = async (slug: string): Promise<WPPost> => {
  if (!API_BASE) {
    console.warn("NEXT_PUBLIC_WP_API_BASE is missing. Falling back to static data.");
    return (blogPosts.find((post) => post.slug === slug) || {
      id: 0,
      slug: "fallback-slug",
      date: "",
      title: { rendered: "Fallback Title" },
      excerpt: { rendered: "Fallback Excerpt" },
      content: { rendered: "Fallback Content" },
      featured_media: null,
    }) as WPPost; // Fallback
  }

  try {
    const url = `${API_BASE}/posts?slug=${slug}`;
    const posts = await fetchWithTimeout(url);
    const post = posts[0];

    // Fetch featured image URL
    const featuredImageUrl = await getFeaturedImageUrl(post.featured_media);

    return {
      ...post,
      featured_media: featuredImageUrl || post.featured_media,
    };
  } catch {
    return (blogPosts.find((post) => post.slug === slug) || {
      id: 0,
      slug: "fallback-slug",
      date: "",
      title: { rendered: "Fallback Title" },
      excerpt: { rendered: "Fallback Excerpt" },
      content: { rendered: "Fallback Content" },
      featured_media: null,
    }) as WPPost; // Fallback
  }
};
