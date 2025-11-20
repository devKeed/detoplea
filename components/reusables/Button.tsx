"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { FC } from "react";
import Link from "next/link";

interface TButtonProps {
  arrow?: boolean;
  text: string;
  link: string;
  color?: string;
  bgColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
  ariaLabel?: string;
}

export const MyFillButton: FC<TButtonProps> = ({
  arrow = true,
  text,
  link,
  color = "white",
  bgColor = "#F2720D",
  hoverTextColor = "white",
  hoverBgColor = "#f24a0d",
  ariaLabel,
}) => {
  const isExternal =
    link.startsWith("http") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:");

  const buttonStyle = {
    color: color,
    backgroundColor: bgColor,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = hoverBgColor;
    e.currentTarget.style.color = hoverTextColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = bgColor;
    e.currentTarget.style.color = color;
  };

  const className = `flex items-center gap-2 px-10 py-3 rounded-2xl transition-colors duration-300`;

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || text}
        className={className}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
        {arrow && <FiArrowUpRight size={24} />}
      </a>
    );
  }

  return (
    <Link
      href={link}
      aria-label={ariaLabel || text}
      className={className}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {arrow && <FiArrowUpRight size={24} />}
    </Link>
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
  ariaLabel,
}) => {
  const isExternal =
    link.startsWith("http") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:");

  const buttonStyle = {
    color: color,
    backgroundColor: bgColor,
    borderColor: color,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = hoverBgColor;
    e.currentTarget.style.color = hoverTextColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = bgColor;
    e.currentTarget.style.color = color;
  };

  const className = `flex items-center gap-2 px-10 py-3 rounded-2xl border-2 transition-colors duration-300`;

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || text}
        className={className}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
        {arrow && <FiArrowUpRight size={24} />}
      </a>
    );
  }

  return (
    <Link
      href={link}
      aria-label={ariaLabel || text}
      className={className}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {arrow && <FiArrowUpRight size={24} />}
    </Link>
  );
};
