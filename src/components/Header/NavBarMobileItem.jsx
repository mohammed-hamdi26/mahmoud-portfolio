import React from "react";

export default function NavBarMobileItem({
  title,
  href,
  icon,
  url,
  onClick,
  target = "_self",
}) {
  return (
    <li
      onClick={onClick}
      className={`${
        url === href ? "bg-gray-100" : ""
      } text-background text-lg p-4 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300 cursor-pointer`}
    >
      <a target={target} className="flex items-center gap-2" href={href}>
        {icon} {title}
      </a>
    </li>
  );
}
