import {
  AnnounceProps,
  RequestProps,
  SearchProps,
} from "@/app/types/AnnouncementTypes";
import prisma from "./prisma";

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

export const updateAnnouncement = async ({
  id,
  title,
  content,
}: RequestProps) => {};
