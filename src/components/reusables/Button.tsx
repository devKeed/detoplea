import { FiArrowUpRight } from "react-icons/fi";
import { FC } from "react";

interface TButtonProps {
  arrow?: boolean;
  text: string;
  link: string;
  color?: string;
  bgColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
}

export const MyButton: FC<TButtonProps> = ({
  arrow = true,
  text,
  link,
  color = "white",
  bgColor = "#F2720D",
  hoverTextColor = "white",
  hoverBgColor = "#F3720D",
}) => {
  return (
    <a
      href={link}
      className={`flex items-center gap-2 px-10 py-4 rounded-3xl transition-colors duration-300`}
      style={{
        color: color,
        backgroundColor: bgColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBgColor;
        e.currentTarget.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = color;
      }}
    >
      {text}
      {arrow && <FiArrowUpRight size={20} />}
    </a>
  );
};
