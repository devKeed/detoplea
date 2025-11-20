import React from "react";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found - Detoplea Marketing"
        description="Sorry, the page you're looking for doesn't exist. Explore our digital marketing services, blog, and portfolio to find what you need for your business growth."
        url="https://detoplea.com/404"
        type="website"
      />
      <div className="p-8 text-center mt-20 md:mt-40">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">404: Not found</h2>
        <p className="text-lg">
          The page content you&apos;re looking for is not available.
        </p>
      </div>
    </>
  );
};
export default NotFound;
