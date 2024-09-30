import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HeaderType = {
  className?: string;
  men?: string;
  women?: string;
  logo?: string;
  showLogoIcon?: boolean;
  user1?: string;

  /** Style props */
  caretDownIconWidth?: CSSProperties["width"];
  caretDownIconFlex?: CSSProperties["flex"];
  caretDownIconAlignSelf?: CSSProperties["alignSelf"];
  caretDownIconTop?: CSSProperties["top"];
  caretDownIconPosition?: CSSProperties["position"];
  categoriesWidth?: CSSProperties["width"];
  categoriesPadding?: CSSProperties["padding"];
  logoIconTextDecoration?: CSSProperties["textDecoration"];
};

const Header: NextPage<HeaderType> = ({
  className = "",
  caretDownIconWidth,
  caretDownIconFlex,
  caretDownIconAlignSelf,
  caretDownIconTop,
  caretDownIconPosition,
  categoriesWidth,
  categoriesPadding,
  men,
  logoIconTextDecoration,
  women,
  logo,
  showLogoIcon,
  user1,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      width: caretDownIconWidth,
      flex: caretDownIconFlex,
      alignSelf: caretDownIconAlignSelf,
      top: caretDownIconTop,
      position: caretDownIconPosition,
    };
  }, [
    caretDownIconWidth,
    caretDownIconFlex,
    caretDownIconAlignSelf,
    caretDownIconTop,
    caretDownIconPosition,
  ]);

  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      width: categoriesWidth,
      padding: categoriesPadding,
    };
  }, [categoriesWidth, categoriesPadding]);

  const menStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: logoIconTextDecoration,
    };
  }, [logoIconTextDecoration]);

  return (
    <div
      className={`w-[1320px] rounded-3xl bg-gray1-100 flex flex-row items-center justify-between p-8 box-border gap-5 max-w-full text-left text-base text-dark-gray font-rubik-16 ${className}`}
      style={headerStyle}
    >
      <div
        className="w-[301px] flex flex-row items-start justify-start py-0 px-0 box-border gap-10 mq450:gap-5"
        style={navigationStyle}
      >
        <div className="relative font-semibold inline-block min-w-[104px]">
          New Drops 🔥
        </div>
        <div className="flex flex-row items-center justify-start gap-0.5">
          <a
            className="[text-decoration:none] relative font-semibold text-[inherit]"
            style={menStyle}
          >
            {men}
          </a>
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            alt=""
            src="/caret-down.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-0.5">
          <a className="[text-decoration:none] relative font-semibold text-[inherit]">
            {women}
          </a>
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0"
            alt=""
            src="/caret-down.svg"
          />
        </div>
      </div>
      {showLogoIcon && (
        <img
          className="h-8 w-32 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={logo}
        />
      )}
      <div className="flex flex-row items-center justify-end py-0 pl-[201px] pr-0 gap-10 font-open-sans-regular-16 mq450:gap-5 mq450:pl-5 mq450:box-border">
        <img
          className="h-7 w-7 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/search.svg"
        />
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={user1}
        />
        <div className="flex-1 rounded-13xl bg-yellow flex flex-col items-center justify-center py-[5px] px-2.5">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[11px]">
            0
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
