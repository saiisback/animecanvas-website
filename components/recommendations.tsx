import type { NextPage } from "next";
import ProductRow from "./product-row";

export type RecommendationsType = {
  className?: string;
};

const Recommendations: NextPage<RecommendationsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-left text-29xl text-dark-gray font-rubik-16 mq750:gap-4 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full mq750:flex-wrap">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-19xl">
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
      <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-[repeat(4,_minmax(238px,_1fr))] lg:justify-center lg:grid-cols-[repeat(2,_minmax(238px,_413px))] mq750:grid-cols-[minmax(238px,_1fr)]">
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="unset"
          productImage="/rectangle-5@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="unset"
          productImage="/rectangle-5-1@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="unset"
          productImage="/rectangle-5-2@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="unset"
          productImage="/rectangle-5-3@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="h-1.5 w-[172px] flex flex-row items-start justify-start relative gap-1">
          <div className="h-full w-10 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-lg bg-blue" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] bottom-[0px] left-[44px] rounded-lg bg-gray1-300" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] right-[44px] bottom-[0px] rounded-lg bg-gray1-300" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-lg bg-gray1-300" />
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
