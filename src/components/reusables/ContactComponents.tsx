import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const InputField = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    error,
    required = false,
}: {
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
}) => (
    <div className="flex flex-col w-full">
        <p>{label} {required && <span className="text-red-500">*</span>}</p>
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border p-3 w-full text-xs focus:outline-none focus:ring-0 focus:border-black ${error ? 'border-red-500' : ''}`}
            required={required}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export const TextAreaField = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    height = "250px",
    error,
    required = false,
}: {
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    height?: string;
    error?: string;
    required?: boolean;
}) => (
    <div className="flex flex-col my-5">
        <p>{label} {required && <span className="text-red-500">*</span>}</p>
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border p-4 w-full text-xs focus:outline-none focus:ring-0 focus:border-black ${error ? 'border-red-500' : ''}`}
            style={{ height }}
            required={required}
        ></textarea>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export const CheckboxField = ({ 
  label, 
  id, 
  name,
  checked,
  onChange,
}: { 
  label: string; 
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-row items-center gap-3 pt-5">
    <input 
      type="checkbox" 
      id={id} 
      name={name}
      checked={checked}
      onChange={onChange}
      className="w-3 h-3 accent-black" 
    />
    <label htmlFor={id} className="text-xs">
      {label}
    </label>
  </div>
);

export const SelectField = ({
  label,
  options,
  name,
  value,
  onChange,
  error,
  required = false,
}: {
  label: string;
  options: { label: string; value: string }[];
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col mt-5 relative">
      <p>{label} {required && <span className="text-red-500">*</span>}</p>
      <div 
        className={`border p-3 w-full text-sm flex justify-between items-center cursor-pointer ${error ? 'border-red-500' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-600 text-xs">
          {value ? options.find((opt) => opt.value === value)?.label : "Select an option"}
        </span>
        <FaChevronDown className={`transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-white border shadow-lg w-full mt-12 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2.5 hover:bg-gray-100 cursor-pointer text-xs border-b"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};