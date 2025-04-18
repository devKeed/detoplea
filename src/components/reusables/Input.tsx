// components/reusables/Input.tsx
import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

const MyInput: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-xl bg-[#FFF6F0] focus:outline-none placeholder-black placeholder:text-sm ${className}`}
    />
  );
};

export default MyInput;
