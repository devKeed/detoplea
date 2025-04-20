import React from "react";
const NotFound: React.FC = () => {
  return (
    <div className="p-8 text-center mt-20 md:mt-40">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">404: Not found</h2>
      <p className="text-lg">
        The page content your looking for is not available.
      </p>
    </div>
  );
};
export default NotFound;
