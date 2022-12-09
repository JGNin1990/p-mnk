import pp from "../images/unnamed.jpg";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SlArrowUp } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <div
        id="footer"
        className={`mt-32 w-full bg-[#343A40] animate__animated + ${
          inView && "animate__flipInX"
        }`}
        ref={ref}
      >
        <div className="c-con pt-14 text-white relative">
          <HashLink to={"#"}>
            <div className="c-flex justify-center md:justify-start">
              <div className="w-[60px] rounded-full overflow-hidden select-none cursor-pointer">
                <img src={pp} alt="" />
              </div>
              <h1 className="text-[32px] pl-3 font-semibold">M K N</h1>
            </div>
          </HashLink>
          <p className=" text-[20px] py-5 text-center md:text-left">
            Do you wanna add custom text here?
          </p>
          <h3 className="text-[24px] font-medium pb-4 text-center md:text-left">
            Follow Me
          </h3>

          {/* social icons */}
          <div className="c-flex pb-16 justify-center md:justify-start">
            <div className="border py-2 px-3 rounded-2xl cursor-pointer hover:bg-blue-700 hover:border-blue-700 duration-500">
              <NavLink to={"/"}>
                <FiFacebook className="text-[25px]" />
              </NavLink>
            </div>
            <div className="border py-2 px-3 rounded-2xl cursor-pointer hover:bg-blue-700 hover:border-blue-700 duration-500 mx-3">
              <NavLink to={"/"}>
                <FiLinkedin className="text-[25px]" />
              </NavLink>
            </div>
            <div className="border py-2 px-3 rounded-2xl cursor-pointer hover:bg-blue-700 hover:border-blue-700 duration-500">
              <NavLink to={"/"}>
                <FiTwitter className="text-[25px]" />
              </NavLink>
            </div>
          </div>

          {/* copyright */}
          <span className="w-full h-[1px] bg-gray-500 block"></span>
          <p className="font-medium text-[18px] py-7 text-center">
            Copyright 2022 Access Code.All Rights Reversed
          </p>

          {/* up btn */}
          <HashLink to={"#"}>
            <div className="hover:bg-pri hover:text-white p-5 rounded-full cursor-pointer border-2 text-pri border-pri duration-500 absolute lg:top-[140px] lg:right-[250px] top-[25%] right-[17%] hidden md:block">
              <SlArrowUp className="text-[30px]" />
            </div>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
