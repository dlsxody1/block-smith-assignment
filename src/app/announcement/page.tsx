"use client";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";
import { getAnnouncement } from "../../../prisma/announceQuery";
import { AnnounceProps } from "../types/AnnouncementTypes";
import { useQuery } from "@tanstack/react-query";

const Announcement = () => {
  const [announcement, setAnnouncement] = useState<
    AnnounceProps[] | undefined
  >();

  getAnnouncement().then((res) => setAnnouncement(res));

  return (
    <>
      <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
        <div className="font-semibold text-[32px] ">공지사항</div>
        <SearchInput />
      </div>

      {announcement?.map(({ id, content, createdAt }) => {
        <AnnounceArticle id={id} content={content} createdAt={createdAt} />;
      })}
      <div className="bg-[#EDEDED] w-[800px] h-px mt-8"></div>
      <Pagination />
    </>
  );
};

export default Announcement;
