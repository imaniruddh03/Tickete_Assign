import React, { useState } from "react";
import Image1 from '../assets/img_rectangle65.png'
import Image2 from '../assets/img_rectangle66.png'
import Image3 from '../assets/img_airplane.svg'
import Ticket from '../assets/img_television.svg'
import Calender from '../assets/img_calendar.svg'
import Clock from '../assets/img_clock.svg'
import User from '../assets/img_users.svg'
import Image4 from '../assets/img_divider_gray_300.svg'
import Image5 from '../assets/img_user_green_600.svg'
import Inbox from '../assets/img_inbox_blue_gray_400.svg'
import BtnImage from '../assets/img_location.svg'
import ImageCar from "./ImageCar";


const Query = () => {
  return (
    <div>
      <div className="bg-white border border-gray-300 border-solid flex sm: flex-col font-opensans items-start justify-start rounded-[24px] w-96 sm:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start pt-4 px-4 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="h-[198px] relative rounded-[16px] w-full ">
                    
                  
                  <div className="absolute inset-[0] justify-center m-auto rounded-[16px] w-full  ">
                    <ImageCar/>
                    
                    
                    <div className="absolute flex flex-col items-center justify-start left-[3%] top-[6%] w-auto">
                      <button className="cursor-pointer flex items-center justify-center min-w-[91px] rounded  p-1 bg-white-A700">
                        <div className="!text-gray-900 font-opensans font-semibold text-left text-xs">
                          Bestseller
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full ">
                <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-start justify-start w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <img
                        className="h-3.5 w-3.5"
                        src={Image3}
                        alt="airplane"
                        loading="lazy"
                      />
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <p className=" text-gray-900 text-right text-sm font-opensans font-semibold">
                          4.9
                        </p>
                        <p className=" text-gray-700 text-right text-sm w-auto font-normal font-opensans">
                          (4.5k)
                        </p>
                      </div>
                    </div>
                    <p className=" text-gray-700 text-right text-sm w-auto font-normal font-opensans">
                      •
                    </p>
                    <p className="text-left flex-1 text-gray-700 text-sm w-auto font-normal font-opensans">
                      &lt;category&gt;
                    </p>
                  </div>
                  <p className="text-left leading-[22.00px] max-w-[352px] md:max-w-full text-base text-gray-900 font-opensans font-semibold">
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <img
                        className="h-5 w-5"
                        src={Ticket}
                        alt="television"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <p className="text-left text-gray-900 text-sm w-auto font-opensans font-semibold">
                          &lt;ticket type - variant&gt;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-[7px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-center w-5">
                        <img
                          className="h-5 w-5"
                          src={Calender}
                          alt="calendar"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start pb-2 w-full">
                          <p className="text-left text-gray-900 text-sm w-auto font-opensans font-semibold">
                            &lt;day&gt;, &lt;month&gt; &lt;date&gt;
                          </p>
                        </div>
                        <div className="flex flex-col items-start justify-start pb-2 w-full">
                          <p className="text-left text-gray-700 text-xs w-auto font-normal font-opensans">
                            Duration: &lt;duration&gt;
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-center w-5">
                        <img
                          className="h-5 w-5"
                          src={Clock}
                          alt="clock"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start pb-2 w-full">
                          <p className="text-left text-gray-900 text-sm w-auto font-opensans font-semibold">
                            &lt;time&gt;
                          </p>
                        </div>
                        <div className="flex flex-col items-start justify-start pb-2 w-full">
                          <p className="text-left text-gray-700 text-xs w-auto font-normal font-opensans">
                            Operating hours: &lt;time&gt; to &lt;time&gt;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <img
                        className="h-5 w-5"
                        src={User}
                        alt="users"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <p className="text-left text-gray-900 text-sm w-auto font-opensans font-semibold">
                          5 guests
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start pb-5 w-full">
              
              <hr className=" w-full  border-b-2 border-dashed border-black" />
              <div className="flex flex-row items-center justify-between px-4 w-full">
                <div className="flex flex-col items-center justify-center w-auto">
                  <p className="text-left cursor-pointer text-gray-700 text-sm underline w-auto font-opensans font-semibold">
                    View payment summary
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="border-gray-300 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 px-4 w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start pb-2 w-auto">
                    <p className="text-left text-gray-900 text-lg w-auto font-opensans font-semibold">
                      Total payable
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-end pb-2 w-auto">
                    <p className=" text-gray-900 text-lg text-right w-auto font-opensans font-semibold">
                      $XXX
                    </p>
                  </div>
                </div>
                <button className="cursor-pointer flex items-center justify-center min-w-[135px]  rounded-[13px] p-1 bg-green-50">
                  <img
                    className="h-3.5 mb-[3px] mr-1"
                    src={Image5}
                    alt="user"
                    loading="lazy"
                  />
                  <div className="!text-green-600 font-opensans font-semibold text-left text-xs">
                    You saved &lt;price&gt;
                  </div>
                </button>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <p className="text-left text-gray-700 text-xs underline w-auto font-opensans font-semibold">
                  You will be charged in AED
                </p>
                <img
                  className="h-4 w-4"
                  src={Inbox}
                  alt="inbox_Three"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <p className="text-left leading-[20.00px] max-w-[352px] md:max-w-full text-gray-700 text-xs undefined">
                <span className="text-gray-700 font-opensans text-left font-normal">
                  By clicking “confirm &amp; pay”, you agree to{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  Tickete’s general terms and conditions
                </a>
                <span className="text-gray-700 font-opensans text-left font-normal">
                  {" "}
                  and{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-indigo-500 font-opensans text-left font-normal underline"
                >
                  cancellation policy
                </a>
                <span className="text-gray-700 font-opensans text-left font-normal">
                  .
                </span>
              </p>
              <button className="cursor-pointer flex items-center justify-center min-w-[352px] rounded-[16px]  p-[15px] bg-black text-gray-50">
                <img
                  className="h-[22px] mb-[3px] mr-3"
                  src={BtnImage}
                  alt="location"
                  loading="lazy"
                />
                <div className="!text-blue_gray-50 font-opensans font-semibold text-left text-lg">
                  Confirm &amp; pay
                </div>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Query;
