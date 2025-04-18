import image1 from "/images/image 13a.png";
import image2 from "/images/image 16.png";
import image3 from "/images/image 11.png";
import image4 from "/images/image 15.png";
import image5 from "/images/image 14.png";
import { MyFillButton } from "../reusables/Button";
import { NewsLetterForm } from "../reusables/NewsLetterModal";

export default function Footer() {
  return (
    <footer style={{height: "90vh"}} className="w-full bg-[#F7E5D7]">
      <div style={{height: "40vh"}} className="flex w-full">
        <img
          src={image1}
          alt={"Footer Image 1"}
          className="w-1/5 object-cover"
        />
        <img
          src={image2}
          alt={"Footer Image 1"}
          className="w-1/5 object-cover"
        />
        <img
          src={image3}
          alt={"Footer Image 1"}
          className="w-1/5 object-cover"
        />
        <img
          src={image4}
          alt={"Footer Image 1"}
          className="w-1/5 object-cover"
        />
        <img
          src={image5}
          alt={"Footer Image 1"}
          className="w-1/5 object-cover"
        />
      </div>

      {/* Bottom Section with Grid */}
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 mt-5">
        <div className="footer-column text-left gap-4 flex flex-col items-start">
          <h3 className="uppercase">
            Who Are We
          </h3>
          <p style={{maxWidth: "410px"}} className="">
            We are your one stop boutique for digital marketing services, as we
            prioritize your business/ brand’s success online and wants to help
            you scale your sale
          </p>
          <MyFillButton text="Hire us" link="/hire-us"/>
        </div>
        <NewsLetterForm />

        <div className="footer-column flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          {/* Navigate Section */}
          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">
              Navigate
            </h6>
            <ul className="space-y-2">
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

          {/* Social Section */}
          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">
              Social
            </h6>
            <ul className="space-y-2">
              {[
                { href: "/instagram", label: "Instagram" },
                { href: "/pinterest", label: "Pinterest" },
                { href: "/linkedin", label: "LinkedIn" },
                { href: "/tiktok", label: "TikTok" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-black hover:text-gray-400  transition-colors duration-200"
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
