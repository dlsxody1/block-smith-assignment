// model에서 변경이 있거나 추가가 있으면 「npx prisma generate」
//https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search

import {
  AnnounceProps,
  RequestProps,
  SearchProps,
} from "@/app/types/AnnouncementTypes";
import prisma from "./prisma";

export const updateAnnouncement = async ({
  id,
  title,
  content,
}: RequestProps) => {
  const announcement = await prisma.announcement.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      updatedAt: new Date(),
    },
  });
};

export const getAnnouncement = async (): Promise<AnnounceProps[]> => {
  try {
    const announcement = await prisma?.announcement.findMany();
    return announcement;
  } catch (error) {
    console.error("Error in getAnnouncement:", error);
    throw error; // Re-throw the error to propagate it
  }
};

export const pagination = async () => {
  //select * from announcement where content,title like '%?%' LIMIT 10
  const page = await prisma.announcement.findMany({
    skip: 5,

    take: 10,
  });

  return page;
};

export const searchQuery = async (word: string) => {
  try {
    const search = await prisma.announcement.findMany({
      where: {
        OR: [
          {
            title: {
              contains: word,
            },
          },
          {
            content: {
              contains: word,
            },
          },
        ],
      },
    });
    return search;
  } catch (err) {
    alert(err);
  }
};
