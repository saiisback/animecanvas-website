import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Button from "./button";

export type ProductItemsType = {
  className?: string;
  productBackgrounds?: string;
  uLTRABOOST10MIAMIGreen?: string;
  button?: string;
  propFlexDirection?: string;
  propFlex?: string;
  propBackgroundColor1?: string;
  propPadding?: string;
  propAlignSelf?: string;
  propFlex1?: string;
  propBorder?: string;
  propColor1?: string;
  propDisplay?: string;
  propMinWidth?: string;
  propFontFamily?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const ProductItems: NextPage<ProductItemsType> = ({
  className = "",
  productBackgrounds,
  propBackgroundColor,
  propColor,
  uLTRABOOST10MIAMIGreen,
  button,
  propFlexDirection,
  propFlex,
  propBackgroundColor1,
  propPadding,
  propAlignSelf,
  propFlex1,
  propBorder,
  propColor1,
  propDisplay,
  propMinWidth,
  propFontFamily,
}) => {
  const productLabelsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const newStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`w-[318px] flex flex-col items-center justify-start gap-5 min-w-[302px] text-left text-xs text-dark-gray font-rubik-16 ${className}`}
    >
      <div className="self-stretch rounded-9xl bg-gray1-100 flex flex-row items-start justify-start p-2 relative gap-2.5">
        <img
          className="h-[334px] flex-1 relative rounded-3xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={productBackgrounds}
        />
        <div
          className="!m-[0] absolute top-[8px] left-[8px] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-yellow flex flex-row items-start justify-start py-3 pl-4 pr-[15px] z-[1]"
          style={productLabelsStyle}
        >
          <div
            className="relative font-semibold inline-block min-w-[27px]"
            style={newStyle}
          >
            New
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
            {uLTRABOOST10MIAMIGreen}
          </h2>
        </div>
        <Button
          propFlexDirection={propFlexDirection}
          propFlex={propFlex}
          propBackgroundColor={propBackgroundColor1}
          propPadding={propPadding}
          propAlignSelf={propAlignSelf}
          propFlex1={propFlex1}
          propBorder={propBorder}
          button={button}
          propColor={propColor1}
          propDisplay={propDisplay}
          propMinWidth={propMinWidth}
          propFontFamily={propFontFamily}
        />
      </div>
    </div>
  );
};

export default ProductItems;
