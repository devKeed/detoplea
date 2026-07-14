import image1 from "/public/images/f1.webp";
import image2 from "/public/images/f2.webp";
import image3 from "/public/images/f3.webp";
import image4 from "/public/images/f4.webp";
import { MyFillButton } from "../reusables/Button";
import { NewsLetterForm } from "../reusables/NewsLetterForm";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // Instagram post links
  const instagramLinks = [
    "https://www.instagram.com/p/DYPonpTCKAQ/?igsh=bml4azczaGN3MjNz",
    "https://www.instagram.com/p/DaxuucpgqNz/?igsh=MW04d2Ezbjc0Z3RjNg==",
    "https://www.instagram.com/detopleamedia?igsh=MW1hcWt5Z3VrcGVmNw%3D%3D&utm_source=qr",
    "https://www.instagram.com/p/DYiBjTNAqor/?igsh=MXVteGh5MWN1YjF4ZA==",
  ];

  return (
    <footer className="w-full bg-[#F7E5D7]">
      <div className="flex flex-wrap md:flex-nowrap w-full">
        {[image1, image2, image3, image4].map((img, index) => (
          <a
            key={index}
            href={instagramLinks[index]}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-1/2 md:w-1/4 ${index === 4 ? "hidden md:block" : ""}`}
            aria-label={`Detoplea Marketing Instagram post ${index + 1}`}
          >
            <Image
              src={img}
              alt={`Detoplea Marketing team member ${
                index + 1
              } - Professional digital marketing services`}
              className="object-cover h-40 md:h-72 w-full"
              width={400}
              height={288}
            />
          </a>
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
          <MyFillButton
            text="Hire us"
            link="/contact"
            ariaLabel="Contact Detoplea Marketing for professional digital marketing services and consultation"
          />
        </div>

        <NewsLetterForm />

        <div className="flex flex-row flex-wrap  md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-12 w-full">
          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">Navigate</h6>
            <ul className="space-y-2 flex flex-col justify-center md:justify-start md:items-start">
              {[
                {
                  href: "/contact",
                  label: "Hire Us",
                  ariaLabel:
                    "Contact us for digital marketing services and consultation",
                },
                {
                  href: "/services",
                  label: "Service",
                  ariaLabel:
                    "View our comprehensive digital marketing services",
                },
                {
                  href: "/blog",
                  label: "Blog",
                  ariaLabel:
                    "Read our latest digital marketing insights and tips",
                },
                {
                  href: "/starthere",
                  label: "About",
                  ariaLabel:
                    "Learn about our team and digital marketing approach",
                },
              ].map(({ href, label, ariaLabel }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-label={ariaLabel}
                    className="text-black hover:text-gray-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-[#F2720D] mb-3">Social</h6>
            <ul className="space-y-2 flex flex-col justify-center md:justify-start md:items-start">
              {[
                {
                  href: "https://www.instagram.com/detopleamedia?igsh=MW1hcWt5Z3VrcGVmNw%3D%3D&utm_source=qr",
                  label: "Instagram",
                  ariaLabel:
                    "Follow Detoplea Marketing on Instagram for daily marketing tips and updates",
                },
                {
                  href: "https://pin.it/6lzYARXqy",
                  label: "Pinterest",
                  ariaLabel:
                    "Follow Detoplea Marketing on Pinterest for visual marketing inspiration",
                },
                {
                  href: "https://www.facebook.com/share/16EiJkTeGR/?mibextid=wwXIfr",
                  label: "Facebook",
                  ariaLabel:
                    "Connect with Detoplea Marketing on Facebook for updates and content",
                },
                {
                  href: "https://www.tiktok.com/@detopleamarketing?_t=ZM-8vzE4wVp3n4&_r=1",
                  label: "TikTok",
                  ariaLabel:
                    "Follow Detoplea Marketing on TikTok for short marketing tips and trends",
                },
              ].map(({ href, label, ariaLabel }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
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
