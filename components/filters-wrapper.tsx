import type { NextPage } from "next";
import Button from "./button";

export type FiltersWrapperType = {
  className?: string;
};

const FiltersWrapper: NextPage<FiltersWrapperType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[315.3px] flex flex-col items-start justify-start gap-6 text-left text-base text-dark-gray font-rubik-16 ${className}`}
    >
      <h2 className="m-0 relative text-5xl font-semibold font-inherit inline-block min-w-[78px] mq450:text-lgi">
        Filters
      </h2>
      <div className="self-stretch rounded-2xl flex flex-col items-end justify-start gap-4">
        <div className="self-stretch flex flex-row items-center justify-between gap-5">
          <div className="relative uppercase font-semibold inline-block min-w-[84px]">
            Refine by
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-up.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-xs text-white">
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="rounded-xl bg-blue flex flex-row items-start justify-start py-3 pl-4 pr-[15px]">
              <div className="relative font-semibold">Mens</div>
            </div>
            <div className="rounded-xl bg-blue flex flex-row items-start justify-start py-3 pl-4 pr-[15px]">
              <div className="relative font-semibold">Casual</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-2xl flex flex-col items-end justify-start gap-4">
        <div className="self-stretch flex flex-row items-center justify-between gap-5">
          <div className="relative uppercase font-semibold">Size</div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-up-1.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[13px] gap-y-4">
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#232321"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="38"
            propColor="#fff"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#d2d1d3"
            propPadding="15.5px 15px"
            propAlignSelf="stretch"
            propFlex1="unset"
            propBorder="unset"
            button="39"
            propColor="#8f8c91"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#d2d1d3"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="40"
            propColor="#8f8c91"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 16px"
            propAlignSelf="stretch"
            propFlex1="unset"
            propBorder="unset"
            button="41"
            propColor="#232321"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="42"
            propColor="#232321"
            propDisplay="inline-block"
            propMinWidth="20px"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="43"
            propColor="#232321"
            propDisplay="inline-block"
            propMinWidth="20px"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="44"
            propColor="#232321"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="45"
            propColor="#232321"
            propDisplay="inline-block"
            propMinWidth="20px"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 15px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="46"
            propColor="#232321"
            propDisplay="inline-block"
            propMinWidth="20px"
            propFontFamily="Rubik"
          />
          <Button
            propFlexDirection="column"
            propFlex="unset"
            propBackgroundColor="#fff"
            propPadding="15.5px 16px"
            propAlignSelf="unset"
            propFlex1="unset"
            propBorder="unset"
            button="47"
            propColor="#232321"
            propDisplay="unset"
            propMinWidth="unset"
            propFontFamily="Rubik"
          />
        </div>
      </div>
      <div className="self-stretch rounded-2xl flex flex-col items-start justify-start gap-4">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="relative uppercase font-semibold">Color</div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-up.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[16.3px] gap-y-4">
          <div className="h-12 w-12 relative rounded-lg bg-blue" />
          <div className="h-12 w-12 relative rounded-lg bg-yellow" />
          <div className="h-12 w-12 relative rounded-lg bg-dark-gray" />
          <div className="h-12 w-12 relative rounded-lg bg-darkslategray-100" />
          <div className="h-12 w-12 relative rounded-lg bg-darkslategray-200" />
          <div className="h-12 w-12 relative rounded-lg bg-coral" />
          <div className="h-12 w-12 relative rounded-lg bg-lightgray" />
          <div className="h-12 w-12 relative rounded-lg bg-slategray" />
          <div className="h-12 w-12 relative rounded-lg bg-saddlebrown" />
          <div className="h-12 w-12 relative rounded-lg bg-darksalmon" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <div className="self-stretch flex flex-row items-center justify-between gap-5">
          <div className="relative uppercase font-semibold">Size</div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevron-up.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 font-open-sans-regular-16">
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold inline-block min-w-[102px]">
              Casual shoes
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold">Runners</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold inline-block min-w-[51px]">
              Hiking
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold">Sneaker</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold">Basketball</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold">Golf</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="h-5 w-5 relative object-cover"
              alt=""
              src="/checkbox1@2x.png"
            />
            <div className="relative font-semibold inline-block min-w-[67px]">
              Outdoor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersWrapper;
