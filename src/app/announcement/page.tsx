"use client";
import React, { useEffect, useState } from "react";
import SearchInput from "../components/Input/SearchInput";
import AnnounceArticle from "../components/Article/AnnounceArticle";
import Pagination from "../components/Pagination/Pagination";
import { getAnnouncement } from "../../../prisma/announceQuery";
import { AnnounceProps } from "../types/AnnouncementTypes";
import { useQuery } from "@tanstack/react-query";
import { NextResponse } from "next/server";
import NoData from "./NoData";

const Announcement = (response: Response) => {
  const [announcement, setAnnouncement] = useState<
    AnnounceProps[] | undefined
  >();

  const getAnnouncement = async () => {
    const res = await fetch(`http://localhost:3000/api/announcement/`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAnnouncement().then((res) => setAnnouncement(res.announcement));
  }, []);

  console.log(announcement);
  return (
    <>
      <div className="flex justify-between pb-0 items-center self-stretch pb-6 border-b border-[#EDEDED] ">
        <div className="font-semibold text-[32px] ">공지사항</div>
        <SearchInput />
      </div>

      {announcement?.length === 0 ? (
        announcement?.map(({ id, content, createdAt }) => {
          <AnnounceArticle id={id} content={content} createdAt={createdAt} />;
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
