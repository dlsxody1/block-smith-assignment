import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("연결되지 않았습니다.");
  }
}

export async function GET(req: NextRequest) {
  try {
    const totalAnnouncement = await prisma?.announcement.count();
    const totalPages = await Math.ceil(totalAnnouncement / 10);

    const announcement = await prisma.announcement.findMany({
      skip: totalAnnouncement - 10,
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        message: "성공적으로 데이터를 불러왔습니다.",
        announcement,
        totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버에서 에러가 발생했습니다.", error },
      { status: 500 }
    );
  }
}

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
