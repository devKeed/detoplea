import Socials from "../reusables/Socials";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 lg:px-32 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-left md:text-left flex flex-col items-end space-x-4">
            <img
              src="/images/logowhite.png"
              alt="African Warriors Logo"
              className="w-60 mb-4"
            />
            <Socials direction="horizontal" />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-left text-sm md:text-lg">
          <div>
            <p className="text-lg font-semibold mb-3">AWFC</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Dambe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Fighting Championship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  AWFC Fight Club
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold mb-3">Social Media</p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.youtube.com/@africanwarriors" className="hover:text-gray-400">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/africanwarriorsfightingchampionship/" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="http://FACEbook.com/groups/871285854139506/" className="hover:text-gray-400">
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@africanwarriorsfc" className="hover:text-gray-400">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/africanwarriorsfc/" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <p className="text-lg font-semibold mb-3 text-left md:text-left">
              Help
            </p>
            <ul className="space-y-2 text-left md:text-left">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Fight Pass
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Tickets Purchase
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Devices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Credentials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-200 mt-20">
        &copy; 2025 AWFC. All rights reserved.
      </div>
    </footer>
  );
}
