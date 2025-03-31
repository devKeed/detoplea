import GallerySection from "../components/reusables/GallerySection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import pastEvent1 from "/images/1234.webp";
import pastEvent2 from "/images/8765.webp";
import pastEvent3 from "/images/636.webp";
import pastEvent4 from "/images/5186.webp";
import dambe1 from "/images/1254.webp";
import dambe2 from "/images/2222.webp";
import dambe3 from "/images/5353.webp";
import dambe4 from "/images/1332.webp";
import dambe5 from "/images/5525.webp";

export const pastEvents = [
  {
    id: 1,
    title: "Autan Shagon Audu vs Dogon Messi",
    image: pastEvent1,
    date: "January 2024",
    link: "https://youtu.be/FjuD_ZmTExY",
    match: "Autan Shagon Audu vs Dogon Messi",
    tournament: "King of Dambe",
    description: "",
    location: "Katsina, Nigeria",
    heading: "",
  },
  {
    id: 2,
    title: "Shagon Yellow vs Luke Leyland",
    image: pastEvent2,
    date: "13/01/2024",
    link: "https://youtu.be/o1HC2iQZs5g",
    match: "Shagon Yellow vs Luke Leyland",
    tournament: "King of Dambe",
    description: "",
    location: "Katsina, Nigeria",
    heading: "",
  },
  {
    id: 3,
    title: "Coronavirus vs Dan Daba Auta",
    image: pastEvent3,
    date: "Oct. 2023",
    link: "https://youtu.be/FhLnfeNxNPg",
    match: "Coronavirus vs Dan Daba Auta",
    tournament: "King of Warriors",
    description: "",
    location: "Abuja, Nigeria",
    heading: "",
  },
  {
    id: 4,
    title: "G.B Yansanda vs Alin-Alin",
    image: pastEvent4,
    date: "",
    link: "https://youtu.be/XwCddp8CZTY",
    match: "G.B Yansanda vs Alin-Alin",
    tournament: "Emir's Cup",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
];

const dambe = [
  {
    id: 1,
    image: dambe1,
    date: "",
    link: "https://youtu.be/Cmmns7Hlf434?si=LUC1FvQA6OAG3lDZ",
    match: "Shagon Kato Vs Bahagon Gam",
    tournament: "Not a Tournament",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
  {
    id: 2,
    image: dambe2,
    date: "",
    link: "https://youtu.be/M43H797EWmw?si=3JRw7rjYnb8YwVPE",
    match: "Dogon Inda vs Shagon Tanko",
    tournament: "Not a Tournament",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
  {
    id: 3,
    image: dambe3,
    date: "",
    link: "https://youtu.be/Yo1t_M3-v64?si=1aO0t8UNWPxh1_b",
    match: "Shagon Bahagon Dan Mutuwa",
    tournament: "Not a Tournament",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
  {
    id: 4,
    image: dambe4,
    date: "",
    link: "https://youtu.be/bmT6jBBPFE?si=T8UDB7HmeU3t2IN-",
    match: "Bahagon Zayyanu Vs Hassan Barebare",
    tournament: "Not a Tournament",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
  {
    id: 5,
    image: dambe5,
    date: "",
    link: "https://youtu.be/9WNaiZdr47k?si=14NGpFnEGiRi4R93",
    match: "Yellow Dan Suru vs Abba Shagon Rugged",
    tournament: "Not a Tournament",
    description: "",
    location: "Kano, Nigeria",
    heading: "",
  },
];

export const Watch = () => {
  return (
    <div>
      <div className="text-center flex flex-col space-y-10 md:space-y-24 pt-20">
        <Header />
        <div className="flex flex-col space-y-32 pb-10">
          <GallerySection
            title="Dambe"
            items={dambe}
            moreActionType="view-all"
            backgroundColor="#f4f4f4"
          />
          <GallerySection
            title="Past Events"
            items={pastEvents}
            moreActionType="view-all"
            backgroundColor="#f4f4f4"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
