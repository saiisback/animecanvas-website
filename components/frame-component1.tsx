import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  propMarginTop,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-6 max-w-full text-left text-base text-dark-gray font-open-sans-regular-16 ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
        <img
          className="h-6 w-6 relative object-cover"
          alt=""
          src="/checkbox@2x.png"
        />
        <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_32px)]">{`My billing and delivery information are the same `}</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full">
        <img
          className="h-6 w-6 relative object-cover"
          alt=""
          src="/checkbox@2x.png"
        />
        <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_32px)]">
          I’m 13+ year old
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full font-rubik-16">
        <div className="relative font-semibold inline-block max-w-full">
          Also want product updates with our newsletter?
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-2 max-w-full font-open-sans-regular-16">
          <img
            className="h-6 w-6 relative object-cover"
            alt=""
            src="/checkbox@2x.png"
          />
          <div className="flex-1 relative font-semibold inline-block max-w-[calc(100%_-_32px)]">
            Yes, I’d like to receive emails about exclusive sales and more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
