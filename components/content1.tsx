import type { NextPage } from "next";
import InputFields from "./input-fields";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[13px] pr-3 box-border max-w-full text-left text-13xl text-dark-gray font-rubik-16 ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[47px] max-w-full lg:flex-wrap mq750:gap-[23px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-full mq750:min-w-full mq450:gap-4">
          <div className="relative text-xl [text-decoration:underline] font-semibold font-open-sans-regular-16 mq450:text-base">
            Login and Checkout faster
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq450:gap-4">
            <div className="self-stretch rounded-2xl flex flex-col items-start justify-start gap-2">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1050:text-7xl">
                Contact Details
              </h1>
              <div className="self-stretch relative text-base font-semibold font-open-sans-regular-16 text-gray1-400">
                We will use these details to keep you inform about your
                delivery.
              </div>
            </div>
            <InputFields
              propWidth="342px"
              propFlex="unset"
              propMinWidth="unset"
              propAlignSelf="unset"
              propHeight="48px"
              placeholder="Email"
              propDisplay="unset"
              helperTextHere="Helper text here"
              showHelperTextHere={false}
              propAlignSelf1="unset"
              propFontFamily="Poppins"
              propColor="#bcbcbc"
            />
          </div>
          <div className="w-[704px] flex flex-col items-start justify-start gap-8 max-w-full mq750:gap-4">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1050:text-7xl">
              Shipping Address
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-base text-neutrals-gray-6 font-copy-caption">
              <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
                <InputFields
                  propWidth="unset"
                  propFlex="1"
                  propMinWidth="222px"
                  propAlignSelf="unset"
                  propHeight="48px"
                  placeholder="First Name*"
                  propDisplay="unset"
                  helperTextHere="Helper text here"
                  showHelperTextHere={false}
                  propAlignSelf1="unset"
                  propFontFamily="Poppins"
                  propColor="#bcbcbc"
                />
                <InputFields
                  propWidth="unset"
                  propFlex="1"
                  propMinWidth="222px"
                  propAlignSelf="unset"
                  propHeight="48px"
                  placeholder="Last Name*"
                  propDisplay="unset"
                  helperTextHere="Helper text here"
                  showHelperTextHere={false}
                  propAlignSelf1="unset"
                  propFontFamily="Poppins"
                  propColor="#bcbcbc"
                />
              </div>
              <InputFields
                propWidth="unset"
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
                propHeight="unset"
                placeholder="Find Delivery Address*"
                propDisplay="inline-block"
                helperTextHere="Start typing your street address or zip code for suggestion"
                showHelperTextHere
                propAlignSelf1="stretch"
                propFontFamily="Inter"
                propColor="#36323b"
              />
              <InputFields
                placeholder="Phone Number*"
                helperTextHere="E.g. (123) 456-7890"
                showHelperTextHere
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[47px] max-w-full lg:flex-1 mq750:gap-[23px] mq750:min-w-full">
          <div className="self-stretch rounded-3xl bg-gray1-100 flex flex-col items-start justify-start p-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1050:text-7xl">
                Order Summary
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xl font-open-sans-regular-16">
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                  <div className="relative font-semibold mq450:text-base">
                    1 ITEM
                  </div>
                  <div className="relative font-semibold text-gray1-400 inline-block min-w-[76px] mq450:text-base">
                    $130.00
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
                  <div className="relative font-semibold mq450:text-base">{`Delivery `}</div>
                  <div className="relative font-semibold text-gray1-400 inline-block min-w-[53px] mq450:text-base">
                    $6.99
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5">
                  <div className="relative font-semibold mq450:text-base">
                    Sales Tax
                  </div>
                  <div className="relative font-semibold text-gray1-400 inline-block min-w-[8px] mq450:text-base">
                    -
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-5 text-5xl font-rubik-16 mq450:flex-wrap">
                  <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[60px] mq450:text-lgi">
                    Total
                  </h3>
                  <div className="relative font-semibold text-gray1-400 mq450:text-lgi">
                    $130.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-gray1-100 flex flex-col items-start justify-start p-6 gap-6 text-5xl">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                Order Details
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-6 text-xl mq750:flex-wrap">
              <img
                className="h-[158px] w-[138.5px] relative rounded-3xl object-cover mq750:flex-1"
                loading="lazy"
                alt=""
                src="/rectangle-52@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[166px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="relative font-semibold mq450:text-base">
                        DROPSET TRAINER SHOES
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-1 text-base text-gray1-400 font-open-sans-regular-16">
                    <div className="self-stretch relative font-semibold">{`Men’s Road Running Shoes `}</div>
                    <div className="self-stretch relative font-semibold">
                      Enamel Blue/ University White
                    </div>
                  </div>
                </div>
                <div className="w-[175px] flex flex-row items-center justify-between gap-5 text-base text-gray1-400 font-open-sans-regular-16">
                  <div className="relative font-semibold">Size 10</div>
                  <div className="relative font-semibold inline-block min-w-[83px]">
                    Quantity 1
                  </div>
                </div>
                <div className="relative font-semibold text-blue mq450:text-base">
                  $130.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
