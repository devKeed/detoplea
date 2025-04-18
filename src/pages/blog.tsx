import { MdKeyboardArrowRight } from "react-icons/md";
import image1 from "../../public/images/image 18a.png";
import image2 from "../../public/images/image 19aa.png";
import image3 from "../../public/images/image 20aa.png";
import image4 from "../../public/images/image 21aa.png";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "12/03/25",
      author: "Mariam",
      title: "Boosting IG Posts vs. Meta Ads: What’s Worth Your",
      image: image1,
    },
    {
      id: 2,
      date: "14/03/25",
      author: "Tunde",
      title: "Top 5 Meta Ad Mistakes to Avoid",
      image: image3,
    },
    {
      id: 3,
      date: "15/03/25",
      author: "Ada",
      title: "Instagram Algorithms Demystified",
      image: image4,
    },
    {
      id: 4,
      date: "17/03/25",
      author: "Chris",
      title: "Organic vs Paid Growth in 2025",
      image: image2,
    },
    {
      id: 5,
      date: "18/03/25",
      author: "Mariam",
      title: "How Meta Ads Are Changing in 2025",
      image: image3,
    },
    {
      id: 6,
      date: "19/03/25",
      author: "Chisom",
      title: "Boost Your First Post Like a Pro",
      image: image1,
    },
    {
      id: 7,
      date: "20/03/25",
      author: "Jude",
      title: "Reels vs. Stories: Best for ROI?",
      image: image2,
    },
    {
      id: 8,
      date: "22/03/25",
      author: "Mariam",
      title: "The Secret to Better Post Engagement",
      image: image4,
    },
    {
      id: 9,
      date: "23/03/25",
      author: "Lola",
      title: "Understanding Meta's Ad Budget Tips",
      image: image1,
    },
    {
      id: 10,
      date: "24/03/25",
      author: "James",
      title: "What Metrics Matter in Meta Campaigns",
      image: image4,
    },
    {
      id: 11,
      date: "25/03/25",
      author: "Mariam",
      title: "Instagram Ad Funnel Explained",
      image: image3,
    },
    {
      id: 12,
      date: "26/03/25",
      author: "Zara",
      title: "Boosting Without Wasting Budget",
      image: image2,
    },
  ];

  return (
    <div className="py-20 flex flex-col">
      <div className="py-10 mb-16 px-10">
        <div className="mt-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-[#F2F2F2] rounded-3xl items-center"
            >
              <img
                src={post.image}
                alt={`image-${post.id}`}
                className="w-full h-auto p-5 rounded-3xl"
              />
              <div className="flex justify-between items-center w-full px-4">
                <p>{post.date}</p>
                <p>-{post.author}</p>
              </div>
              <h5 className="text-center font-normal px-5 py-5">
                {post.title}
              </h5>
              <button
                onClick={() => (window.location.href = "/readmore")}
                className="bg-white border border-black px-10 py-2 mb-7 rounded-2xl hover:bg-gray-500 hover:text-white transition"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-end px-5 text-xl flex gap-1 ">
        Older Post <MdKeyboardArrowRight size={30} />
      </div>
    </div>
  );
};
