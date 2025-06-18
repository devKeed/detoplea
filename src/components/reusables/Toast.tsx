import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

interface ToastProps {
  message: string;
  type: "success" | "error" | "warning";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-green-500 text-lg" />;
      case "error":
        return (
          <div className="flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
            <FaExclamationCircle className="text-red-500 text-sm" />
          </div>
        );
      case "warning":
        return (
          <div className="flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full">
            <FaExclamationCircle className="text-yellow-500 text-sm" />
          </div>
        );
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200";
      case "error":
        return "bg-gradient-to-r from-red-50 to-rose-50 border-red-200";
      case "warning":
        return "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "warning":
        return "text-yellow-800";
      default:
        return "text-gray-800";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`${getBgColor()} border rounded-xl p-4 shadow-2xl backdrop-blur-sm max-w-md flex items-start gap-3 transition-all duration-300 hover:shadow-3xl`}
      >
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1">
          <p
            className={`${getTextColor()} text-sm font-medium leading-relaxed`}
          >
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-white/50"
          aria-label="Close notification"
        >
          <FaTimes size={12} />
        </button>
      </div>
    </div>
  );
};
