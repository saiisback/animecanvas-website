import type { NextPage } from "next";
import Button from "./button";
import TestimonialRow from "./testimonial-row";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full text-left text-55xl text-dark-gray font-rubik-16 mq750:pl-[30px] mq750:pr-[30px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 mq1050:flex-wrap">
          <h1 className="m-0 w-[590px] relative text-inherit leading-[95%] uppercase font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-25xl mq450:leading-[42px] mq1050:text-40xl mq1050:leading-[56px]">
            Reviews
          </h1>
          <Button button="See all" />
        </div>
        <footer className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full text-left text-5xl text-dark-gray font-rubik-16 lg:justify-center lg:grid-cols-[repeat(2,_minmax(322px,_558px))] mq750:grid-cols-[minmax(322px,_1fr)]">
          <TestimonialRow
            testimonialAvatar="/ellipse-1@2x.png"
            emptyTestimonial="/frame-1439@2x.png"
          />
          <TestimonialRow
            testimonialAvatar="/ellipse-1-1@2x.png"
            emptyTestimonial="/frame-1439-1@2x.png"
          />
          <TestimonialRow
            testimonialAvatar="/ellipse-1-2@2x.png"
            emptyTestimonial="/frame-1439-2@2x.png"
          />
        </footer>
      </div>
    </section>
  );
};

export default FrameComponent3;
