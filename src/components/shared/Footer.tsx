import image1 from "/images/image 13a.png";
import image2 from "/images/image 16.png";
import image3 from "/images/image 11.png";
import image4 from "/images/image 15.png";
import image5 from "/images/image 14.png";
import { MyFillButton } from "../reusables/Button";
import { NewsLetterForm } from "../reusables/NewsLetterForm";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7E5D7]">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        {[image1, image2, image3, image4, image5].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Footer Image ${index + 1}`}
            className={`w-1/2 md:w-1/5 object-cover h-40 md:h-60 ${
              index === 4 ? "hidden md:block" : ""
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
        <div className="text-left gap-4 flex flex-col items-start">
          <h3 className="uppercase text-lg md:text-2xl font-semibold">
            Who Are We
          </h3>
          <p className="max-w-md">
            We are your one stop boutique for digital marketing services, as we
            prioritize your business/ brand’s success online and want to help
            you scale your sales.
          </p>
          <MyFillButton text="Hire us" link="/contact" />
        </div>

        <NewsLetterForm />

        <div className="flex flex-row flex-wrap  md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-12 w-full">
          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">
              Navigate
            </h6>
            <ul className="space-y-2 flex flex-col justify-center md:justify-start md:items-start">
              {[
                { href: "/contact", label: "Hire Us" },
                { href: "/services", label: "Service" },
                { href: "/blog", label: "Blog" },
                { href: "/starthere", label: "About" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-black hover:text-gray-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">
              Social
            </h6>
            <ul className="space-y-2 flex flex-col justify-center md:justify-start md:items-start">
              {[
                { href: "/instagram", label: "Instagram" },
                { href: "/pinterest", label: "Pinterest" },
                { href: "/linkedin", label: "LinkedIn" },
                { href: "/tiktok", label: "TikTok" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-black hover:text-gray-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
