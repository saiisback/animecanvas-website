import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Header from "./header";

export type FrameComponentType = {
  className?: string;
  men?: string;
  women?: string;
  logo?: string;
  showLogoIcon?: boolean;
  caretDownIconWidth?: string;
  caretDownIconFlex?: string;
  caretDownIconAlignSelf?: string;
  caretDownIconTop?: string;
  caretDownIconPosition?: string;
  categoriesWidth?: string;
  categoriesPadding?: string;
  logoIconTextDecoration?: string;

  /** Style props */
  headerTop?: CSSProperties["top"];
  headerPosition?: CSSProperties["position"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  headerTop,
  headerPosition,
  men,
  women,
  logo,
  showLogoIcon,
  caretDownIconWidth,
  caretDownIconFlex,
  caretDownIconAlignSelf,
  caretDownIconTop,
  caretDownIconPosition,
  categoriesWidth,
  categoriesPadding,
  logoIconTextDecoration,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
    };
  }, [headerTop, headerPosition]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border top-[0] z-[99] sticky max-w-full ${className}`}
      style={frameDiv1Style}
    >
      <Header
        caretDownIconWidth={caretDownIconWidth}
        caretDownIconFlex={caretDownIconFlex}
        caretDownIconAlignSelf={caretDownIconAlignSelf}
        caretDownIconTop={caretDownIconTop}
        caretDownIconPosition={caretDownIconPosition}
        categoriesWidth={categoriesWidth}
        categoriesPadding={categoriesPadding}
        men={men}
        logoIconTextDecoration={logoIconTextDecoration}
        women={women}
        logo={logo}
        showLogoIcon={showLogoIcon}
        user1="pending_I69:401;39:1448"
      />
    </div>
  );
};

export default FrameComponent;
