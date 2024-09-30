import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import Recommendations from "../components/recommendations";

const ProductPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-8 px-[60px] pb-16 box-border gap-32 leading-[normal] tracking-[normal] mq750:gap-16 mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq450:gap-8">
      <section className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq750:gap-4">
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
          logo="pending_I86:533;39:1445"
          showLogoIcon={false}
          user1="/user.svg"
        />
        <Content />
      </section>
      <Recommendations />
    </div>
  );
};

export default ProductPage;
