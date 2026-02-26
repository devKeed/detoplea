import Image from "next/image";
import BlogContent from "@/components/reusables/BlogContent";
import { BlogPostCard } from "@/components/reusables/BlogPostCard";

interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ Generate static params at build time
export async function generateStaticParams() {
  try {
    const res = await fetch("https://detopleamarketing.com/wp-blog/wp-json/wp/v2/posts?per_page=50");
    
    if (!res.ok) {
      console.warn('WordPress API returned error:', res.status);
      return [{ slug: 'coming-soon' }];
    }
    
    const contentType = res.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      console.warn('WordPress API returned non-JSON response');
      return [{ slug: 'coming-soon' }];
    }
    
    const posts = await res.json();
    
    if (!posts || posts.length === 0) {
      return [{ slug: 'coming-soon' }];
    }
    
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('Failed to fetch blog posts for static generation:', error);
    return [{ slug: 'coming-soon' }];
  }
}

// ✅ Fetch post data at build time
async function getPost(slug: string) {
  if (slug === 'coming-soon') {
    return null;
  }
  
  try {
    const res = await fetch(
      `https://detopleamarketing.com/wp-blog/wp-json/wp/v2/posts?slug=${slug}`
      // No cache option needed
    );
    
    if (!res.ok) return null;
    
    const posts = await res.json();
    return posts[0];
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

async function getAllPosts() {
  try {
    const res = await fetch(
      "https://detopleamarketing.com/wp-blog/wp-json/wp/v2/posts?per_page=50"
    );
    
    if (!res.ok) return [];
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch all posts:', error);
    return [];
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);
  const allPosts = await getAllPosts();

  if (!post) {
    return (
      <div className="mt-20 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-600 mb-6">
          {params.slug === 'coming-soon' 
            ? "Our blog is coming soon! Check back later for great content."
            : "This blog post could not be found."}
        </p>
        <a href="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </a>
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter((p: any) => p.id !== post.id)
    .slice(0, 4);

  const postTitle =
    typeof post.title === "string"
      ? post.title
      : post.title.rendered;

  return (
    <div className="mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-2xl md:text-5xl font-bold md:text-center">
          {postTitle}
        </h1>

        <div className="flex justify-between text-gray-500">
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <p>- Admin</p>
        </div>

        {post.featured_media && (
          <div className="relative w-full h-96">
            <Image
              src={post.featured_media}
              alt={postTitle}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <BlogContent content={post.content.rendered} />

        <div className="pt-10 border-t text-center">
          <a href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </a>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-6">
              Related Articles
            </h3>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPosts.map((related: any) => (
                <BlogPostCard
                  key={related.id}
                  id={related.id}
                  slug={related.slug}
                  image={related.featured_media}
                  date={related.date}
                  author="Admin"
                  title={
                    typeof related.title === "string"
                      ? related.title
                      : related.title.rendered
                  }
                  excerpt={related.excerpt.rendered
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 100) + "..."}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}