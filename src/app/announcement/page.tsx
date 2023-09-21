import React from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";

const Announcement = () => {
  return (
    <>
      <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
        <div className="font-semibold text-[32px] ">공지사항</div>
        <SearchInput />
      </div>
      <AnnounceArticle></AnnounceArticle>
      <div className="bg-[#EDEDED] w-[800px] h-px mt-8"></div>
      <Pagination />
    </>
  );
};

export default Announcement;
