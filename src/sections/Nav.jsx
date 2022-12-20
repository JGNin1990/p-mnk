import pp from "../images/unnamed.jpg";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Nav = () => {
  const [tog, setTog] = useState(false);
  const [cc, setCc] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  // console.log(cc.one);
  return (
    <>
      <div className="shadow-md sticky top-0 w-full z-[1000] bg-white">
        <div className="c-con c-flex py-2 justify-between ">
          <div className="">
            <HashLink smooth to={"#"} className="c-flex">
              <div className="w-[60px] rounded-full overflow-hidden select-none cursor-pointer border-4 border-pri">
                <img src={pp} alt="" />
              </div>
              <h1 className="text-[32px] pl-3 font-semibold">MKN</h1>
            </HashLink>
          </div>
          {/* desktop menus */}
          <div className="c-flex text-[16px] font-medium hidden xl:flex">
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105 ">
              <HashLink
                smooth
                to={"/#"}
                onClick={() =>
                  setCc((pre) => ({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.one ? "text-pri" : ""}`}
              >
                Home
              </HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink
                smooth
                to={"/#about"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: true,
                    three: false,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.two ? "text-pri" : ""}`}
              >
                About
              </HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink
                smooth
                to={"/#do"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: true,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.three ? "text-pri" : ""}`}
              >
                What I Do
              </HashLink>
            </div>
            <div className="ml-16 cursor-pointer duration-500 hover:scale-105">
              <HashLink
                smooth
                to={"/#activity"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: false,
                    four: true,
                  }))
                }
                className={`duration-300 + ${cc.four ? "text-pri" : ""}`}
              >
                Team Activity
              </HashLink>
            </div>
            <div className="ml-32">
              <HashLink
                smooth
                to={"/#footer"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                  }))
                }
              >
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
              <HashLink
                smooth
                to={"/#"}
                onClick={() =>
                  setCc((pre) => ({
                    one: true,
                    two: false,
                    three: false,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.one ? "text-pri" : ""}`}
              >
                Home
              </HashLink>
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              <HashLink
                smooth
                to={"/#about"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: true,
                    three: false,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.two ? "text-pri" : ""}`}
              >
                About
              </HashLink>
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              <HashLink
                smooth
                to={"/#do"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: true,
                    four: false,
                  }))
                }
                className={`duration-300 + ${cc.three ? "text-pri" : ""}`}
              >
                What I Do
              </HashLink>
            </div>

            <div className="py-2 duration-500 hover:scale-105 cursor-pointer">
              <HashLink
                smooth
                to={"/#activity"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: false,
                    four: true,
                  }))
                }
                className={`duration-300 + ${cc.four ? "text-pri" : ""}`}
              >
                Team Activity
              </HashLink>
            </div>

            <div className="py-5 duration-500 hover:scale-105 cursor-pointer">
              <HashLink
                smooth
                to={"/#footer"}
                onClick={() =>
                  setCc((pre) => ({
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                  }))
                }
              >
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
