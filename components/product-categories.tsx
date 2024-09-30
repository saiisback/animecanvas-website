import type { NextPage } from "next";

export type ProductCategoriesType = {
  className?: string;
};

const ProductCategories: NextPage<ProductCategoriesType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between gap-5 text-left text-17xl text-dark-gray font-rubik-16 mq800:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-3xl mq800:text-10xl">
          Life Style Shoes
        </h1>
        <div className="relative text-base font-semibold font-open-sans-regular-16 text-gray1-400">
          122 items
        </div>
      </div>
      <div className="w-[184px] rounded-2xl bg-whitesmoke-200 flex flex-col items-end justify-start p-4 box-border text-base">
        <div className="self-stretch flex flex-row items-center justify-between gap-5">
          <div className="relative uppercase font-semibold inline-block min-w-[83px]">
            Trending
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/chevron-down1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
