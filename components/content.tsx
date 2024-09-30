import type { NextPage } from "next";
import Button from "./button";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-4 max-w-full text-left text-base text-dark-gray font-rubik-16 lg:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[568px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-4 max-w-full mq750:flex-wrap">
          <img
            className="h-[510px] flex-1 relative rounded-tl-29xl rounded-tr-none rounded-b-none max-w-full overflow-hidden object-cover min-w-[279px]"
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <img
            className="h-[510px] flex-1 relative rounded-tl-none rounded-tr-29xl rounded-b-none max-w-full overflow-hidden object-cover min-w-[279px]"
            loading="lazy"
            alt=""
            src="/rectangle-9@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-4 max-w-full mq750:flex-wrap">
          <img
            className="h-[510px] flex-1 relative rounded-t-none rounded-br-none rounded-bl-29xl max-w-full overflow-hidden object-cover min-w-[279px]"
            loading="lazy"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <img
            className="h-[510px] flex-1 relative rounded-t-none rounded-br-29xl rounded-bl-none max-w-full overflow-hidden object-cover min-w-[279px]"
            loading="lazy"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </div>
      </div>
      <div className="w-[430px] flex flex-col items-start justify-start gap-8 max-w-full lg:flex-1 mq750:min-w-full mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xs text-white">
          <div className="rounded-xl bg-blue flex flex-row items-start justify-start py-3 pl-4 pr-[15px]">
            <div className="relative font-semibold">New Release</div>
          </div>
          <h1 className="m-0 relative text-13xl font-semibold font-inherit text-dark-gray mq450:text-lgi mq1050:text-7xl">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>
          <div className="relative text-5xl font-semibold text-blue mq450:text-lgi">
            $125.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="relative uppercase font-semibold">Color</div>
          <div className="flex flex-row items-start justify-start gap-4">
            <img
              className="h-12 w-12 relative"
              loading="lazy"
              alt=""
              src="/group-2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <div className="w-8 h-8 relative rounded-[50%] bg-gray1-200" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <div className="relative uppercase font-semibold">Size</div>
            <div className="relative text-sm [text-decoration:underline] tracking-[0.25px] uppercase font-medium">
              Size chart
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 gap-1 mq750:flex-wrap">
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#232321"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="38"
                propColor="#fff"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#d2d1d3"
                propPadding="15.5px 16px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="39"
                propColor="#8f8c91"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#d2d1d3"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="40"
                propColor="#8f8c91"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 17px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="41"
                propColor="#232321"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="42"
                propColor="#232321"
                propDisplay="inline-block"
                propMinWidth="20px"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="43"
                propColor="#232321"
                propDisplay="inline-block"
                propMinWidth="20px"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="44"
                propColor="#232321"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="45"
                propColor="#232321"
                propDisplay="inline-block"
                propMinWidth="20px"
                propFontFamily="Rubik"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[325px] gap-1 mq750:flex-wrap mq450:pr-5 mq450:box-border">
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 15px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="46"
                propColor="#232321"
                propDisplay="inline-block"
                propMinWidth="20px"
                propFontFamily="Rubik"
              />
              <Button
                propFlexDirection="column"
                propFlex="unset"
                propBackgroundColor="#fff"
                propPadding="15.5px 16px"
                propAlignSelf="unset"
                propFlex1="unset"
                propBorder="unset"
                button="47"
                propColor="#232321"
                propDisplay="unset"
                propMinWidth="unset"
                propFontFamily="Rubik"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq450:flex-wrap">
            <Button
              propFlexDirection="column"
              propFlex="1"
              propBackgroundColor="#232321"
              propPadding="15.5px 140px"
              propAlignSelf="unset"
              propFlex1="unset"
              propBorder="unset"
              button="Add to cart"
              propColor="#fff"
              propDisplay="unset"
              propMinWidth="unset"
              propFontFamily="Rubik"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center p-4">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/heart1.svg"
                />
              </div>
            </div>
          </div>
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#4a69e2"
            propPadding="15.5px 174px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="Buy it now"
            propColor="#fff"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="relative uppercase font-semibold">
            About the product
          </div>
          <div className="relative font-open-sans-regular-16 text-gray1-400">
            <p className="m-0">Shadow Navy / Army Green</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li className="mb-0">
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>{`Join adiClub to get unlimited free standard shipping, returns, & exchanges.`}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
