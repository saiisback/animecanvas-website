import type { NextPage } from "next";
import ProductItems from "./product-items";
import ProductItems1 from "./product-items1";

export type ProductListType = {
  className?: string;
};

const ProductList: NextPage<ProductListType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[986px] flex flex-row items-start justify-start flex-wrap content-start gap-x-3 gap-y-[38px] max-w-full text-left text-xs text-dark-gray font-rubik-16 ${className}`}
    >
      <ProductItems
        productBackgrounds="/rectangle-5-1@2x.png"
        uLTRABOOST10MIAMIGreen="ULTRABOOST 1.0 MIAMI Green"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor1="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor1="#fff"
        propDisplay="unset"
        propMinWidth="unset"
        propFontFamily="Rubik"
      />
      <ProductItems1
        rectangle5="/rectangle-5-2@2x.png"
        new1="New"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor="#fff"
        propDisplay="unset"
        propMinWidth1="unset"
        propFontFamily="Rubik"
      />
      <ProductItems
        productBackgrounds="/rectangle-5-3@2x.png"
        propBackgroundColor="#ffa52f"
        propColor="#232321"
        uLTRABOOST10MIAMIGreen="ADIDAS 4DFWD 2 RUNNING SHOES"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor1="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor1="#fff"
        propDisplay="unset"
        propMinWidth="unset"
        propFontFamily="Rubik"
      />
      <ProductItems
        productBackgrounds="/rectangle-5-31@2x.png"
        propBackgroundColor="#ffa52f"
        propColor="#232321"
        uLTRABOOST10MIAMIGreen="ULTRABOOST 1.0 MIAMI Green"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor1="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor1="#fff"
        propDisplay="unset"
        propMinWidth="unset"
        propFontFamily="Rubik"
      />
      <ProductItems1
        rectangle5="/rectangle-5-4@2x.png"
        new1="New"
        propMinWidth="27px"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor="#fff"
        propDisplay="unset"
        propMinWidth1="unset"
        propFontFamily="Rubik"
      />
      <ProductItems
        productBackgrounds="/rectangle-5-5@2x.png"
        propBackgroundColor="#ffa52f"
        propColor="#232321"
        uLTRABOOST10MIAMIGreen="ADIDAS 4DFWD 2 RUNNING SHOES"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor1="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor1="#fff"
        propDisplay="unset"
        propMinWidth="unset"
        propFontFamily="Rubik"
      />
      <div className="w-[318px] flex flex-col items-center justify-start gap-5 min-w-[302px] text-white">
        <div className="self-stretch rounded-9xl bg-gray1-100 flex flex-row items-start justify-start p-2 relative gap-2.5">
          <img
            className="h-[334px] flex-1 relative rounded-3xl max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-5-6@2x.png"
          />
          <div className="!m-[0] absolute top-[8px] left-[8px] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-blue flex flex-row items-start justify-start py-3 pl-4 pr-[15px] z-[1]">
            <div className="relative font-semibold inline-block min-w-[27px]">
              New
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl text-dark-gray">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
              ULTRABOOST 1.0 MIAMI Green
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm text-yellow">
            <div className="self-stretch rounded-lg bg-dark-gray flex flex-row items-center justify-center py-[15.5px] px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="flex-1 relative tracking-[0.25px] uppercase font-medium">
                <span className="text-white">{`View Product - `}</span>
                <span>$125 (</span>
                <span>
                  <span className="[text-decoration:line-through]">$250</span>)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductItems1
        rectangle5="/rectangle-5-7@2x.png"
        new1="20% off"
        propMinWidth="46px"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor="#fff"
        propDisplay="unset"
        propMinWidth1="unset"
        propFontFamily="Rubik"
      />
      <ProductItems
        productBackgrounds="/rectangle-5-8@2x.png"
        propBackgroundColor="#4a69e2"
        propColor="#fff"
        uLTRABOOST10MIAMIGreen="ADIDAS 4DFWD 2 RUNNING SHOES"
        button="View Product - $125"
        propFlexDirection="column"
        propFlex="unset"
        propBackgroundColor1="#232321"
        propPadding="15.5px 81px"
        propAlignSelf="unset"
        propFlex1="unset"
        propBorder="unset"
        propColor1="#fff"
        propDisplay="unset"
        propMinWidth="unset"
        propFontFamily="Rubik"
      />
    </div>
  );
};

export default ProductList;
