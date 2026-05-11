"use client";

import { SocialIcons } from "@/components/ui/SocialIcons";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowRight, TbDownload } from "react-icons/tb";

export const HeroSection = React.memo(function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section
      id="about"
      className="relative flex flex-col justify-start pt-12 pb-10 md:pt-16"
    >
      {/* Background Gradients */}
      <div className="absolute -top-20 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
      <div className="absolute -right-20 -bottom-20 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-3xl opacity-50" />

      <div className="container z-10 mx-auto px-4 xl:px-24">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="mb-4 font-medium tracking-wide text-primary">
              Hi, I am
            </p>

            <h1 className="mb-6 text-5xl font-bold text-slate-100 md:text-7xl">
              {portfolioData.name}
            </h1>

            <h2 className="mb-6 bg-linear-to-r from-slate-100 to-slate-400 bg-clip-text text-2xl font-semibold text-slate-400 md:text-4xl">
              {portfolioData.role}
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-justify text-lg leading-relaxed text-slate-400 lg:mx-0 lg:text-left">
              {portfolioData.about}
            </p>

            <div className="flex flex-col items-center gap-8 lg:items-start">
              {/* Social Icons */}
              <SocialIcons variant="default" />

              {/* Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="flex w-42 items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-bold text-primary transition-all hover:bg-primary/10"
                >
                  Projects <TbArrowRight size={20} />
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1luDzcL22HLPrpWyOH5N1urDQotjCjFSz/view?usp=drive_link"
                  target="_blank"
                  className="flex w-42 items-center justify-center gap-2 rounded-full border-2 border-slate-700 px-8 py-3 font-bold text-slate-300 transition-all hover:bg-slate-800"
                >
                  Resume <TbDownload size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-1 justify-center lg:justify-end"
          >
            <div className="group relative h-64 w-64 perspective-1000 md:h-80 md:w-80 lg:h-96 lg:w-96">
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-4xl bg-linear-to-tr from-primary/25 to-secondary/25 opacity-40 rotate-6 transition-opacity duration-500" />

              {/* Rotated Layer */}
              <div className="absolute inset-0 rotate-3 rounded-4xl border border-white/10 bg-slate-800/90 transition-transform duration-500 group-hover:rotate-6" />

              {/* Main Image Container */}
              <div className="relative h-full w-full -rotate-3 rounded-4xl bg-linear-to-br from-primary to-secondary p-0.5 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-2px)] bg-slate-900">
                  <Image
                    src={portfolioData.profileImage}
                    alt={portfolioData.name}
                    fill
                    priority
                    quality={100}
                    unoptimized
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    className="object-cover contrast-105 saturate-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
