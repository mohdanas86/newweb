import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menu, setMenu] = useState("false");

  return (
    <>
      <div className="w-full shadow- relative">
        <div className="header w-full md:w-[80vw] px-4 md:px-0 py-4 text-white mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="logo md:text-2xl text-lg text-slate-900">
            <a href="/" className="font-semibold">
              Stomilar
            </a>
          </div>

          {/* NAVBAR */}
          <div
            className="nav text-slate-950 flex justify-center items-center text-2xl cursor-pointer"
            onClick={() => setMenu((e) => !e)}
          >
            <GiHamburgerMenu />
          </div>

          {/* OVERFLOW SIDEBAR FOR NAV */}
          <div
            className={`overplaynav w-full h-full fixed left-0 top-0 flex justify-start items-start bg-slate-50 ${
              menu ? "hidden" : "flex"
            }`}
            onClick={() => setMenu((e) => !e)}
          >
            <div
              className="w-[70%] md:w-[40%] h-full bg-white text-slate-950 py-5 px-4 md:px-10 md:py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <a href="/" className="font-semibold text-lg md:text-2xl ">
                Stomilar
              </a>

              <div className="">
                <ul className="flex flex-col gap-2 mt-5 list-none ">
                  <a href="/">
                    <li>home</li>
                  </a>
                  <a href="/">about</a>
                  <a href="/">blog</a>
                  <a href="/">services</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
