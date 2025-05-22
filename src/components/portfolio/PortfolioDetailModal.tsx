
import React from 'react';

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    company: string;
    image: string; // Main image, can be used as a fallback or part of a gallery
    description: string;
    // Add more specific props for detailed information and images
    // For example:
    // detailedDescription?: string;
    // images?: string[];
    // servicesRendered?: string[];
    // clientTestimonial?: string;
  };
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex justify-center items-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{data.company} Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          {/* Image Gallery Section */}
          <div className="mb-6">
            <img src={data.image} alt={data.company} className="w-full h-auto max-h-96 object-contain rounded-md mb-2" />
            {/* If you have multiple images, you can map through them here */}
            {/* For example:
            {data.images && data.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {data.images.map((img, index) => (
                  <img key={index} src={img} alt={`${data.company} image ${index + 1}`} className="w-full h-24 object-cover rounded" />
                ))}
              </div>
            )}
            */}
          </div>

          {/* Full Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">About the Project</h3>
            <p className="text-gray-600 mb-4">{data.description}</p>
            
            {/* Placeholder for more detailed information */}
            {/* {data.detailedDescription && (
              <p className="text-gray-600 mb-4">{data.detailedDescription}</p>
            )} */}

            {/* Example: Services Rendered */}
            {/* {data.servicesRendered && data.servicesRendered.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700">Services Rendered:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {data.servicesRendered.map(service => <li key={service}>{service}</li>)}
                </ul>
              </div>
            )}
            */}

            {/* Example: Client Testimonial */}
            {/* {data.clientTestimonial && (
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="italic text-gray-600">"{data.clientTestimonial}"</p>
                <p className="text-right text-sm text-gray-500">- A Happy Client</p>
              </div>
            )}
            */}
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
