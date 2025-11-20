import React from "react";

interface PortfolioDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    company: string;
    about: string;
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
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex justify-center items-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-2 md:p-4 border-b">
          <div className="">
            {" "}
            <h2 className="text-sm md:text-xl font-semibold text-gray-800">
              {data.company}
            </h2>
            {data.subtitle && (
              <p className="text-gray-600 text-xs">{data.subtitle}</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {" "}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
            {data.duration && (
              <p className="text-gray-600 text-xs">
                Project duration: {data.duration}
              </p>
            )}
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="mb-6">
            <img
              src={data.imageMod1}
              alt={data.company}
              className="w-full h-auto object-contain mb-2"
            />
          </div>

          <div>
            {data.about && (
              <>
                <h4 className="text-xl uppercase font-semibold text-gray-700 mb-2">
                  About the Project
                </h4>
                <p className="text-gray-600 mb-4 text-xs">{data.about}</p>
              </>
            )}

            {data.services && data.services.length > 0 && (
              <div className="mb-4 mt-2">
                <h3 className="uppercase text-lg font-semibold text-gray-700">
                  Services we provided:
                </h3>
                <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                  {data.services.map((service, index) => (
                    <span
                      key={index}
                      className=" text-gray-700 rounded-xl border border-black flex items-center justify-center py-1 md:py-2"
                    >
                      <p className="text-[11px] md:text-[14px] px-2 md:px-3">
                        {service}
                      </p>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data.imageMod2 && (
              <div className="mb-6 mt-4 sm:mt-10">
                <img
                  src={data.imageMod2}
                  alt={data.company}
                  className="w-full h-auto object-contain mb-2"
                />
              </div>
            )}

            <div>
              {data.results && (
                <>
                  {" "}
                  <h4 className="text-xl uppercase font-semibold text-gray-700 mb-2">
                    Results
                  </h4>
                  <ul className="list-disc pl-5">
                    {data.results.split(",").map((result, index) => (
                      <li key={index} className="text-gray-600 mb-2 text-xs">
                        {result.trim()}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {data.highlights && (
              <div className="mt-4">
                <h4 className="text-xl uppercase font-semibold text-gray-700 mb-2">
                  highlights
                </h4>

                <p className="text-gray-600 mb-2 text-xs">{data.highlights}</p>
              </div>
            )}

            {data.approach && (
              <div className="mt-4">
                <h4 className="text-xl uppercase font-semibold text-gray-700 mb-2">
                  our approach
                </h4>

                <p className="text-gray-600 mb-2 text-xs">{data.approach}</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailModal;
