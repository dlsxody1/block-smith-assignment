import React from "react";
import { CaretRight, PageFirst, PageLast } from "../Icon";

const Pagination = ({ totalPages }: { totalPages: number | undefined }) => {
  return (
    <div className="flex">
      <div className="p-2 flex items-center cursor-pointer">
        <PageFirst />
      </div>
      <div className="p-2 flex items-center cursor-pointer">
        <CaretRight />
      </div>
      {Array(totalPages)
        .fill("_")
        .map((_, i) => {
          return (
            <div
              className="flex text-sm justify-center items-center p-page cursor-pointer"
              key={i}
            >
              {i + 1}
            </div>
          );
        })}
      <div className="p-2` flex items-center transform rotate-180 cursor-pointer">
        <CaretRight />
      </div>
      <div className="p-2  flex items-center cursor-pointer">
        <PageLast />
      </div>
    </div>
  );
};

export default Pagination;
