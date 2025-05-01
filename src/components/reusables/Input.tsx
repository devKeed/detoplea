// components/reusables/Input.tsx
import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
}

const MyInput: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  name,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-xl text-[15px] bg-[#FFF6F0] focus:outline-none placeholder:text-gray-400 placeholder:text-[15px] ${disabled ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
    />
  );
};

export default MyInput;
