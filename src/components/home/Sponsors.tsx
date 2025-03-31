import cnn from "/images/cnn.png";
import bbc from "/images/bbc.png";
import joe from "/images/joe.png";
import vice from "/images/vice.png";
import ozy from "/images/ozy.png";

const Sponsors = () => {
  const sponsors = [
    {
      name: "BBC",
      quote: "Showcasing indigenous African combat sports",
      logo: bbc,
    },
    { name: "Joe", quote: "Africa’s answer to MMA", logo: joe },
    {
      name: "Vice",
      quote: "Launching Dambe into international markets",
      logo: vice,
    },
    {
      name: "OZY",
      quote: "AWFC is taking a unique approach to fight promotion",
      logo: ozy,
    },
    { name: "CNN", quote: "Africa’s modern-day warriors", logo: cnn },
  ];

  return (
    <div className="bg-gray-100 py-6 md:py-10 ">
      <h2 className="text-left text-center text-lg font-semibold uppercase tracking-wide">
        Featured in Top Media Outlets
      </h2>
      <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-10 mt-4">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="text-center max-w-[100px] sm:max-w-[120px] md:max-w-[150px]">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="mx-auto h-5 sm:h-12 md:h-14"
        />
        <p className="text-xs mt-2 text-gray-700 italic">
          “{sponsor.quote}”
        </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
