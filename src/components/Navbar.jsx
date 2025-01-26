import React from "react";
import Socials from "./Socials";

function Navbar() {
  return (
    <div>
      <nav className="">
        <div className="flex ">
          <div className="hidden sm:block">
            <ul className="flex justify-start p-5 gap-12 text-sm ">
              <a href="#section1">
                <li>Home</li>
              </a>
              <a href="#section2">
                <li>About</li>
              </a>
              <a href="#section3">
                <li>Project</li>
              </a>
              <a href="#section4">
                <li>Achivements</li>
              </a>
              <a href="#section5">
                {" "}
                <li>Certifications</li>
              </a>
              <a href="#section6">
                {" "}
                <li>Conatcts</li>
              </a>
              <a
                href="https://drive.google.com/file/d/12AEPqwJBUwawQkvAskj3z06Hm2obUw0E/view?usp=sharing"
                target="_blank"
              >
                <li>Resume</li>
              </a>
            </ul>
          </div>
          <div className="sm:ml-auto ">
            <Socials />
          </div>
         
          <div className="flex  justify-center items-center ">
           <h1 className="sm:hidden block">| Welcome!!</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
