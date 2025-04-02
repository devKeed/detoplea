import image1 from "/images/image 13a.png";
import image2 from "/images/image 16.png";
import image3 from "/images/image 11.png";
import image4 from "/images/image 15.png";
import image5 from "/images/image 14.png";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7E5D7] text-white">
      {/* Top Section with Images */}
      <div className="flex w-full">
        <img
          src={image1}
          alt={"Footer Image 1"}
          className="w-1/5 h-44 object-cover"
        />
        <img
          src={image2}
          alt={"Footer Image 1"}
          className="w-1/5 h-44 object-cover"
        />
        <img
          src={image3}
          alt={"Footer Image 1"}
          className="w-1/5 h-44 object-cover"
        />
        <img
          src={image4}
          alt={"Footer Image 1"}
          className="w-1/5 h-44 object-cover"
        />
        <img
          src={image5}
          alt={"Footer Image 1"}
          className="w-1/5 h-44 object-cover"
        />
      </div>

      {/* Bottom Section with Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 mt-5">
        <div className="footer-column text-left gap-4 flex flex-col items-start">
          <h3 className="text-4xl text-black font-semibold uppercase">
            Who Are We
          </h3>
          <p className="text-gray-600 ">
            We are your one stop boutique for digital marketing services, as we
            prioritize your business/ brand’s success online and wants to help
            you scale your sale
          </p>
          <button className="bg-[#F2720D] flex items-center gap-2 pl-10 pr-10 px-4 py-2 p-5 rounded-3xl hover:bg-gray-500 hover:text-white transition">
            Hire Us <FiArrowUpRight size={22} />
          </button>
        </div>
        <div className="footer-column flex flex-col items-center gap-4">
          <div>
            <h4 className=" text-black font-semibold uppercase text-2xl">
              Join Our Newsletter
            </h4>
            <p className="text-gray-600 text-sm">
              Receive insider news and valuable social media tips from our team,
              so you never miss a beat!
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            {" "}
            <input
              type="text"
              placeholder="First Name"
              className="w-96 h-12 rounded-lg p-5 text-black bg-[#FFF6F0]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-96 h-12 rounded-lg p-5 text-black bg-[#FFF6F0]"
            />
          </div>
          <button className="bg-[#F2720D] flex items-center gap-2 px-4 py-2 p-5 pl-10 pr-10 rounded-3xl hover:bg-gray-500 hover:text-white transition">
            Subscribe
          </button>
        </div>

        <div className="footer-column flex flex-col md:flex-row justify-center items-center text-center gap-8 md:gap-12">
          {/* Navigate Section */}
          <div>
            <h3 className="text-2xl font-semibold font-uber text-[#F2720D] mb-3">
              Navigate
            </h3>
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
            <h3 className="text-2xl font-semibold font-uber text-[#F2720D] mb-3">
              Social
            </h3>
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
