import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vishal RK</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Computer Science Engineering student with a strong foundation
          in programming, algorithms, and software development. I have experience
          in languages like Python, Java, and C++, and am passionate about areas
          such as AI, machine learning, and software engineering.
        </p>
      </div>
      {/* View Resume Button */}
      <div>
        <a 
          href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:ff866e56-f7af-3afd-aa60-3f8173d8efe8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-designColor hover:bg-white hover:text-designColor transition duration-300"
        >
          View Resume
        </a>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner;
