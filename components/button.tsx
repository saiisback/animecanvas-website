import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  button?: string;

  /** Style props */
  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  propFlexDirection,
  propFlex,
  propBackgroundColor,
  propPadding,
  propAlignSelf,
  propFlex1,
  propBorder,
  button,
  propColor,
  propDisplay,
  propMinWidth,
  propFontFamily,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      flex: propFlex,
    };
  }, [propFlexDirection, propFlex]);

  const styleLayerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex1,
      border: propBorder,
    };
  }, [propBackgroundColor, propPadding, propAlignSelf, propFlex1, propBorder]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
      fontFamily: propFontFamily,
    };
  }, [propColor, propDisplay, propMinWidth, propFontFamily]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-sm text-white font-rubik-16 ${className}`}
      style={button1Style}
    >
      <div
        className="rounded-lg bg-blue flex flex-row items-center justify-center py-[15.5px] px-[31px]"
        style={styleLayerStyle}
      >
        <div
          className="relative tracking-[0.25px] uppercase font-medium"
          style={button2Style}
        >
          {button}
        </div>
      </div>
    </div>
  );
};

export default Button;
