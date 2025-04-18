import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";


export interface IGalleryItem {
  id: number;
  image: string;
  date: string;
  link: string;
  match?: string;
  tournament: string;
  description: string;
  location: string;
  heading: string;
}

interface GallerySectionProps {
  title: string;
  items: IGalleryItem[];
  moreActionType?: "view-all" | "scrollable";
  backgroundColor?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title,
  items,
  moreActionType = "scrollable",
  backgroundColor = "white",
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [viewAll, setViewAll] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const { scrollLeft, clientWidth } = scrollContainer.current;
      const scrollAmount = clientWidth / 1.5;

      scrollContainer.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="w-full px-4 md:px-8 py-5 md:py-10 "
      style={{ backgroundColor }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-left font-bold">{title}</h2>

        {moreActionType === "view-all" ? (
          <button
            onClick={() => setViewAll(!viewAll)}
            className="text-green-600 font-semibold"
          >
            {viewAll ? "Show Less" : "View All"}
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 bg-transparent border-2 border-solid border-black rounded-full disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 bg-transparent border-2 border-solid border-black rounded-full disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {moreActionType === "view-all" ? (
        <div className="grid grid-cols-  sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.slice(0, viewAll ? items.length : 3).map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div
          ref={scrollContainer}
          className="flex space-x-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export const GalleryCard: React.FC<{ item: IGalleryItem }> = ({ item }) => {
  return (
    <>
      <div
        key={item.id}
        className="relative min-w-[280px] max-w-[90%] md:min-w-[30%] lg:min-w-[25%] rounded-[30px] overflow-hidden shrink-0 h-[300px] md:h-[350px] lg:h-[400px]"
      >
        <img
          src={item.image}
          alt={item.heading}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 md:p-6 lg:p-8 text-white rounded-lg">
          <div className="flex justify-between text-xs mb-2">
            <span className="flex items-center space-x-1">
              <MapPin size={12} /> <span>{item.location}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Calendar size={12} /> <span>{item.date}</span>
            </span>
          </div>
          <div className="flex flex-col">
            {item.match && (
              <p style={{ color: "#fff" }} className="font-bold text-lg">
                {item.match}
              </p>
            )}
            <h3 className="font-bold pt-1">{item.heading}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
            <div className="flex justify-center">
              {/* <YouTubeModal videoUrl={item.link} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;
