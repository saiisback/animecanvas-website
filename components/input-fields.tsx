import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type InputFieldsType = {
  className?: string;
  placeholder?: string;
  helperTextHere?: string;
  showHelperTextHere?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFontFamily?: CSSProperties["fontFamily"];
  propColor?: CSSProperties["color"];
};

const InputFields: NextPage<InputFieldsType> = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propHeight,
  placeholder,
  propDisplay,
  helperTextHere,
  showHelperTextHere,
  propAlignSelf1,
  propFontFamily,
  propColor,
}) => {
  const inputFieldsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlex, propMinWidth, propAlignSelf]);

  const inputinitialStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const helperTextHereStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      fontFamily: propFontFamily,
      color: propColor,
    };
  }, [propAlignSelf1, propFontFamily, propColor]);

  return (
    <div
      className={`w-[342px] flex flex-col items-start justify-start max-w-full text-left text-base text-neutrals-gray-6 font-copy-caption ${className}`}
      style={inputFieldsStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-1">
        <div
          className="self-stretch rounded-lg border-dark-gray border-[1px] border-solid flex flex-row items-center justify-start py-[13px] pl-4 pr-[13px]"
          style={inputinitialStyle}
        >
          <div
            className="flex-1 relative tracking-[0.5px]"
            style={placeholderStyle}
          >
            {placeholder}
          </div>
        </div>
        {showHelperTextHere && (
          <div
            className="self-stretch relative text-xs tracking-[0.4px] text-neutrals-gray-9"
            style={helperTextHereStyle}
          >
            {helperTextHere}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFields;
