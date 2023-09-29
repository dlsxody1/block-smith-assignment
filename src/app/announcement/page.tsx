"use client";
import React from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";
import { QueryProps } from "../types/AnnouncementTypes";
import { useQuery } from "@tanstack/react-query";
import NoData from "../components/Data/NoData";
import { LoadingUI } from "../components/Icon";
import Loading from "../components/Data/Loading";
import { getAnnouncement } from "@/api/AnnounceApi";

const Announcement = () => {
  const { data, isLoading } = useQuery<QueryProps>(
    ["announcement"],
    getAnnouncement
  );

  if (isLoading) return <LoadingUI />;
  return (
    <>
      <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
        <div className="font-semibold text-[32px] ">공지사항</div>
        <SearchInput />
      </div>

      {isLoading ? (
        <Loading />
      ) : data?.announcement && data.announcement.length > 0 ? (
        data.announcement.map(({ id, content, createdAt }) => (
          <AnnounceArticle
            key={id}
            id={id}
            content={content}
            createdAt={createdAt}
          />
        ))
      ) : (
        <NoData />
      )}
      <div className="bg-[#EDEDED] w-[800px] h-px mt-8"></div>
      <Pagination totalPages={data?.totalPages} />
    </>
  );
};

export default Announcement;
