"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../public/avatar.png";
import klinPng from "../../../public/klin.png";

export default function HeroSection() {
  return (
    <div>
      <div id="about" className="mt-10 px-4 sm:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="mt-8 md:mt-0 md:mr-8 text-center md:text-left md:flex-1">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
              Hello, I'm <span className="text-orange-400">Karthik Nayak</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold mb-4">
              a passionate Web Developer
            </p>
            <p className="text-md text-justify sm:text-left mb-6">
              I specialize in crafting sleek and functional web applications. I
              use Golang for backend development and React with TypeScript to
              build engaging user experiences.
            </p>
            <button
              onClick={() => {
                window.open("#contact", "_self");
              }}
              className="w-full sm:w-32 h-12 bg-orange-400 border-black border-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:bg-orange-500 transition-colors"
            >
              Let's Connect
            </button>
          </div>
          <div className="flex justify-center md:justify-end md:flex-1">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <Image
                src={klinPng}
                alt="Karthik's Avatar"
                fill
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
                className="rounded-full shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
