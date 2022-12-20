import b1 from "../images/blob.svg";
import b2 from "../images/blob2.svg";
import aa from "../images/aa.png";
import { useInView } from "react-intersection-observer";
import Emailbox from "../components/Emailbox";
import { useDispatch, useSelector } from "react-redux";
import { showModel } from "../rtk/showSlicer";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  const ss = useSelector((state) => state.show);
  // console.log(showBox);
  return (
    <>
      <div id="1" className="w-full" ref={ref}>
        {/* for modal box */}
        <Emailbox />
        {/* for main */}
        <div
          className={`c-flex  flex-col-reverse lg:flex-row c-con justify-center lg:justify-between sm:h-[80vh] mt-20 sm:mt-0 + ${
            ss && "overflow-hidden"
          }`}
        >
          <div
            className={`w-full  lg:w-[45%] text-center lg:text-left + ${
              inView && "animate__animated animate__pulse"
            }`}
          >
            <h1 className="xl:text-[50px] sm:text-[40px] text-[25px]  font-bold">
              Hi, I'm <span className="text-pri">Min Khant Nyunt</span>
            </h1>
            <h1 className=" xl:text-[38px] sm:text-[30px] text-[23px]  font-medium">
              Project Officer
            </h1>
            <p className="text-[16px] lg:w-[60%] text-gray-500 sm:py-7 py-5">
              Hello, this is testing content and you wann fill it custom content
              ok.
            </p>
            <HashLink smooth to={"/#about"}>
              <button className="btn font-medium">More Info</button>
            </HashLink>
            <button
              className="btn font-medium ml-4"
              onClick={() => dispatch(showModel())}
            >
              Send Mail
            </button>
          </div>
          <div
            className={`relative + ${
              inView && "animate__animated animate__pulse"
            }`}
          >
            <div className="w-[400px] xl:w-[600px] top-0 absolute">
              <img src={b1} alt="" />
            </div>
            <div className="w-[300px] xl:w-[450px] xl:-top-[103px] -top-[70px] absolute  left-[42px] xl:left-[75px]">
              <img src={aa} alt="" className="w-full" />
            </div>
            <div className=" top-0 w-[400px] xl:w-[600px]">
              <img src={b2} alt="" />
            </div>
            {/* <div className="">
              <img src={hero} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
