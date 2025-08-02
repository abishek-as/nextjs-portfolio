"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Props interface
interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
  closeSheet?: () => void;
}

// Links array
const links: { path: string; name: string }[] = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Navbar: React.FC<NavProps> = ({
  containerStyles = "",
  linkStyles = "",
  underlineStyles = "",
  closeSheet,
}) => {
  const path = usePathname();

  const handleClick = () => {
    if (typeof closeSheet === "function") {
      closeSheet(); // Only call if provided
    }
  };

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={handleClick}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={underlineStyles}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
