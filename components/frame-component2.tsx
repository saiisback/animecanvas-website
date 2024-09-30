import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[90px] pb-0 pl-[60px] pr-0 box-border relative gap-16 max-w-full text-left text-55xl text-white font-rubik-16 mq750:gap-8 mq750:pl-[30px] mq750:box-border mq450:gap-4 mq450:pt-[38px] mq450:box-border mq1050:pt-[58px] mq1050:box-border ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[824px] right-[-1440px] bottom-[-824px] left-[1440px] bg-dark-gray [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <div className="w-[1320px] flex flex-row items-end justify-between max-w-full gap-5 z-[1] mq750:flex-wrap">
        <h1 className="m-0 relative text-inherit leading-[95%] uppercase font-semibold font-inherit inline-block max-w-full mq450:text-25xl mq450:leading-[42px] mq1050:text-40xl mq1050:leading-[56px]">
          Categories
        </h1>
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="flex flex-col items-start justify-start [transform:_rotate(180deg)] opacity-[0.5]">
            <div className="rounded-lg bg-gray flex flex-row items-center justify-center p-3">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
                loading="lazy"
                alt=""
                src="/chevron-forward.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-lg bg-gray flex flex-row items-center justify-center p-3">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/chevron-forward.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-tl-29xl rounded-tr-none rounded-b-none flex flex-row items-start justify-start max-w-full [row-gap:20px] z-[1] text-17xl text-dark-gray lg:flex-wrap">
        <div className="flex-1 rounded-tl-45xl rounded-tr-none rounded-b-none bg-whitesmoke-300 flex flex-row items-center justify-center py-0 px-5 box-border relative gap-2.5 min-w-[448px] max-w-full lg:flex-1 mq750:min-w-full">
          <img
            className="w-[480px] relative max-h-full object-contain max-w-full"
            loading="lazy"
            alt=""
            src="/image-31@2x.png"
          />
          <h1 className="!m-[0] absolute top-[484px] left-[48px] text-inherit uppercase font-semibold font-inherit z-[1] mq450:text-3xl mq1050:text-10xl">
            <p className="m-0">Lifestyle</p>
            <p className="m-0">Shoes</p>
          </h1>
          <div className="!m-[0] absolute top-[522px] left-[582px] flex flex-col items-start justify-start z-[1]">
            <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center p-2">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/arrow-trend-right-up.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-[0.7385] bg-whitesmoke-100 flex flex-row items-center justify-center py-0 px-[105px] box-border relative gap-2.5 min-w-[448px] max-w-full lg:flex-1 mq750:pl-[52px] mq750:pr-[52px] mq750:box-border mq750:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <img
            className="h-[600px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/image-31-1@2x.png"
          />
          <h1 className="!m-[0] absolute top-[484px] left-[48px] text-inherit uppercase font-semibold font-inherit z-[1] mq450:text-3xl mq1050:text-10xl">
            <p className="m-0">Basketball</p>
            <p className="m-0">Shoes</p>
          </h1>
          <div className="!m-[0] absolute top-[522px] left-[582px] flex flex-col items-start justify-start z-[1]">
            <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center p-2">
              <img
                className="h-8 w-8 relative overflow-hidden shrink-0"
                alt=""
                src="/arrow-trend-right-up.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
