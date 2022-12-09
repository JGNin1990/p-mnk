import pp from "../images/unnamed.jpg";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Nav = () => {
  const [tog, setTog] = useState(false);
  console.log(tog);
  return (
    <>
      <div className="shadow-md sticky top-0 w-full z-[1000] bg-white">
        <div className="c-con c-flex py-6 justify-between ">
          <div className="">
            <HashLink to={"#"} className="c-flex">
              <div className="w-[60px] rounded-full overflow-hidden select-none cursor-pointer">
                <img src={pp} alt="" />
              </div>
              <h1 className="text-[32px] pl-3 font-semibold">MKN</h1>
            </HashLink>
          </div>
          {/* desktop menus */}
          <div className="c-flex text-[16px] font-medium hidden xl:flex">
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105 ">
              <HashLink to={"/#"}>Home</HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink to={"/#about"}>About</HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink to={"/#do"}>What I Do</HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink to={"/#activity"}>Team Activity</HashLink>
            </div>
            <div className="ml-32">
              <HashLink to={"/#footer"}>
                <button className="btn c-flex font-medium">
                  <span className="pr-3">Contact</span>
                  <FiPhoneCall className="text-[20px]" />
                </button>
              </HashLink>
            </div>
          </div>
          {/* mobile menu */}
          <div className="cursor-pointer xl:hidden ">
            {!tog ? (
              <FiMenu className="text-[40px]" onClick={() => setTog(!tog)} />
            ) : (
              <RxCross1 className="text-[40px]" onClick={() => setTog(!tog)} />
            )}
          </div>
        </div>

        <div className={`duration-500 + ${tog ? `scale-y-100` : `scale-y-0 `}`}>
          <div className="bg-gray-800 w-full min-h-[50vh] absolute top-0 flex flex-col justify-center items-center text-[20px] md:text-[30px] font-semibold text-white">
            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              Home
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              About
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              What I Do
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              Team Activity
            </div>

            <div className="py-5 duration-500 hover:scale-105 cursor-pointer">
              <HashLink to={"/#footer"}>
                <button className="bg-pri py-1 px-4 text-[17px] md:text-[20px] rounded-md text-white shadow-md c-flex font-medium">
                  <span className="pr-3">Contact</span>
                  <FiPhoneCall className="text-[20px]" />
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
