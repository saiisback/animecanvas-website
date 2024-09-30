import type { NextPage } from "next";
import Button from "./button";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1320px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-13xl text-dark-gray font-rubik-16 mq750:gap-5 ${className}`}
    >
      <div className="w-[1286.8px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start gap-[47px] max-w-full mq750:gap-[23px] mq1125:flex-wrap">
          <div className="flex-1 rounded-2xl bg-gray1-100 flex flex-col items-start justify-start p-6 box-border gap-12 max-w-full mq750:min-w-full mq450:gap-6 mq450:pt-5 mq450:pb-5 mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1025:text-7xl">
                Your Bag
              </h2>
              <div className="self-stretch relative text-base font-open-sans-regular-16 text-gray1-400">
                Items in your bag not reserved- check out now to make them
                yours.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-5xl mq750:flex-wrap">
              <img
                className="h-[225px] w-[207.8px] relative rounded-3xl object-cover mq750:flex-1"
                loading="lazy"
                alt=""
                src="/rectangle-51@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-12 min-w-[326px] max-w-full mq750:gap-6">
                <div className="self-stretch flex flex-row items-start justify-start gap-20 max-w-full mq750:gap-10 mq750:flex-wrap mq450:gap-5">
                  <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[211px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-2">
                      <div className="relative font-semibold mq450:text-lgi">
                        DROPSET TRAINER SHOES
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-xl text-gray1-400 font-open-sans-regular-16">
                        <div className="self-stretch relative font-semibold mq450:text-base">{`Men’s Road Running Shoes `}</div>
                        <div className="self-stretch relative font-semibold mq450:text-base">
                          Enamel Blue/ University White
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-10 text-xl text-gray1-400 font-open-sans-regular-16 mq450:gap-5 mq450:flex-wrap">
                      <div className="flex flex-row items-center justify-start gap-6">
                        <div className="relative font-semibold mq450:text-base">
                          Size 10
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevron-down.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-6">
                        <div className="relative font-semibold inline-block min-w-[103px] mq450:text-base">
                          Quantity 1
                        </div>
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevron-down.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative font-semibold text-blue mq450:text-lgi">
                    $130.00
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/bin.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6 max-w-full mq750:min-w-full mq1125:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1025:text-7xl">
                Order Summary
              </h2>
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
                  <div className="relative font-semibold inline-block min-w-[60px] mq450:text-lgi">
                    Total
                  </div>
                  <div className="relative font-semibold text-gray1-400 mq450:text-lgi">
                    $136.99
                  </div>
                </div>
              </div>
            </div>
            <Button
              propFlexDirection="column"
              propFlex="unset"
              propBackgroundColor="#232321"
              propPadding="15.5px 170px"
              propAlignSelf="unset"
              propFlex1="unset"
              propBorder="unset"
              button="Checkout"
              propColor="#fff"
              propDisplay="unset"
              propMinWidth="unset"
              propFontFamily="Rubik"
            />
            <div className="relative text-xl [text-decoration:underline] font-semibold font-open-sans-regular-16 mq450:text-base">
              User a promo code
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full text-29xl mq750:flex-wrap">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1025:text-19xl">
          You may also like
        </h1>
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="flex flex-col items-start justify-start [transform:_rotate(180deg)] opacity-[0.5]">
            <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center p-3">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                loading="lazy"
                alt=""
                src="/chevron-forward1.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center p-3">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevron-forward1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
