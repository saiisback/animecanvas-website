import type { NextPage } from "next";
import Grid from "../components/grid";
import PromoContent from "../components/promo-content";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start py-8 px-0 box-border gap-32 leading-[normal] tracking-[normal] mq750:gap-16 mq450:gap-8">
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-14 max-w-full mq750:gap-7">
          <Grid />
          <PromoContent />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent3 />
    </div>
  );
};

export default LandingPage;
