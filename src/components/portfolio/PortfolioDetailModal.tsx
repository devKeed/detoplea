import React from "react";

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    company: string;
    image: string;
    description: string;
    imageMod1?: string;
    imageMod2?: string;
    subtitle?: string;
    duration?: string;
    highlights?: string;
    results?: string;
    approach?: string;
    services?: string[];
    year?: string;
  };
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex justify-center items-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {data.company}
          </h2>
          {data.subtitle && (
            <p className="text-gray-600 mb-4">{data.subtitle}</p>
          )}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
          {data.duration && (
            <p className="text-gray-600 mb-4">{data.subtitle}</p>
          )}
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {/* Image Gallery Section */}
          <div className="mb-6">
            <img
              src={data.imageMod1}
              alt={data.company}
              className="w-full h-auto max-h-96 object-contain rounded-md mb-2"
            />
          </div>

          {/* Full Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              About the Project
            </h3>
            <p className="text-gray-600 mb-4">{data.description}</p>

            {/* Placeholder for more detailed information */}

            {data.services && data.services.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">
                  Services Rendered:
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {data.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailModal;
