import type { NextPage } from "next";
import Button from "./button";
import ProductRow from "./product-row";

export type PromoContentType = {
  className?: string;
};

const PromoContent: NextPage<PromoContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-left text-55xl text-dark-gray font-rubik-16 mq750:gap-4 ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
        <h1 className="m-0 w-[590px] relative text-inherit leading-[95%] uppercase font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-25xl mq450:leading-[42px] mq1050:text-40xl mq1050:leading-[56px]">
          Don’t miss out new drops
        </h1>
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="#4a69e2"
          propPadding="15.5px 31px"
          propAlignSelf="unset"
          propFlex1="unset"
          propBorder="unset"
          button="Shop New Drops"
          propColor="#fff"
          propDisplay="unset"
          propMinWidth="unset"
          propFontFamily="Rubik"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-4 text-xs text-white lg:justify-center lg:grid-cols-[repeat(2,_minmax(238px,_413px))] mq750:grid-cols-[minmax(238px,_1fr)]">
        <ProductRow productImage="/rectangle-5@2x.png" />
        <ProductRow
          propFlex="1"
          propMinWidth="293px"
          propWidth="unset"
          productImage="/rectangle-5-1@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
        <ProductRow
          propFlex="1"
          propMinWidth="293px"
          propWidth="unset"
          productImage="/rectangle-5-2@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
        <ProductRow
          propFlex="1"
          propMinWidth="293px"
          propWidth="unset"
          productImage="/rectangle-5-3@2x.png"
          propMargin="0"
          propAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default PromoContent;
