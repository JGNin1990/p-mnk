import React from "react";
import { useInView } from "react-intersection-observer";

const Summary = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <div className="w-full pt-10 lg:pt-32" ref={ref}>
        <div className="c-con">
          <div className={`animate__animated + ${inView && "animate__pulse"} `}>
            <h1 className="text-pri text-[20px] lg:text-[28px] font-semibold tracking-[0.3rem] sm:py-10 py-3 text-center sm:text-left" >
              Summary
            </h1>
          </div>
          <h1 className="text-[27px] lg:text-[35px] font-semibold pb-7 text-center">
            My Education and Exprience
          </h1>
          <div className="c-flex flex-wrap justify-evenly">
            <div
              className={`w-[80%] sm:w-[60%] md:w-[35%] flex flex-col + ${
                inView && "animate__animated animate__pulse"
              }`}
            >
              {/* <h1 className="text-[27px] lg:text-[35px] font-semibold pb-7">
                My Education
              </h1> */}
              <div className="c-sh p-5 lg:p-10 w-full">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  2013-2014
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  M.B,B.S
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  ( U M M G )
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7 text-gray-500">
                  University of Medicine, Megway from January 2013 to January
                  2016.
                </p>
              </div>
              <div className="c-sh p-5 lg:p-10 mt-10 w-full">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  Jan 2018 - Feb 2019
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  Team Leader in CPI
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  ( Community Partner International )
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] text-gray-500 pt-7">
                  Team Leader in Community Partner International from January
                  2018 to February 2019.
                </p>
              </div>
            </div>
            <div
              className={`w-[80%] sm:w-[60%]  md:w-[35%] flex flex-col mt-[40px] md:mt-0 + ${
                inView && "animate__animated animate__pulse"
              }`}
            >
              {/* <h1 className="text-[27px] lg:text-[35px] font-semibold pb-7">
                My Exprience
              </h1> */}
              <div className="c-sh p-5 lg:p-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  March 2019 - Dec 2019
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  Training Team Leader
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  ( M S I )
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7 text-gray-500">
                  Training Team Leader in MSI Reproductive Choices Myanmar.
                </p>
              </div>
              <div className="c-sh p-5 lg:p-10 mt-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  Jan 2020 - present
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  Project Officer
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  ( M S I )
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7 text-gray-500">
                  Project Officer in MSI Reproductive Choices Myanmar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
