import React from "react";
import { SearchIcon } from "../Icon";
import useInput from "@/app/hooks/useInput";

const SearchInput = () => {
  const { value, setValue, onChange, onSubmitSearch } = useInput();
  return (
    <form
      onSubmit={(e) => onSubmitSearch(e)}
      className="flex items-center relative"
    >
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder="검색어"
        className="rounded-md  border border-[0.8px solid var(--default-bk, #222)] w-[280px] h-[40px] pt-[10px] pb-[10px] pl-[8px] pr-[8px]"
      />
      <button type="button">
        <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
      </button>
    </form>
  );
};

export default SearchInput;
