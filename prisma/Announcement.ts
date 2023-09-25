import { PrismaClient } from "@prisma/client";

// model에서 변경이 있거나 추가가 있으면 「npx prisma generate」
//https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search

const prisma = new PrismaClient();

interface RequestProps {
  id: string;
  title: string;
  content: string;
}

interface SearchProps extends Omit<RequestProps, "id"> {}

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

export const getAnnouncement = async () => {
  const announcement = await prisma.announcement.findMany();
};

export const pagination = async () => {
  const page = await prisma.announcement.findMany({
    skip: 5,
    take: 10,
  });

  return page;
};

export const searchQuery = async ({ title, content }: SearchProps) => {
  const search = await prisma.announcement.findMany({
    where: {
      OR: [
        {
          title: {
            contains: title,
          },
        },
        {
          content: {
            contains: content,
          },
        },
      ],
    },
  });

  return search;
};
