import React from "react";

import Divider from "../assets/img_divider.svg";
import Payment from "./Payment";
import FreqQuestion from "./Fquestion";
import Query from "./Query";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-8 items-start justify-start md:px-10 sm:px-5  w-full">
      <div className="flex md:flex-row flex-col gap-6 items-start justify-start max-w-[1200px] px-[10px] mx-auto ">
        <div className="flex  flex-col md:gap-10 gap-16 items-start justify-start max-w-[792px]  ">
          <div className="flex flex-col gap-8 items-start w-full">
            <div className="flex flex-col items-start justify-start pb-7 w-full">
              <p className="text-left sm:text-[43px] md:text-[49px] text-[57px] text-gray-900 tracking-[0.34px] w-auto font-medium">
                Confirm & pay
              </p>
            </div>
            <div className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-col items-start justify-start rounded-[16px] w-full">
              <div className="flex md:flex-col flex-row gap-3 items-start justify-start pl-5 pr-4 py-4 rounded-[16px w-full]">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start py-[3px] w-full">
                    <p className="text-left text-gray-900 text-sm w-full font-semibold">
                      Free Cancellation
                    </p>
                    <p className="text-left text-gray-700 text-sm w-full font-normal">
                      Tickets can be cancelled by the 13th December 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start w-full">
            <div className="flex flex-col gap-8 items-start justify-start">
              <div className="flex flex-col items-start justify-start max-w-[792px] w-full">
                <div className="flex flex-col items-start justify-start pb-4 w-full">
                  <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.14px] w-auto font-semibold">
                    Enter your Details
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start pb-4 w-full">
                  <p className="text-left text-base text-gray-700 w-auto font-normal">
                    We will be sending your ticket to the details below .
                    Booking for you friend? Add their details.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div class="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                      <div class="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                        <input
                          type="text"
                          placeholder="Full name"
                          className="flex w-full items-center justify-start md:h-auto p-4 rounded-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gap-6 grid md:grid-cols-2 grid-cols-1 justify-start max-w-[792px] min-h-[auto] w-full">
                  <div class="flex flex-1 flex-col items-start justify-start w-full">
                    <div class="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 items-center justify-start  rounded-[16px] w-full">
                      <div class="flex flex-col items-center justify-center p-0.5 w-6">
                        <img
                          class="h-5 w-5"
                          src="images/img_favorite.svg"
                          alt="favorite"
                          loading="lazy"
                        />
                      </div>
                      <select name="Country" className="w-full p-4 flex max-h-fit">
                        <option value="">India</option>
                        <option value="">America</option>
                        <option value="">Japan</option>
                        <option value="">Sri Lanka</option>
                        <option value="">New Zealand</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex flex-1 flex-col items-start justify-start w-full">
                    <div class="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                      <div class="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="flex w-full  md:h-auto items-center justify-start p-4 rounded-[16px] "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-1 flex-col items-start justify-start w-full">
                    <div class="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                      <div class="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                        <input
                          type="email"
                          placeholder="Email"
                          className="flex w-full items-center justify-start md:h-auto p-4 rounded-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start rounded-[16px] w-full">
                      <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                        <input
                          type="email"
                          placeholder="Confirm-Email"
                          className="flex w-full items-center justify-start md:h-auto p-4 rounded-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src={Divider} alt="" className="w-full h-1" />
            </div>
            <div className="flex flex-col gap-1 items-start justify-start"></div>
          </div>
          <div className="flex flex-col gap-8 items-start w-full">
            <div className="flex flex-col items-start justify-start max-w-[792px] w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.14px] w-auto font-opensans font-semibold">
                  Additional information
                </p>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <p className="text-left text-base text-gray-700 w-auto font-normal font-opensans">
                  We need a few more details to complete your reservation.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex md:flex-row flex-col gap-6 items-start justify-start max-w-[792px] w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                    <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                      <input
                        type="text"
                        placeholder="Input Label"
                        className="flex items-center justify-start h-14 rounded-[16px] p-4  w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 items-center justify-start  rounded-[16px] w-full">
                    <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                      <select
                        name="Select"
                        id=""
                        className="flex items-center justify-start h-14 rounded-[16px] p-4  w-full"
                      >
                        <option value="">--Select--</option>
                        <option value="">1</option>
                        <option value="">2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid flex md:flex-col flex-row gap-2.5 items-center justify-start  rounded-[16px] w-full">
                    <div className="flex flex-1 flex-row gap-1 items-center justify-start w-full">
                      <select
                        name="Select"
                        id=""
                        className="flex items-center justify-start h-14 rounded-[16px] p-4  w-full"
                      >
                        <option value="">--Multi-Select--</option>
                        <option value="">1</option>
                        <option value="">2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <img src={Divider} alt="" className="w-full h-1" />
            </div>
          </div>

          <div className="flex flex-col gap-8 items-start w-full">
            <Payment />
          </div>
        </div>
        <Query/>
      </div>
      <FreqQuestion/>
    </div>
  );
};

export default HeroSection;
