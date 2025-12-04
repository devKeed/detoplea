import BlogPostClient from "./BlogPostClient";


export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://blog.detopleamarketing.com/wp-json/wp/v2/posts?per_page=100"
    );
    const posts = await response.json();

    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching posts for static generation:", error);
    return [];
  }
}

export default function BlogPost() {
  return <BlogPostClient />;
}
