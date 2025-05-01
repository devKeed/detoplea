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

export const MyFillButton: FC<TButtonProps> = ({
    arrow = true,
    text,
    link,
    color = "white",
    bgColor = "#F2720D",
    hoverTextColor = "white",
    hoverBgColor = "#f24a0d",
}) => {
    return (
        <a
            href={link}
            className={`flex items-center gap-2 px-10 py-3 rounded-2xl transition-colors duration-300`}
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
            {arrow && <FiArrowUpRight size={24} />}
        </a>
    );
};

export const MyOutlinedButton: FC<TButtonProps> = ({
    arrow = true,
    text,
    link,
    color = "#1A1A1A",
    bgColor = "transparent",
    hoverTextColor = "white",
    hoverBgColor = "#1A1A1A",
}) => {
    return (
        <a
            href={link}
            className={`flex items-center gap-2 px-10 py-3 rounded-2xl border-2 transition-colors duration-300`}
            style={{
                color: color,
                backgroundColor: bgColor,
                borderColor: color,
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
            {arrow && <FiArrowUpRight size={24} />}
        </a>
    );
};
