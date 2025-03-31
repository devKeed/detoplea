import HighlightCarousel from "../reusables/CarouselHighlights";
import highlight1 from "/images/0318.webp";
import highlight2 from "/images/3232.webp";
import highlight3 from "/images/1234.webp";
import highlight4 from "/images/5324.webp";

const highlights = [
  {
    id: 1,
    title: "Dambe Trailer",
    image: highlight1,
    videoUrl: "https://youtu.be/hS1fRigmvno",
  },
  {
    id: 2,
    title: "Autan Shagon Audu vs Dogon Messi",
    image: highlight2,
    videoUrl: "https://youtu.be/FjuD_ZmTExY",
  },
  {
    id: 3,
    title: "Ilele vs Bahagon Yasenda",
    image: highlight3,
    videoUrl: "https://youtu.be/orRpdS5iUtk",
  },
  {
    id: 4,
    title: "Bahagon Alijanu vs 2Pac",
    image: highlight4,
    videoUrl: "https://youtu.be/aYF8Chgsv1M?si=OeUOmcpteo6r_SxH",
  },
];

const Highlights = () => {
  return (
    <div>
      <HighlightCarousel highlights={highlights} />
    </div>
  );
};

export default Highlights;
