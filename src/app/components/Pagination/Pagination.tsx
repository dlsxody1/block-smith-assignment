import React from "react";
import { CaretRight, PageFirst, PageLast } from "../Icon";

const Pagination = () => {
  return (
    <div className="flex">
      <PageFirst />
      <CaretRight />
      {/* page 수 대로 map 돌려서 번호 만들 것. 
      아래 pageArrow transition
      */}
      <div>1</div>
      <PageLast />
      <CaretRight />
    </div>
  );
};

export default Pagination;
