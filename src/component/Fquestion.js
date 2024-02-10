import React from "react";
import Illustration from "../assets/img_aboutillustrations.svg";
import Tryy from "./Accordion";

const Fquestion = () => {
  return (
    <div classNameName=" w-full ">
      <div className="flex flex-col items-center justify-center font-opensans w-full  px-6   ">
        <div className="flex md:flex-row flex-col gap-6 items-center  justify-center w-full md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-[386px] px-[100px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.14px] w-auto font-opensans font-semibold">
                  Frequently asked questions
                </p>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-[346px] sm:w-full">
                <p className="text-left text-base text-gray-700 w-auto font-normal font-opensans">
                  Here are some of our most asked questions.{" "}
                </p>
              </div>
            </div>
            <div className="bg-gray-50_01 flex sm:flex-row flex-col gap-5 items-start justify-between p-6 sm:px-5 rounded-[16px] w-[346px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <p className="text-left leading-[26.00px] max-w-[240px] md:max-w-full text-gray-900 text-lg font-opensans font-semibold">
                  Still need help? <br />
                  We’re here for you.
                </p>
                <button className="!text-blue_gray-50 cursor-pointer font-opensans font-semibold min-w-[129px]  text-base text-center rounded-[13px] p-[15px] bg-black text-gray-50">
                  Chat with us
                </button>
              </div>
              <img
                className="h-[100px] w-[157px]"
                src={Illustration}
                alt="aboutillustrati"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center  w-full">
            <Tryy />
    
          </div>
        </div>
        <div className="bg-gray-300 h-px w-full"></div>
      </div>
    </div>
  );
};

export default Fquestion;
