import React from "react";

const Summary = () => {
  return (
    <>
      <div id="3" className="w-full pt-10 lg:pt-32">
        <div className="c-con">
          <h1 className="text-pri text-[20px] lg:text-[28px] font-semibold tracking-[0.3rem] py-10">
            Summary
          </h1>
          <div className="c-flex flex-wrap justify-evenly">
            <div className="w-[80%] sm:w-[60%] md:w-[35%] flex flex-col">
              <h1 className="text-[27px] lg:text-[35px] font-semibold pb-7">
                My Education
              </h1>
              <div className="c-sh p-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  2013-2014
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  Diploma in IT
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  KMD & NMC
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7">
                  This is content from education.
                </p>
              </div>
              <div className="c-sh p-10 mt-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  2013-2014
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  Diploma in IT
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  KMD & NMC
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7">
                  This is content from education.
                </p>
              </div>
            </div>
            <div className="w-[80%] sm:w-[60%]  md:w-[35%] flex flex-col mt-[40px] md:mt-0">
              <h1 className="text-[27px] lg:text-[35px] font-semibold pb-7">
                My Exprience
              </h1>
              <div className="c-sh p-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  2013-2014
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  IT Support
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  KMD & NMC
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7">
                  This is content from education.
                </p>
              </div>
              <div className="c-sh p-10 mt-10">
                <div className="text-white bg-pri py-2 px-4 inline-block rounded-md font-[500] my-7">
                  2013-2014
                </div>
                <h1 className="lg:text-[30px] font-semibold text-[22px]">
                  IT Support
                </h1>
                <h4 className="font-medium text-[15px] lg:text-[18px] text-gray-700">
                  KMD & NMC
                </h4>
                <p className="text-[14px] lg:text-[17px] font-[500] pt-7">
                  This is content from education.
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
