import { useState } from "react";
import cook from "../images/ido.jpg";
import ac3 from "../images/ac3.jpg";
import ac10 from "../images/ac10.jpg";
import { useInView } from "react-intersection-observer";

const Ido = () => {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
  });

  const { ref, inView } = useInView();

  return (
    <>
      <div id="do" className="pt-32 w-full" ref={ref}>
        <div className="c-con">
          <div className={`animate__animated + ${inView && "animate__pulse"}`}>
            <h4 className="text-pri font-semibold tracking-[0.3rem] text-[22px] xl:text-[28px] text-center sm:text-left">
              I Work for
            </h4>
            <h1 className="font-semibold text-[35px] xl:text-[44px] text-center sm:text-left">
              What I Do
            </h1>
            <span className="bg-pri h-2 w-24 block rounded-lg mt-2 mb-16 mx-auto sm:mx-0"></span>
          </div>
          <div className="c-flex justify-center md:justify-between flex-wrap">
            <div
              className={`w-[60%] md:w-[31%]  overflow-hidden rounded-md relative cursor-pointer border-[2px] border-pri group shadow-lg duration-500  animate__animated + ${
                inView && "animate__pulse"
              }`}
              onClick={() => setActive((e) => ({ ...e, one: !active.one }))}
            >
              <div className="w-full group-hover:scale-110 duration-500">
                <img src={ac10} alt="" />
              </div>

              <div
                className={` w-full h-full z-10 absolute top-0 duration-500 + ${
                  active.one ? " bg-[#00000060] " : "bg-[#00000000]"
                }`}
              ></div>
              <div
                className={`absolute bottom-[7%] px-8 z-50 duration-500  + ${
                  active.one ? "opacity[100]" : "opacity-0"
                }`}
              >
                <h1 className="text-[15px] sm:text-[25px] text-white font-semibold">
                  Video graph and blogger
                </h1>
                <p className="text-[10px] lg:text-[15px] text-white font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ut fugiat itaque laudantium consequuntur eum.
                </p>
              </div>
            </div>
            <div
              className={`w-[60%] md:w-[31%] mt-10 md:mt-0   overflow-hidden rounded-md relative cursor-pointer border-[2px] border-pri group shadow-lg duration-500 hover:scale-105 animate__animated + ${
                inView && "animate__pulse"
              }`}
              onClick={() => setActive((e) => ({ ...e, two: !active.two }))}
            >
              <div className="w-full group-hover:scale-110 duration-500">
                <img src={ac3} alt="" />
              </div>

              <div
                className={` w-full h-full z-10 absolute top-0 duration-500 + ${
                  active.two ? " bg-[#00000060] " : "bg-[#00000000]"
                }`}
              ></div>
              <div
                className={`absolute bottom-[7%] px-8 z-50 duration-500  + ${
                  active.two ? "opacity[100]" : "opacity-0"
                }`}
              >
                <h1 className="text-[15px] sm:text-[25px] text-white font-semibold">
                  Drawing
                </h1>
                <p className="text-[10px] lg:text-[15px] text-white font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ut fugiat itaque laudantium consequuntur eum.
                </p>
              </div>
            </div>
            <div
              className={`w-[60%] md:w-[31%] mt-10 md:mt-0   overflow-hidden rounded-md relative cursor-pointer border-[2px] border-pri group shadow-lg duration-500 hover:scale-105 animate__animated + ${
                inView && "animate__pulse"
              }`}
              onClick={() => setActive((e) => ({ ...e, three: !active.three }))}
            >
              <div className="w-full group-hover:scale-110 duration-500">
                <img src={cook} alt="" />
              </div>

              <div
                className={` w-full h-full z-10 absolute top-0 duration-500 + ${
                  active.three ? " bg-[#00000060] " : "bg-[#00000000]"
                }`}
              ></div>
              <div
                className={`absolute bottom-[7%] px-8 z-50 duration-500  + ${
                  active.three ? "opacity[100]" : "opacity-0"
                }`}
              >
                <h1 className="text-[15px] sm:text-[25px] sm:leading-[35px] leading-[25px]  text-white font-semibold">
                  Counselling Team building Cooking
                </h1>
                <p className="text-[10px] lg:text-[15px] text-white font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, ut fugiat itaque laudantium consequuntur eum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ido;
