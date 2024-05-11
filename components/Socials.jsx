"use client";

import Link from "next/link";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://github.com/abishek-as",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/abishek-as",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
