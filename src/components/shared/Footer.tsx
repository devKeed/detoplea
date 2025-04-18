import image1 from "/images/image 13a.png";
import image2 from "/images/image 16.png";
import image3 from "/images/image 11.png";
import image4 from "/images/image 15.png";
import image5 from "/images/image 14.png";
import { MyFillButton } from "../reusables/Button";
import { NewsLetterForm } from "../reusables/NewsLetterModal";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7E5D7]">
      {/* Top Image Strip */}
      <div className="flex flex-wrap md:flex-nowrap w-full">
        {[image1, image2, image3, image4, image5].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Footer Image ${index + 1}`}
            className="w-1/2 md:w-1/5 object-cover h-40 md:h-60"
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
        {/* Column 1: Who Are We */}
        <div className="text-left gap-4 flex flex-col items-start">
          <h3 className="uppercase text-lg md:text-xl font-semibold">
            Who Are We
          </h3>
          <p className="max-w-md text-sm md:text-base">
            We are your one stop boutique for digital marketing services, as we
            prioritize your business/ brand’s success online and want to help
            you scale your sales.
          </p>
          <MyFillButton text="Hire us" link="/hire-us" />
        </div>

        {/* Column 2: Newsletter */}
        <NewsLetterForm />

        {/* Column 3: Links */}
        <div className="flex flex-col md:flex-row justify-start gap-8 md:gap-12">
          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">Navigate</h6>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                { href: "/hire-us", label: "Hire Us" },
                { href: "/service", label: "Service" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
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
            <h6 className="font-semibold text-[#F2720D] mb-3">Social</h6>
            <ul className="space-y-2 text-sm md:text-base">
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
