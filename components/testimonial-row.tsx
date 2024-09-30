import type { NextPage } from "next";

export type TestimonialRowType = {
  className?: string;
  testimonialAvatar?: string;
  emptyTestimonial?: string;
};

const TestimonialRow: NextPage<TestimonialRowType> = ({
  className = "",
  testimonialAvatar,
  emptyTestimonial,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[322px] max-w-full text-left text-5xl text-dark-gray font-rubik-16 ${className}`}
    >
      <div className="self-stretch rounded-t-13xl rounded-b-none bg-gray1-100 flex flex-col items-end justify-start p-8 gap-2">
        <div className="self-stretch flex flex-row items-start justify-end gap-2 mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[190px]">
            <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-lgi">{`Good Quality `}</h3>
            <div className="relative text-base font-open-sans-regular-16 text-gray1-400">
              I highly recommend shopping from kicks
            </div>
          </div>
          <img
            className="h-16 w-16 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src={testimonialAvatar}
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[217px] gap-1 text-base font-open-sans-regular-16 mq450:flex-wrap mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icroundstarrate.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icroundstarrate.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icroundstarrate.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icroundstarrate.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icroundstarrate.svg"
            />
          </div>
          <div className="relative font-semibold">5.0</div>
        </div>
      </div>
      <img
        className="self-stretch h-[325px] relative rounded-t-none rounded-b-13xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={emptyTestimonial}
      />
    </div>
  );
};

export default TestimonialRow;
