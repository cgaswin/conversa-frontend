import React from "react";

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
          <h1 className="uppercase">
            Learning to speak english has never been easier
          </h1>
          <div className="hidden sm:block">
            <img src="../as" alt="" />
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Landing;
