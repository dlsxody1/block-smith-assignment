import React from "react";
import PageArrow from "../Icon/PageArrow";
import PageFirst from "../Icon/PageFirst";
import PageLast from "../Icon/PageLast";

const Pagination = () => {
  return (
    <div className="flex">
      <PageFirst />
      <PageArrow />
      <PageLast />
    </div>
  );
};

export default Pagination;
