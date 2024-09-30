import type { NextPage } from "next";
import Header from "../components/header";
import Content1 from "../components/content1";
import FrameComponent1 from "../components/frame-component1";
import Button from "../components/button";

const CheckOut: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start py-8 px-[60px] box-border gap-8 leading-[normal] tracking-[normal] text-left text-13xl text-dark-gray font-rubik-16 mq750:gap-4 mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
      <Header
        caretDownIconWidth="unset"
        caretDownIconFlex="unset"
        caretDownIconAlignSelf="stretch"
        caretDownIconTop="0"
        caretDownIconPosition="sticky"
        categoriesWidth="unset"
        categoriesPadding="unset"
        men="Men"
        logoIconTextDecoration="unset"
        women="Women"
        logo="/logo.svg"
        showLogoIcon
        user1="/user.svg"
      />
      <Content1 />
      <div className="flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq450:gap-[21px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq450:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq450:gap-4">
              <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi mq1050:text-7xl">
                Delivery Options
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-5xl">
                <div className="self-stretch rounded-2xl bg-gray1-100 flex flex-row items-start justify-start flex-wrap content-start py-4 pl-4 pr-[15px] box-border gap-2 max-w-full">
                  <div className="w-[684px] flex flex-col items-start justify-start py-0 px-0 box-border gap-2 min-w-[445px] max-w-full mq750:min-w-full">
                    <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                      Standard Delivery
                    </h3>
                    <div className="w-[783px] relative text-base font-semibold font-open-sans-regular-16 text-gray1-400 inline-block max-w-[115%]">
                      Enter your address to see when you’ll get your order
                    </div>
                  </div>
                  <div className="relative text-xl font-semibold text-blue mq450:text-base">
                    $6.00
                  </div>
                </div>
                <div className="self-stretch rounded-2xl border-dark-gray border-[1px] border-solid box-border flex flex-row items-start justify-start flex-wrap content-start py-3.5 pl-4 pr-[13px] gap-2 min-h-[90px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[454px] max-w-full mq750:min-w-full">
                    <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                      Collect in store
                    </h3>
                    <div className="self-stretch relative text-base font-semibold font-open-sans-regular-16 text-gray1-400">
                      Pay now, collect in store
                    </div>
                  </div>
                  <div className="relative text-xl font-semibold mq450:text-base">
                    Free
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[730px] flex flex-col items-start justify-start max-w-full">
              <FrameComponent1 />
              <FrameComponent1 propMarginTop="-147px" />
            </div>
          </div>
          <Button
            propFlexDirection="row"
            propFlex="unset"
            propBackgroundColor="#232321"
            propPadding="15.5px 122px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="Review AND PAY"
            propColor="#fff"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
