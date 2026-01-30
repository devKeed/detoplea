import BlogPostClient from "./BlogPostClient";

// Only lock to generated params when building static export; allow dynamic in dev/server
export const dynamicParams = process.env.NEXT_OUTPUT === "export" ? false : true;

export async function generateStaticParams() {
  try {
    const API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE || "https://blog.detopleamarketing.com/wp-json/wp/v2";
    const all: any[] = [];
    let page = 1;

    while (true) {
      const url = `${API_BASE}/posts?status=publish&per_page=100&page=${page}`;
      const res = await fetch(url, { next: { revalidate: 0 } });

      if (!res.ok) {
        console.error(`Failed to fetch page ${page}: ${res.status}`);
        break;
      }

      const batch = await res.json();
      if (!Array.isArray(batch) || batch.length === 0) break;

      all.push(...batch);

      if (batch.length < 100) break;
      page += 1;
    }

    const params = all
      .filter((p) => !!p?.slug)
      .map((post: any) => ({ slug: post.slug }));
    
    console.log(`✅ Generated ${params.length} static params for blog posts:`);
    console.log(params.map(p => p.slug)); // Log the actual slugs
    
    return params;
  } catch (error) {
    console.error("❌ Error fetching posts for static generation:", error);
    return [];
  }
}

export default function BlogPost() {
  return <BlogPostClient />;
}