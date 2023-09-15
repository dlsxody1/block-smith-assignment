import React from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";

const Announcement = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1120px] h-[1156px] flex-shrink-0 border border-[navy] ">
        <div className="w-[800px] flex pt-[60px] pb-[64px] flex-col items-center ">
          <div className="flex justify-between pb-0 items-center self-stretch border-b border-[#EDEDED] pb-6">
            <div className="font-semibold text-[32px] ">공지사항</div>
            <SearchInput />
          </div>
          <AnnounceArticle></AnnounceArticle>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Announcement;
