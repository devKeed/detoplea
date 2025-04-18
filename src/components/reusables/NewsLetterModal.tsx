import React, { useEffect, useRef } from "react";
import MyInput from "./Input";
import { MyFillButton } from "./Button";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-[#f9e8dd] w-full max-w-2xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Left Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/images/news.png"
            alt="Newsletter"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-start text-left">
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;

export const NewsLetterForm = () => {
  return (
    <div className="w-full space-y-4 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-black text-center">JOIN OUR NEWSLETTER</h2>
      <p className="text-sm text-gray-700 text-center">
        Receive insider news and valuable social media tips from our team, so
        you never miss a beat!
      </p>
      <MyInput type="text" placeholder="First Name" />
      <MyInput type="email" placeholder="Email Address" />
      <div className="flex m-auto text-center">
       
        <MyFillButton text="Subscribe" link="#" arrow={false} />
      </div>
    </div>
  );
};
