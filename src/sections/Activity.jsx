import ac1 from "../images/ac1.jpg";
import ac2 from "../images/ac2.jpg";
import ac3 from "../images/ac3.jpg";
import ac4 from "../images/ac4.jpg";
import ac5 from "../images/ac5.jpg";
import ac6 from "../images/ac6.jpg";
import ac7 from "../images/ac7.jpg";
import ac8 from "../images/ac8.jpg";
import ac9 from "../images/ac9.jpg";
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const acData = [
  {
    id: 1,
    img: ac1,
    title: "Cycling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 2,
    img: ac2,
    title: "Video graph and blogger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 3,
    img: ac5,
    title: "Travelling and Hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 4,
    img: ac7,
    title: "Team building Cooking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 5,
    img: ac3,
    title: "Drawing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 6,
    img: ac6,
    title: "Drawing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 7,
    img: ac8,
    title: "Education Sharing ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 8,
    img: ac4,
    title: "Relaxing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
  {
    id: 9,
    img: ac9,
    title: "Medical treatment ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis distinctio consectetur.",
  },
];

const Activity = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <div id="activity" className="pt-32 w-full" ref={ref}>
        <div className="c-con">
          <div className={`animate__animated + ${inView && "animate__pulse"}`}>
            <h4 className="text-pri font-semibold tracking-[0.3rem] text-[22px] lg:text-[28px] text-center sm:text-left">
              Visit My Portfolio
            </h4>
            <h1 className="font-semibold text-[35px] lg:text-[44px] text-center sm:text-left">
              Team Activity
            </h1>
            <span className="bg-pri h-2 w-24 block rounded-lg mt-2 mb-8 sm:mb-16 mx-auto sm:mx-0"></span>
          </div>

          {/* swiper section */}

          <div
            className={`flex flex-row justify-center animate__animated + ${
              inView && "animate__pulse"
            }`}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={70}
              freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
            >
              {acData.map((e) => (
                <SwiperSlide key={e.id} className="">
                  <div className=" p-5 c-sh m-5 rounded-md">
                    <div className="overflow-hidden rounded-md ">
                      <img
                        src={e.img}
                        alt="no img"
                        className="w-[450px] h-[350px] object-cover"
                      />
                    </div>
                    <div className="mt-8">
                      <h1 className="text-[26px] font-semibold pb-1">
                        {e.title}
                      </h1>
                      <p className="text-[15px] font-medium leading-[22px] pb-3">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
