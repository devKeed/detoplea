import HeroSection from "../components/reusables/HeroSection";
import Rules from "../components/reusables/Rules";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import GallerySection from "../components/reusables/GallerySection";
import dambe1 from "/images/8876.webp";
import dambe2 from "/images/1556.webp";
import dambe3 from "/images/1332.webp";
import dambe4 from "/images/4321.webp";
import hero2 from "/images/hero2.png";

const rules = [
  { number: 1, text: "Strike only with the wrapped hand" },
  {
    number: 2,
    text: "Win by knockout or when a fighter is rendered unconscious due to strikes",
  },
  { number: 3, text: "Maximum of 3, 5 minutes rounds" },
  {
    number: 4,
    text: "A round is immediately won by knocking down an opponent",
  },
  {
    number: 5,
    text: "A fighter’s hand, knee or body touching the ground counts as a knockdown",
  },
  {
    number: 6,
    text: "In the event of no clear winner after three rounds, the bout is judged by three judges",
  },
  {
    number: 7,
    text: "When the referee stops the contest because a fighter is not able to defend themselves",
  },
  { number: 8, text: "Fouls include low blows and unsportsmanlike conduct" },
];

const latestFights = [
  {
    "id": 1,
    "image": dambe1,
    "date": "",
    "link": "https://youtu.be/SZ4ow_A0U5c?si=AOQE6_kEvymvf_n3",
    "match": "Shagon Amadu vs Dan Bichi",
    "tournament": "",
    "description": "",
    "location": "Katsina, Nigeria",
    "heading": ""
  },
  {
    "id": 2,
    "image": dambe2,
    "date": "",
    "link": "https://youtu.be/5SI6BB-ZBes?si=p6yPH97QIPI8HkdJ",
    "match": "Ramadan Garba vs Bahagon Shagon Mada",
    "tournament": "",
    "description": "",
    "location": "Kano, Nigeria",
    "heading": ""
  },
  {
    "id": 3,
    "image": dambe3,
    "date": "",
    "link": "https://youtu.be/XwCddp8CZT Y?si=UkjE6Nponszq2mO-",
    "match": "G.B Yansanda vs Alin-Alin",
    "tournament": "",
    "description": "",
    "location": "Kano, Nigeria",
    "heading": ""
  },
  {
    "id": 4,
    "image": dambe4,
    "date": "",
    "link": "https://youtu.be/hFhLdLZ8hoY?si=YxNWd_dwhZq721_1",
    "match": "Shagon Buhari Vs Dan Kanuma",
    "tournament": "",
    "description": "",
    "location": "Kano, Nigeria",
    "heading": ""
  }
]


export const Dambe = () => {
  return (
    <div className="text-center pt-16 flex flex-col space-y-10 md:space-y-32">
      <div>
        <Header />
        <HeroSection
          description="Dambe is an ancient form of boxing native to the Hausa people of northern Nigeria.
 The primary weapon in Dambe is the fist of a warriors’ dominant hand, which is wrapped in rope and used for landing punches. The other hand is used for blocking and measuring distance. Competitors can also use their legs for kicking and sweeping. 
 Historically, Dambe was a means of preparing for war and this legacy lives on today. The lead hand is referred to as ‘the spear’ and the unwrapped hand is called the shield. A knockdown or knockout is called a ‘kill’."
          backgroundImage={hero2}
          section="dambe"
          height="80vh"
          // colorOverlay="#014D28"
          titleFontSize="200px"
        />
      </div>
      <GallerySection
        title="LATEST FIGHTS"
        items={latestFights}
        moreActionType="scrollable"
      />
      <Rules rules={rules} />
      <Footer />
    </div>
  );
};
