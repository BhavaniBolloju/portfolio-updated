import React from "react";
import logo from "../../Images/logo.png";
import resume from "../../Images/bhavani.pdf";

function HeaderNav() {
  return (
    <div>
      <header className="items-center flex justify-center w-[80%] m-auto realtive h-16">
        <div className="flex justify-between p-3 items-center nav-header z-50 ">
          <img src={logo} className="w-12" alt="" />
          <ul className="flex items-center gap-x-10 text-sm font-semibold">
            <li className="rounded-sm bg-[#cbb383]/80 text-[#12372d] px-2 py-1 hover:cursor-pointer hover:bg-[#c6ac77]">
              Contact Me
            </li>
            <li className="rounded-sm bg-[#cbb383]/80 text-[#12372d] px-2 py-1 hover:cursor-pointer hover:bg-[#c6ac77]  ">
              <a
                href={resume}
                className="flex items-center gap-2"
                target="_blank"
                download={resume}
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
