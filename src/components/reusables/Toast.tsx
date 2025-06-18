import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

interface ToastProps {
  message: string;
  type: "success" | "error" | "warning";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast = ({ message, type, isVisible, onClose, duration = 5000 }: ToastProps) => {
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
        return <FaCheckCircle className="text-green-500" />;
      case "error":
        return <FaExclamationCircle className="text-red-500" />;
      case "warning":
        return <FaExclamationCircle className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
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
      <div className={`${getBgColor()} border rounded-lg p-4 shadow-lg max-w-md flex items-start gap-3`}>
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className={`${getTextColor()} text-sm font-medium`}>
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes size={14} />
        </button>
      </div>
    </div>
  );
};
