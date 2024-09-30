import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent4 from "../components/frame-component4";
import ProductRow from "../components/product-row";

const Cart: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start py-8 pl-[60px] pr-[31px] box-border gap-8 leading-[normal] tracking-[normal] text-left text-13xl text-gray1-400 font-open-sans-regular-16 mq750:gap-4 mq750:pl-[30px] mq750:box-border">
      <FrameComponent
        headerTop="unset"
        headerPosition="unset"
        men="Men"
        women="Women"
        logo="/logo.svg"
        showLogoIcon
        caretDownIconWidth="unset"
        caretDownIconFlex="1"
        caretDownIconAlignSelf="unset"
        caretDownIconTop="unset"
        caretDownIconPosition="unset"
        categoriesWidth="unset"
        categoriesPadding="unset"
        logoIconTextDecoration="unset"
      />
      <div className="w-[822px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 rounded-2xl flex flex-col items-start justify-start gap-2 max-w-full">
          <h2 className="m-0 relative text-inherit font-semibold font-rubik-16 text-dark-gray mq450:text-lgi mq1025:text-7xl">{`Saving to celebrate `}</h2>
          <div className="self-stretch relative text-sm font-semibold">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while suppiles last. No code needed.
          </div>
          <div className="self-stretch relative text-base font-semibold whitespace-pre-wrap">
            <span className="[text-decoration:underline]">{`Join us `}</span>
            {` or `}
            <span className="[text-decoration:underline]">Sign-in</span>
          </div>
        </div>
      </div>
      <FrameComponent4 />
      <section className="overflow-x-auto flex flex-row items-start justify-start gap-4 max-w-full">
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="318px"
          productImage="/rectangle-5@2x.png"
          propMargin="unset"
          propAlignSelf="unset"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="318px"
          productImage="/rectangle-5-1@2x.png"
          propMargin="unset"
          propAlignSelf="unset"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="318px"
          productImage="/rectangle-5-2@2x.png"
          propMargin="unset"
          propAlignSelf="unset"
        />
        <ProductRow
          propFlex="unset"
          propMinWidth="unset"
          propWidth="318px"
          productImage="/rectangle-5-3@2x.png"
          propMargin="unset"
          propAlignSelf="unset"
        />
      </section>
      <div className="w-[1320px] flex flex-row items-start justify-center max-w-full">
        <div className="h-1.5 w-[172px] flex flex-row items-start justify-start relative gap-1">
          <div className="h-full w-10 absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-lg bg-blue" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] bottom-[0px] left-[44px] rounded-lg bg-gray1-300" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] right-[44px] bottom-[0px] rounded-lg bg-gray1-300" />
          <div className="h-full w-10 absolute !m-[0] top-[0px] right-[0px] bottom-[0px] rounded-lg bg-gray1-300" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
