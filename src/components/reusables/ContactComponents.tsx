import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col w-full">
    <p>{label}</p>
    <input
      type="text"
      placeholder={placeholder}
      className="border p-3 w-full text-xs"
    />
  </div>
);

export const TextAreaField = ({
  label,
  placeholder,
  height = "250px",
}: {
  label: string;
  placeholder: string;
  height?: string;
}) => (
  <div className="flex flex-col my-5">
    <p>{label}</p>
    <textarea
      placeholder={placeholder}
      className="border p-4 w-full text-xs"
      style={{ height }}
    ></textarea>
  </div>
);

export const CheckboxField = ({ label, id }: { label: string; id: string }) => (
  <div className="flex flex-row items-center gap-3 pt-5">
    <input type="checkbox" id={id} className="w-3 h-3 accent-black" />
    <label htmlFor={id} className="text-xs">
      {label}
    </label>
  </div>
);

export const SelectField = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; value: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className="flex flex-col mt-5 relative">
      <p>{label}</p>
      <div 
        className="border p-3 w-full text-sm flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-600 text-xs">
          {selectedOption ? options.find((opt) => opt.value === selectedOption)?.label : "Select an option"}
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
                setSelectedOption(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};