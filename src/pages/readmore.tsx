import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostCard } from "../components/reusables/BlogPostCard";
import { blogPosts } from "./blogData";

const Readmore = () => {
  const navigate = useNavigate();
  const [featuredPost, setFeaturedPost] = useState(blogPosts[0]);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  
  useEffect(() => {
    // Find the most recent post as featured post (or you could set a specific one)
    const sortedPosts = [...blogPosts].sort((a, b) => {
      // Assuming date format is DD/MM/YY - convert to comparable format
      const dateA = a.date.split('/').reverse().join('');
      const dateB = b.date.split('/').reverse().join('');
      return dateB.localeCompare(dateA);
    });
    
    setFeaturedPost(sortedPosts[0]);
    
    // Get related posts excluding the featured one
    setRelatedPosts(
      sortedPosts
        .filter(post => post.id !== sortedPosts[0].id)
        .slice(0, 4)
    );
  }, []);

  return (
    <div className="mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h1>
          <p className="text-gray-600">Explore our latest insights and strategies</p>
        </div>
        
        {/* Featured Post */}
        <div className="bg-[#F2F2F2] rounded-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-4">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-500">{featuredPost.date}</p>
                  <p className="text-gray-500">- {featuredPost.author}</p>
                </div>
                <h2 className="text-2xl font-semibold mb-4">{featuredPost.content.title}</h2>
                <p className="text-gray-700 mb-6">
                  {featuredPost.content.introduction}
                </p>
                <div className="space-y-4 mb-6">
                  {featuredPost.content.sections.slice(0, 2).map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{section.heading}</h3>
                      <p className="text-gray-600">{section.content.substring(0, 100)}...</p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => navigate(`/blog/${featuredPost.id}`)}
                className="bg-white border border-black px-6 py-3 rounded-xl hover:bg-gray-500 hover:text-white transition w-full md:w-auto text-center"
              >
                Continue Reading
              </button>
            </div>
          </div>
        </div>

        <div className="py-5 mb-16">
          <h3 className="text-2xl font-semibold mb-6">More Articles You May Like</h3>
          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                image={post.image}
                title={post.title}
                date={post.date}
                author={post.author}
                id={post.id}
                excerpt={post.content.introduction.substring(0, 80) + '...'}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-black transition"
            >
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
