import React from "react";
import Image from "next/image";
import pcPng from "../../../public/coder.png";

export default function Introduction() {
  return (
    <div className="bg-gradient-to-r from-red-300 to-red-300 rounded-md pt-5 px-4 mt-10 sm:px-5  shadow-md">
      <div className="text-lg sm:text-xl font-bold mb-4 py-2 px-4 bg-red-100 border-4 border-black shadow-[5px_5px_0_0_black] rounded-md inline-block">
        ABOUT ME
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={pcPng}
            alt="Coder illustration"
            width={400}
            height={400}
            className=" max-w-[250px] md:max-w-full lg:w-[18rem] lg:h-[18rem]   md:w-[14rem] md:h-[14rem] w-[10rem] h-[10rem]"
          />
        </div>
        <p className="w-full md:w-2/3  text-sm md:text-md lg:text-lg text-slate-800 text-justify sm:text-left ">
          Hi, I'm Karthik Nayak, a dedicated web developer with a strong focus
          on building efficient and scalable applications. My journey in tech is
          driven by a passion for problem-solving and creating user-friendly
          experiences. I specialize in Golang and React, where I enjoy
          developing both the backend logic and the frontend interface.
          <br />
          <br />
          <span className="hidden md:inline">
            I'm currently expanding my expertise in Next.js to build even more
            dynamic and responsive applications. I'm always on the lookout for
            new tools and techniques to refine my craft. Outside of coding, I
            enjoy exploring tech blogs and contributing to open-source projects.
            Let's connect and collaborate on something great!
          </span>
        </p>
      </div>
    </div>
  );
}
