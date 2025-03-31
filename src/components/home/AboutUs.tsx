import fighter from "/images/fighter.jpg";
import youtubeLogo from "/images/youtube.png";
import playCircle from "/images/play-circle.png";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-12 py:1 md:py-10  text-center">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
        The African Warriors Fighting Championship is the leading promoter of
        Dambe, traditional kickboxing native to Northern Nigeria. Our mission is
        to offer opportunities to African athletes and take Africa’s ancient
        fighting traditions to the world. We host events, produce digital fight
        content and manage a national network of athletes.
      </p>

      {/* Image */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-[320px] md:w-[480px] rounded-lg overflow-hidden">
          <div className="absolute bottom-2 left-2 p-1 rounded">
            <img src={playCircle} alt="YouTube" className="w-6 h-6" />
          </div>
          <img
            src={fighter}
            alt="Dambe Fighter"
            className="rounded-lg w-full h-auto"
          />
          <div className="absolute bottom-2 right-2 p-1 rounded">
            <img src={youtubeLogo} alt="YouTube" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
