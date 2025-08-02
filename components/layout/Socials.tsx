"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

// Define the props type for the component
interface SocialsProps {
  containerStyles?: string;
  iconsStyles?: string;
}

// Define the icon structure
interface IconLink {
  path: string;
  name: ReactNode;
}

// Icons array with proper type
const icons: IconLink[] = [
  {
    path: "https://github.com/abishek-as",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/abishek-as",
    name: <RiLinkedinFill />,
  },
];

const Socials: React.FC<SocialsProps> = ({
  containerStyles = "",
  iconsStyles = "",
}) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank">
          <div className={iconsStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
