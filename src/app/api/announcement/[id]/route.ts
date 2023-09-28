import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import { main } from "../route";

export async function GET(req: NextRequest) {
  try {
    const id = req.url.split("/announcement/")[1];
    console.log(id);
    const announcement = await prisma?.announcement.findFirst({
      where: {
        id,
      },
    });
    console.log(announcement);
    return NextResponse.json(
      { message: "성공적으로 데이터를 불러왔습니다.", announcement },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "서버에서 에러가 발생했습니다.", error },
      { status: 500 }
    );
  }
}

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("/announcement/")[1];
    await main();
    const announcement = await prisma.announcement.delete({ where: { id } });
    return NextResponse.json(
      { message: "Success", announcement },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
