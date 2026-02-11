import BlogClient from "./BlogClient";

async function getPosts() {
  try {
    const res = await fetch(
      "https://blog.detopleamarketing.com/wp-json/wp/v2/posts?per_page=100",
      { cache: 'no-store' } // Prevent caching during build
    );
    
    if (!res.ok) {
      console.warn('WordPress API returned error:', res.status);
      return [];
    }
    
    const contentType = res.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      console.warn('WordPress API returned non-JSON response');
      return [];
    }
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="mt-20 text-center py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Blog Coming Soon</h1>
        <p className="text-gray-600">We are working on bringing you great content!</p>
      </div>
    );
  }

  return <BlogClient posts={posts} />;
}