import image1 from "../../public/images/image 18a.png";
import image2 from "../../public/images/image 19aa.png";
import image3 from "../../public/images/image 20aa.png";
import image4 from "../../public/images/image 21aa.png";
import { BlogPostCard } from "../components/reusables/BlogPostCard";

const Readmore = () => {
  const blogPosts = [
    {
      id: 1,
      date: "12/03/25",
      author: "Mariam",
      title: "Boosting IG Posts vs. Meta Ads: What’s Worth Your",
      image: image1,
      readMoreLink: "/readmore/1",
    },
    {
      id: 2,
      date: "14/03/25",
      author: "Tunde",
      title: "Top 5 Meta Ad Mistakes to Avoid",
      image: image3,
      readMoreLink: "/readmore/1",
    },
    {
      id: 3,
      date: "15/03/25",
      author: "Ada",
      title: "Instagram Algorithms Demystified",
      image: image4,
      readMoreLink: "/readmore/1",
    },
    {
      id: 4,
      date: "15/03/25",
      author: "Ada",
      title: "Instagram Algorithms Demystified",
      image: image2,
      readMoreLink: "/readmore/1",
    },
  ];

  return (
    <div className="mt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-8">
        <h2 className="text-2xl md:text-5xl font-bold md:text-center ">
          How to Reach the Necessary Audience When Running Ads
        </h2>

        <section>
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p>
            Advertising is powerful for local businesses, but its effectiveness
            depends on reaching the right audience. Whether using display
            banners or platforms like social media or search engines, your
            campaigns are successful when your ads are relevant. This guide
            breaks down effective strategies to ensure your ads reach the most
            suitable audience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            1. Understanding Your Target Audience
          </h2>
          <p>
            Before launching your ads, define your target audience. Consider the
            following aspects:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <p>Demographics (age, gender, income level, education)</p>
            </li>
            <li>
              <p>Geographic location (city, state, neighborhood)</p>
            </li>
            <li>
              <p>Interests, hobbies, and online behavior</p>
            </li>
            <li>
              <p>Purchasing behavior and needs</p>
            </li>
          </ul>
          <p className="mt-2">
            Using tools like Google Analytics, Facebook Audience Insights, or
            customer surveys can help identify and refine your audience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            2. Choosing the Right Advertising Platform
          </h2>
          <p>
            Once you've defined your audience, choose the best platform to reach
            them. Here are popular choices and their main benefits:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Social Media Ads:</strong> Facebook, Instagram, LinkedIn
              offer powerful tools for targeting users based on their behavior,
              interests, and demographics.
            </li>
            <li>
              <strong>Google Ads (Search & Display):</strong> Ideal for users
              actively searching for related products or services.
            </li>
            <li>
              <strong>YouTube Ads:</strong> Great for engaging video content and
              brand storytelling.
            </li>
          </ul>
          <p className="mt-2">
            Test different platforms and ad formats to determine which gives you
            the most engagement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            3. Implementing Advanced Targeting Strategies
          </h2>
          <p>
            To narrow your reach even further, use these targeting techniques:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Retargeting:</strong> Re-engage visitors who have seen or
              interacted with your website, emails, or brand.
            </li>
            <li>
              <strong>Lookalike Audiences:</strong> Reach new potential
              customers who share similar behaviors with existing customers.
            </li>
            <li>
              <strong>Behavioral Targeting:</strong> Use insights from user
              behavior like searches, video views, page visits, and more.
            </li>
          </ul>
          <p className="mt-2">
            Platforms like Facebook and Google offer built-in solutions for
            retargeting, lookalike targeting, and interest-based segmentation.
          </p>
        </section>
      </div>

      <div className="py-5 mb-16 px-4 md:px-10">
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div>
              <BlogPostCard
                image={post.image}
                title={post.title}
                date={post.date}
                author={post.author}
                onReadMore={() => (window.location.href = post.readMoreLink)}
                key={post.id}
                id={post.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readmore;
