import React from "react";

interface SocialsProps {
  direction?: "horizontal" | "vertical";
}

const socials = [
  { name: "Facebook", src: "/images/socfb.png", link: "https://web.facebook.com/africanwarriorsfightingchampionship/" },
  { name: "Facebook Group", src: "/images/socfb.png", link: "http://FACEbook.com/groups/871285854139506/" },
  { name: "YouTube", src: "/images/socyt.png", link: "https://www.youtube.com/@africanwarriors" },
  { name: "Instagram", src: "/images/socig.png", link: "https://www.instagram.com/africanwarriorsfc/" },
  { name: "Tiktok", src: "/images/soctk.png", link: "https://www.tiktok.com/@africanwarriorsfc" },
];

const Socials: React.FC<SocialsProps> = ({ direction = "horizontal" }) => {
  return (
    <div className={`flex ${direction === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-4"} items-center`}>
      {socials.map((social) => (
        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
          <img src={social.src} alt={social.name} className="w-6 h-6 hover:opacity-75 transition-opacity" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
