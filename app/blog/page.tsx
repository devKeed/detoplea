import BlogClient from "./BlogClient";

async function getPosts() {
  const res = await fetch(
    "https://blog.detopleamarketing.com/wp-json/wp/v2/posts?per_page=100"
  );
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogClient posts={posts} />;
}
