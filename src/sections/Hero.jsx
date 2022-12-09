import b1 from "../images/blob.svg";
import b2 from "../images/blob2.svg";
import { useInView } from "react-intersection-observer";

// import hero from "../images/hero.jpg";

const Hero = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <div id="1" className="w-full" ref={ref}>
        <div className="c-flex  flex-col-reverse lg:flex-row c-con justify-center lg:justify-between min-h-[80vh]">
          <div
            className={`w-full  lg:w-[45%] text-center lg:text-left + ${
              inView && "animate__animated animate__fadeInLeft"
            }`}
          >
            <h1 className="xl:text-[50px] sm:text-[40px] text-[30px]  font-bold">
              Hi, I'm <span className="text-pri">Min Khant Nyunt</span>
            </h1>
            <h1 className=" text-[38px] font-medium">Project Officer</h1>
            <p className="text-[16px] lg:w-[60%] text-gray-500 py-7">
              Hello, this is testing content and you wann fill it custom content
              ok.
            </p>
            <button className="btn font-medium">More Info</button>
            <button className="btn font-medium ml-4">Send Mail</button>
          </div>
          <div
            className={`relative + ${
              inView && "animate__animated animate__fadeInRight"
            }`}
          >
            <div className="w-[400px] xl:w-[600px] top-0 absolute">
              <img src={b1} alt="" />
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
