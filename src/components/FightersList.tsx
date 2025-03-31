import { useState } from "react";
import fighter1 from "/images/1234.webp";
import fighter2 from "/images/5678.webp";
import fighter3 from "/images/2134.webp";
import fighter4 from "/images/4321.webp";
import fighter5 from "/images/4434.webp";
import fighter6 from "/images/3222.webp";
import fighter7 from "/images/5342.webp";
import { LucideArrowDown } from "lucide-react";

const fightersData = [
  {
    id: 1,
    name: "Coronavirus",
    weight: "65KG",
    height: "5.5ft",
    age: 21,
    house: "Kudu",
    country: "Nigeria",
    level: "Lightweight",
    image: fighter1,
  },
  {
    id: 2,
    name: "Shagon Yellow",
    weight: "75kg",
    height: "5.7ft",
    age: 24,
    house: "Gurumada",
    country: "Nigeria",
    level: "Heavyweight",
    image: fighter2,
  },
  {
    id: 3,
    name: "Dogon Messi",
    weight: "65kg",
    height: "6ft",
    age: 21,
    house: "Arewa",
    country: "Nigeria",
    level: "Lightweight",
    image: fighter3,
  },
  {
    id: 4,
    name: "G.B. Yansanda",
    weight: "85kg",
    height: "5.7ft",
    age: 21,
    house: "Arewa",
    country: "Nigeria",
    level: "Heavyweight",
    image: fighter4,
  },
  {
    id: 5,
    name: "Sha'ike",
    weight: "65kg",
    height: "5.5ft",
    age: 22,
    house: "Gurumada",
    country: "Nigeria",
    level: "Lightweight",
    image: fighter5,
  },
  {
    id: 6,
    name: "Shagon Kosilaye",
    weight: "65kg",
    height: "5.5ft",
    age: 22,
    house: "Kudu",
    country: "Nigeria",
    level: "Lightweight",
    image: fighter6,
  },
  {
    id: 7,
    name: "Autan Dan Bunza",
    weight: "75kg",
    height: "5.7ft",
    age: 22,
    house: "Arewa",
    country: "Nigeria",
    level: "Heavyweight",
    image: fighter7,
  },
];

const FightersList = () => {
  const [levelFilter, setLevelFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const levels = ["All", "Lightweight", "Heavyweight"];

  const filteredFighters = fightersData.filter(
    (fighter) => levelFilter === "All" || fighter.level === levelFilter
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <h2 className="text-left font-bold mb-6">MEET OUR FIGHTERS</h2>
        <select
          className="border rounded-md p-2"
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {filteredFighters.slice(0, visibleCount).map((fighter) => (
            <div
            key={fighter.id}
            className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg"
            >
            <div
              className="w-full md:w-1/4 h-64 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${fighter.image})`, backgroundPosition: "top" }}
            />
            <div className="flex text-left flex-col justify-center items-start space-y-2 ml-4">
              <h3 className="text-left text-2xl font-bold mt-3 md:mt-0">{fighter.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2 md:pt-4">
              {[
                `Weight: ${fighter.weight}`,
                `Height: ${fighter.height}`,
                `Age: ${fighter.age}`,
                `House: ${fighter.house}`,
                `Country: ${fighter.country}`,
              ].map((info, index) => (
                <span
                key={index}
                className="border border-gray-500 px-3 py-3 rounded-xl text-sm"
                >
                {info}
                </span>
              ))}
              </div>
            </div>
            {/* <button className="mt-3 ml-auto mr-4 border border-green-600 text-green-600 px-4 py-2 rounded-[40px] h-10 self-center">
              Highlights
            </button> */}
            </div>
        ))}
      </div>

      {visibleCount < filteredFighters.length && (
        <div className="text-center mt-6 md:mt-12 flex justify-center">
          <span className="gap-2 bg-red-600 text-white px-12 py-2 rounded-full flex items-center justify-center mx-auto">
            <button onClick={() => setVisibleCount(visibleCount + 3)}>
              View more
            </button>
            <LucideArrowDown />
          </span>
        </div>
      )}
    </div>
  );
};

export default FightersList;