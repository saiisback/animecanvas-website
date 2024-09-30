import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ProductRowType = {
  className?: string;
  productImage?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ProductRow: NextPage<ProductRowType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  productImage,
  propMargin,
  propAlignSelf,
}) => {
  const productRowStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const aDIDAS4DFWDXStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-4 min-w-[293px] max-w-[318px] text-left text-xs text-white font-rubik-16 ${className}`}
      style={productRowStyle}
    >
      <div className="self-stretch rounded-9xl bg-gray1-100 flex flex-row items-start justify-start p-2 relative gap-2.5">
        <img
          className="h-[334px] flex-1 relative rounded-3xl max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={productImage}
        />
        <div className="!m-[0] absolute top-[8px] left-[8px] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-blue flex flex-row items-start justify-start py-3 pl-4 pr-[15px] z-[1]">
          <div className="relative font-semibold inline-block min-w-[27px]">
            New
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl text-dark-gray">
        <h3
          className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi"
          style={aDIDAS4DFWDXStyle}
        >
          ADIDAS 4DFWD X PARLEY RUNNING SHOES
        </h3>
        <div
          className="self-stretch flex flex-col items-start justify-start text-sm text-white"
          style={buttonStyle}
        >
          <div className="rounded-lg bg-dark-gray flex flex-row items-center justify-center py-[15.5px] px-[81px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[0.25px] uppercase font-medium">
              <span>{`View Product - `}</span>
              <span className="text-yellow">$125</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
