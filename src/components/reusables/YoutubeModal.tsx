import { useState } from "react";
import closeIcon from "/images/close-x.svg"; // Ensure the path is correct

const extractVideoId = (url: string) => {
  if (url.includes("v=")) {
    return url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be")) {
    return url.split("/").pop();
  }
  return null;
};

const YouTubeModal = ({ videoUrl }: { videoUrl: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = extractVideoId(videoUrl);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="mt-3 inline-block bg-white text-black px-12 py-2 rounded-[40px] text-center"
      >
        Watch
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black rounded-lg p-8 w-11/12 max-w-4xl min-h-[80vh] relative" // Increased padding to p-8
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition duration-200" // Adjusted position to top-4 right-4
            >
              <img
                src={closeIcon}
                alt="Close"
                className="w-6 h-6"
              />
            </button>

            <div className="h-[calc(80vh-4rem)] mt-4">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeModal;
