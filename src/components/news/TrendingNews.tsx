import React, { useState } from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    image: "https://img.youtube.com/vi/35NzG0k9PdU/hqdefault.jpg",
    date: "Feb 25",
    readTime: "5 Mins Read",
    title: "Inside the World of Dambe: Tradition, Technique, and Turbulence",
    author: "Vice News",
    description:
      "Vice News delves into the gritty world of Dambe, examining its cultural roots and the challenges it faces today.",
    link: "https://www.youtube.com/watch?v=35NzG0k9PdU&t=101s"
  },
  {
    image: "https://cdn.vanguardngr.com/wp-content/uploads/2024/01/King-of-Dambe.jpg",
    date: "Jan 08, 2024",
    readTime: "5 Mins Read",
    title: "African Warriors Championship: King of Dambe to Feature First Fighter from Britain",
    author: "Jacob Ajom",
    description:
      "The African Warriors Fighting Championship (AWFC) announces its next event ‘King of Dambe’ featuring Luke Leyland, marking the historic debut of a European fighter in Nigeria’s traditional sport.",
    link: "https://www.vanguardngr.com/2024/01/african-warriors-championship-king-of-dambe-to-feature-first-fighter-from-britain/"
  },
  {
    image: "https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/0-1-248.jpg",
    date: "Jan 09, 2024",
    readTime: "5 Mins Read",
    title: "Dambe: African Warriors Championship to Feature First Fighters from Britain",
    author: "THISDAYLIVE",
    description:
      "AWFC’s upcoming ‘King of Dambe’ event in Katsina will see international participation as Luke Leyland becomes the first European athlete to compete in the traditional Nigerian sport.",
    link: "https://www.thisdaylive.com/index.php/2024/01/09/dambe-african-warriors-championship-to-feature-first-fighters-from-britain/"
  },
  {
    image: "https://www.africa-newsroom.com/files/thumb/bc61eb7c2338701/600/418",
    date: "Dec 20, 2023",
    readTime: "5 Mins Read",
    title: "Dambe Warriors League Announces Season 02 Launch and Strategic Partnership with MTN",
    author: "apofeed",
    description:
      "Dambe Warriors League (DWL) unveils a strategic partnership with MTN to expand its reach ahead of the Season 02 launch, set to transform fan engagement across Nigeria.",
    link: "https://african.business/2023/12/apo-newsfeed/dambe-warriors-league-announces-season-02-launch-and-strategic-partnership-with-mtn"
  },
  {
    image: "https://sportal365images.com/process/smp-images-production/ringier.africa/26112023/44339daf-dccf-4984-888d-f765dde10383.jpeg?operations=fit(960:)",
    date: "Nov 26, 2023",
    readTime: "5 Mins Read",
    title: "Winners Emerge at Dambe Championship in Kano",
    author: "Hassan Abdulsalam",
    description:
      "At the two-day event in Kano organized by the African Warriors Fighting Championship, the House of Arewa clinched the inaugural Emir Ado Bayero Dambe Championship Cup.",
    link: "https://www.pulsesports.ng/boxing/story/winners-emerge-at-dambe-championship-in-kano-2023112605444425747"
  },
  {
    image: "https://dailytrust.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-04-at-10.54.05-PM.jpeg",
    date: "Jan 12, 2024",
    readTime: "5 Mins Read",
    title: "The Thrills and Frills of Dambe Fight Night in Abuja",
    author: "Daily Trust Reporter",
    description:
      "An in-depth look at the electrifying atmosphere and cultural spectacle of Dambe fight night in Abuja, where tradition meets thrilling modern combat.",
    link: "https://dailytrust.com/the-thrills-and-frills-of-dambe-fight-night-in-abuja/"
  }
]


const TrendingNews: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-left text-2xl font-bold">TRENDING NEWS</h2>
        <a href="#" className="text-gray-600 hover:underline">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {newsData.slice(0, visibleCount).map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>

      {visibleCount < newsData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingNews;
