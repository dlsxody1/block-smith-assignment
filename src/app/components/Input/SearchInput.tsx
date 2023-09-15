import React from "react";
import SearchIcon from "@/app/components/Icon/Search_common.svg";

const SearchInput = () => {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="검색어"
        className="rounded-md border border-[0.8px solid var(--default-bk, #222)] w-[280px] h-[40px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]"
      />
      <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchInput;
