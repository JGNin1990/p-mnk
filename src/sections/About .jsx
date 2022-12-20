import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <div id="about" className="w-full pt-20 lg:pt-10">
        <div
          className={`c-con sm:text-left text-center animate__animated + ${
            inView && "animate__pulse"
          }`}
        >
          <h4 className="text-pri font-semibold tracking-[0.3rem] text-[20px] lg:text-[28px]">
            Know Me More
          </h4>
          <h1 className="font-semibold text-[28px] lg:text-[35px] xl:text-[44px]">
            About Me
          </h1>
          <span className="bg-pri h-2 w-24 block rounded-lg mt-2 mb-5 lg:mb-10 mx-auto sm:mx-0"></span>
          <p
            className="text-gray-700 text-[15px] lg:text-[17px] leading-[25px] lg:leading-[30px] text-justify"
            ref={ref}
          >
            I am an enthusiastic, self-motivated, reliable, responsible and hard
            working person. I am a mature team worker and adaptable to all
            challenging situations. I am able to work well both in a team
            environment as well as using own initiative. I am able to work well
            under pressure and adhere to strict deadlines.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
