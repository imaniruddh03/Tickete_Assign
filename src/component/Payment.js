import React from "react";
import CreditCard from "../assets/img_creditcard.svg";
import Setting from "../assets/img_settings.svg";
import User from "../assets/img_user.svg";
import Contrast from "../assets/img_contrast.svg";
import Thumbs from "../assets/img_thumbsup.svg";
import ConfiBtn from "../assets/img_location.svg";
import Gpay from "../assets/img_settings_blue_gray_400_01_10x25.svg";
import Apple from "../assets/img_settings_blue_gray_400_01.svg";
import Information from "../assets/img_inbox_blue_gray_400.svg";
import DarkInfo from "../assets/img_inbox_black_900.svg";

const Payment = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-col items-start justify-start max-w-[792px] w-full">
          <div className="flex flex-col items-start justify-start pb-4 w-full">
            <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.14px] w-auto font-opensans font-semibold">
              Select your mode of payment
            </p>
          </div>
          <div className="flex flex-col items-start justify-start pb-4 w-full">
            <p className="text-left text-base text-gray-700 w-auto font-normal font-opensans">
              Payments with Tickete are secure and encrypted.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <div className="bg-white-A700 border border-gray-900 border-solid flex flex-col gap-8 items-start justify-start pt-7 sm:px-5 px-6 rounded-[16px] w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start px-[7px] rounded-[3px] w-full">
                    <img
                      className="h-5 w-5"
                      src={CreditCard}
                      alt="creditcard"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="text-left text-base text-gray-900 w-auto font-opensans font-semibold">
                  Credit &amp; debit card
                </p>
              </div>
              <div className="bg-gray-900 flex flex-col h-6 items-center justify-start p-2 rounded-[50%] w-6">
                <div className="bg-gray-50 h-2 rounded-[50%] w-2"></div>
              </div>
            </div>
            <div className=" grid sm:grid-cols-3 md:grid-cols-3 grid-cols-3 items-start justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-1 rounded w-10">
                <img className="h-2" src={Setting} alt="settings" loading="lazy" />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-1 rounded w-10">
                <img className="h-[11px]" src={User} alt="user" loading="lazy" />
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[3px] rounded w-10">
                <img className="h-3" src={Contrast} alt="contrast" loading="lazy" />
              </div>
            </div>
            <div className="gap-7 grid md:grid-cols-2 grid-cols-1 items-start min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                  <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                    <input
                      type="text"
                      placeholder="Name on the Card*"
                      className="text-left text-base flex  font-normal font-opensans w-full p-4 rounded-[16px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start px-[7px] rounded-[3px] w-full">
                      <img
                        className="h-5 w-5"
                        src={CreditCard}
                        alt="creditcard"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                    <input
                      type="number"
                      placeholder="Card Number*"
                      className="flex w-full rounded-[16px] p-4  "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start  rounded-[16px] w-full">
                  <div className="flex flex-row gap-1 h-[25px] md:h-auto items-center justify-start w-full">
                    <input
                      type="number"
                      placeholder="Expiry Date*"
                      className="flex w-full rounded-[16px] p-4  "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col h-14 md:h-auto items-center justify-start rounded-[16px] w-full">
                  <div className="flex flex-row gap-1 h-6 md:h-auto items-center justify-start w-full">
                    <input
                      type="number"
                      placeholder="CVV"
                      className="flex w-full rounded-[16px] p-4  "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-gray-300 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start relative w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div className="flex flex-1 flex-row gap-1.5 items-start  justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-auto">
                      <p className="text-left text-gray-900 text-lg w-auto font-opensans font-semibold">
                        Total payable:
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-end pb-2 w-auto">
                      <p className=" text-gray-900 text-lg text-right w-auto font-opensans font-semibold">
                        $XXX
                      </p>
                    </div>
                  </div>
                  <button className="cursor-pointer flex items-center justify-right absolute right-2 min-w-[132px] rounded-[13px] p-1 bg-green-600">
                    <img
                      className="h-3.5 mb-[3px] mr-1"
                      src={Thumbs}
                      alt="thumbs_up"
                      loading="lazy"
                    />
                    <div className="!text-green-50 font-opensans font-semibold text-left text-xs">
                      You save &lt;price&gt;
                    </div>
                  </button>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <p className="text-left text-gray-700 text-xs underline w-auto font-opensans font-semibold">
                    You will be charged in AED
                  </p>
                  <img
                    className="h-4 w-4 cursor-pointer"
                    src={Information}
                    alt="inbox_One"
                    loading="lazy"
                    
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <p className="text-left text-gray-700 text-xs w-full undefined">
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
                <button className="cursor-pointer flex items-center justify-center min-w-[220px] rounded-[16px]  p-[15px] bg-black text-gray-50">
                  <img
                    className="h-[22px] mb-[3px] mr-3"
                    src={ConfiBtn}
                    alt="location"
                    loading="lazy"
                  />
                  <div className="!text-blue_gray-50 font-opensans font-semibold text-center text-lg">
                    Confirm &amp; pay
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-5 items-center w-full"
            orientation="vertical"
          >
            <div className="bg-gray-50_01 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-start w-auto">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                    <div className="bg-gray-300_01 flex flex-col items-center justify-end p-1 rounded-md w-full">
                      <img
                        className="h-2.5"
                        src={Apple}
                        alt="logo"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-left text-base text-blue_gray-400_01 w-auto font-opensans font-semibold">
                    Coming soon
                  </p>
                </div>
                <div className="bg-gray-300_01 border border-blue_gray-100 border-solid h-6 rounded-[50%] w-6"></div>
              </div>
            </div>
            <div className="bg-gray-50_01 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <div className="flex flex-row gap-[15px] items-end justify-start w-auto">
                  <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
                    <div className="bg-gray-300_01 flex flex-col items-center justify-end p-1 rounded-md w-full">
                      <img
                        className="h-2.5"
                        src={Gpay}
                        alt="settings"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-left text-base text-blue_gray-400_01 w-auto font-opensans font-semibold">
                    Coming soon
                  </p>
                </div>
                <div className="bg-gray-300_01 border border-blue_gray-100 border-solid h-6 rounded-[50%] w-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col font-opensans items-start justify-start w-full mt-7">
        <div className="flex flex-col items-start justify-start pb-4 w-full">
          <p className="text-left text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[0.14px] w-auto font-opensans font-semibold">
            Total Payable: $XXX
          </p>
        </div>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start rounded-[16px] w-full">
          <div className="flex md:flex-row flex-col gap-3 items-start justify-start pl-5 pr-4 py-4 rounded-[16px] w-full">
            <div className="flex flex-row items-center justify-center pt-1.5 w-auto">
              <img
                className="h-4 w-4"
                src={DarkInfo}
                alt="inbox_Two"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-row items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start py-[3px] w-full">
                <p className="text-left text-gray-900 text-sm w-full font-opensans font-semibold">
                  You will be charged in AED
                </p>
                <p className="text-left leading-[20.00px] max-w-[728px] md:max-w-full text-gray-700 text-sm font-normal font-opensans">
                  The price shown here is in US Dollar (USD) as per the current
                  conversion rate. You will be charged in United Arab Emirates
                  Dirham (AED).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
