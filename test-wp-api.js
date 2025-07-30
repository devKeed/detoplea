// Test WordPress API connection
const API_BASE = "https://blog.detopleamarketing.com/wp-json/wp/v2";

async function testWordPressAPI() {
  console.log("Testing WordPress API connection...");

  try {
    // Test basic API endpoint
    const response = await fetch(`${API_BASE}/posts?per_page=1`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("✅ API Connection Successful!");
    console.log(`Found ${posts.length} posts`);

    if (posts.length > 0) {
      console.log("Sample post:", {
        id: posts[0].id,
        title: posts[0].title.rendered,
        date: posts[0].date,
        slug: posts[0].slug,
      });
    }
  } catch (error) {
    console.log("❌ API Connection Failed:", error.message);
    console.log("This is expected until WordPress is fully set up.");
  }
}

testWordPressAPI();
