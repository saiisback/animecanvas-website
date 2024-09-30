import type { NextPage } from "next";
import Header from "./header";
import Button from "./button";

export type GridType = {
  className?: string;
};

const Grid: NextPage<GridType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-55xl text-white font-rubik-16 ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-dark-gray font-rubik-16">
        <Header
          men="Catlog"
          women="Policies"
          logo="pending_I39:1462;39:1445"
          showLogoIcon
          user1="/user.svg"
        />
        <div className="w-[293px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border ml-[-807px] text-17xl">
          <h1 className="m-0 self-stretch h-[27px] relative text-inherit uppercase font-bold font-inherit inline-block shrink-0 z-[1]">
            <span>{`Anime `}</span>
            <span className="text-blue">Canvas</span>
          </h1>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-end justify-between pt-20 pb-8 pl-0 pr-8 box-border relative max-w-full gap-5 mq750:pt-[52px] mq750:pb-[21px] mq750:box-border mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-45xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-14@2x.png"
        />
        <div className="w-[538px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[159px] max-w-full mq750:gap-[79px] mq450:gap-10">
            <img
              className="w-[67px] h-[237px] rounded-t-none rounded-b-2xl object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/frame-9@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[490px] flex flex-col items-start justify-start gap-6 max-w-full z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-25xl mq1050:text-40xl">
                    NIKE AIR MAX
                  </h1>
                  <h3 className="m-0 relative text-5xl font-semibold font-open-sans-regular-16 text-gray mq450:text-lgi">
                    Nike introducing the new air max for everyone's comfort
                  </h3>
                </div>
                <Button
                  propFlexDirection="column"
                  propFlex="unset"
                  propBackgroundColor="#4a69e2"
                  propPadding="15.5px 31px"
                  propAlignSelf="unset"
                  propFlex1="unset"
                  propBorder="unset"
                  button="Shop now"
                  propColor="#fff"
                  propDisplay="unset"
                  propMinWidth="unset"
                  propFontFamily="Rubik"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 z-[1]">
          <img
            className="w-40 h-40 relative rounded-13xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <img
            className="w-40 h-40 relative rounded-13xl object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
