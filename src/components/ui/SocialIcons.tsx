import { portfolioData } from "@/data/portfolio";
import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaFilePdf,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import {
  TbBrandInstagram,
  TbBrandMedium,
  TbBrandX,
  TbMail,
} from "react-icons/tb";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Github: FiGithub,
  Linkedin: FaLinkedinIn,
  Twitter: TbBrandX,
  X: TbBrandX,
  Instagram: TbBrandInstagram,
  Medium: TbBrandMedium,
  Mail: IoMdMail,
  LeetCode: SiLeetcode,
  Resume: FaFilePdf, // or use a different icon if available
};

interface SocialIconsProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialIcons({
  variant = "default",
  className = "",
}: SocialIconsProps) {
  return (
    <div className={`flex flex-nowrap items-center gap-4 ${className}`}>
      {portfolioData.social.map((link) => {
        const Icon = iconMap[link.icon] || iconMap[link.platform] || TbMail;

        if (variant === "footer") {
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              <Icon size={22} />
            </a>
          );
        }

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-primary hover:bg-slate-800 hover:text-primary sm:px-5 sm:py-3"
            aria-label={link.platform}
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-colors group-hover:bg-primary group-hover:text-slate-900">
              <Icon size={18} />
            </div>
            <span className="hidden sm:inline">{link.platform}</span>
            <FaArrowUpRightFromSquare
              size={16}
              className="hidden sm:inline ml-auto text-slate-400 transition-colors group-hover:text-primary"
            />
          </a>
        );
      })}
    </div>
  );
}
