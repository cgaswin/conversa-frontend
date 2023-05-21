import React from "react";
import heroImg from "../assets/hero.png"

const Landing = () => {
  return (
    <div className="">
      <nav className="flex justify-between gap-3 px-2 py-8 ">
        <div className="px-32">LOGO</div>
        <div className="hidden sm:flex  px-20 gap-20 list-none">
          <li>Home</li>
          <li>About</li>
          <li>features</li>
        </div>
      </nav>

      <main className="flex justify-center align-middle">
        <div className="flex">
          <h1 className="uppercase font-out">
            Learning to speak english has never been easier
          </h1>
          <div className="hidden sm:block sm:w-[350px] sm:h-[520px]">
            <img src={heroImg} alt="hero image" />
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Landing;
