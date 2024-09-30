import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import ProductCategories from "../components/product-categories";
import FiltersWrapper from "../components/filters-wrapper";
import ProductList from "../components/product-list";
import Button from "../components/button";

const ListingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-end justify-start py-8 px-[60px] box-border gap-16 leading-[normal] tracking-[normal] text-left text-sm text-dark-gray font-copy-caption mq450:gap-4 mq800:gap-8 mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
      <FrameComponent
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
      <main className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
        <section className="self-stretch rounded-29xl flex flex-col items-start justify-start py-[102px] pl-10 pr-5 box-border gap-2 bg-[url('/image-141@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-5xl text-gray font-open-sans-regular-16 mq450:pt-[66px] mq450:pb-[66px] mq450:box-border">
          <img
            className="w-[1320px] h-[395px] relative rounded-29xl object-cover hidden max-w-full"
            alt=""
            src="/image-141@2x.png"
          />
          <h2 className="m-0 w-[491px] relative text-inherit font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-lgi">
            Limited time only
          </h2>
          <h1 className="m-0 relative text-55xl font-semibold font-rubik-16 text-white inline-block max-w-full z-[1] mq450:text-25xl mq800:text-40xl">
            Get 30% off
          </h1>
          <h3 className="m-0 w-[490px] relative text-xl font-normal font-inherit inline-block max-w-full z-[1] mq450:text-base">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </h3>
        </section>
        <ProductCategories />
        <section className="flex flex-row items-start justify-start gap-[18.7px] max-w-full mq1350:flex-wrap">
          <FiltersWrapper />
          <ProductList />
        </section>
      </main>
      <div className="w-[986px] flex flex-row items-center justify-start flex-wrap content-center py-0 px-[216px] box-border gap-4 max-w-full mq800:pl-[54px] mq800:pr-[54px] mq800:box-border mq1125:pl-[108px] mq1125:pr-[108px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[81px]">
          <div className="self-stretch h-8 rounded-lg border-dark-gray border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-3.5 gap-1">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/chevron-back.svg"
            />
            <div className="relative tracking-[0.25px] uppercase font-medium">
              Previous
            </div>
          </div>
        </div>
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="unset"
          propPadding="6px 14px"
          propAlignSelf="stretch"
          propFlex1="1"
          propBorder="1px solid #232321"
          button="1"
          propColor="#232321"
          propDisplay="unset"
          propMinWidth="unset"
          propFontFamily="Inter"
        />
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="#232321"
          propPadding="7.5px 15px"
          propAlignSelf="stretch"
          propFlex1="unset"
          propBorder="unset"
          button="2"
          propColor="#fff"
          propDisplay="unset"
          propMinWidth="unset"
          propFontFamily="Inter"
        />
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="unset"
          propPadding="6px 14px"
          propAlignSelf="stretch"
          propFlex1="1"
          propBorder="1px solid #232321"
          button="3"
          propColor="#232321"
          propDisplay="inline-block"
          propMinWidth="11px"
          propFontFamily="Inter"
        />
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="unset"
          propPadding="6px 14px"
          propAlignSelf="stretch"
          propFlex1="1"
          propBorder="1px solid #232321"
          button="4"
          propColor="#232321"
          propDisplay="inline-block"
          propMinWidth="11px"
          propFontFamily="Inter"
        />
        <div className="relative tracking-[0.25px] uppercase font-medium">
          ...
        </div>
        <Button
          propFlexDirection="column"
          propFlex="unset"
          propBackgroundColor="unset"
          propPadding="6px 14px"
          propAlignSelf="stretch"
          propFlex1="1"
          propBorder="1px solid #232321"
          button="10"
          propColor="#232321"
          propDisplay="unset"
          propMinWidth="unset"
          propFontFamily="Inter"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="self-stretch h-8 rounded-lg border-dark-gray border-[1px] border-solid box-border flex flex-row items-center justify-center py-1.5 px-3.5 gap-1">
            <div className="relative tracking-[0.25px] uppercase font-medium inline-block min-w-[40px]">
              Next
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/chevron-forward.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
