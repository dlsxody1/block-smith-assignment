"use client";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";
import { QueryProps } from "../types/AnnouncementTypes";
import { useQuery } from "@tanstack/react-query";
import NoData from "./NoData";

const Announcement = () => {
  const getAnnouncement = async () => {
    const res = await fetch(`http://localhost:3000/api/announcement`);
    const data = await res.json();
    return data;
  };

  const { data } = useQuery<QueryProps>(["announcement"], getAnnouncement);

  return (
    <>
      <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
        <div className="font-semibold text-[32px] ">공지사항</div>
        <SearchInput />
      </div>

      {data?.announcement?.length !== 0 ? (
        data?.announcement.map(({ id, content, createdAt }) => {
          return (
            <AnnounceArticle
              key={id}
              id={id}
              content={content}
              createdAt={createdAt}
            />
          );
        })
      ) : (
        <NoData />
      )}
      <div className="bg-[#EDEDED] w-[800px] h-px mt-8"></div>
      <Pagination />
    </>
  );
};

export default Announcement;
