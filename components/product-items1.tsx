import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button from "./button";

export type ProductItems1Type = {
  className?: string;
  rectangle5?: string;
  new1?: string;
  button?: string;
  propFlexDirection?: string;
  propFlex?: string;
  propBackgroundColor?: string;
  propPadding?: string;
  propAlignSelf?: string;
  propFlex1?: string;
  propBorder?: string;
  propColor?: string;
  propDisplay?: string;
  propMinWidth1?: string;
  propFontFamily?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ProductItems1: NextPage<ProductItems1Type> = ({
  className = "",
  rectangle5,
  new1,
  propMinWidth,
  button,
  propFlexDirection,
  propFlex,
  propBackgroundColor,
  propPadding,
  propAlignSelf,
  propFlex1,
  propBorder,
  propColor,
  propDisplay,
  propMinWidth1,
  propFontFamily,
}) => {
  const new1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-col items-center justify-start gap-5 min-w-[302px] text-left text-xs text-dark-gray font-rubik-16 ${className}`}
    >
      <div className="self-stretch rounded-9xl bg-gray1-100 flex flex-row items-start justify-start p-2 relative gap-2.5">
        <img
          className="h-[334px] flex-1 relative rounded-3xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={rectangle5}
        />
        <div className="!m-[0] absolute top-[8px] left-[8px] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-yellow flex flex-row items-start justify-start py-3 pl-4 pr-[15px] z-[1]">
          <div
            className="relative font-semibold inline-block min-w-[27px]"
            style={new1Style}
          >
            {new1}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h2 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">
            <p className="m-0">ADIDAS OZELIA SHOES</p>
            <p className="m-0">Green</p>
          </h2>
        </div>
        <Button
          propFlexDirection={propFlexDirection}
          propFlex={propFlex}
          propBackgroundColor={propBackgroundColor}
          propPadding={propPadding}
          propAlignSelf={propAlignSelf}
          propFlex1={propFlex1}
          propBorder={propBorder}
          button={button}
          propColor={propColor}
          propDisplay={propDisplay}
          propMinWidth={propMinWidth1}
          propFontFamily={propFontFamily}
        />
      </div>
    </div>
  );
};

export default ProductItems1;
