import React from "react";
import PageArrow from "../Icon/PageArrow";
import PageFirst from "../Icon/PageFirst";
import PageLast from "../Icon/PageLast";

const Pagination = () => {
  return (
    <div className="flex">
      <PageFirst />
      <PageArrow />
      {/* page 수 대로 map 돌려서 번호 만들 것. 
      아래 pageArrow transition
      */}
      <div>1</div>
      <PageLast />
      <PageArrow />
    </div>
  );
};

export default Pagination;
