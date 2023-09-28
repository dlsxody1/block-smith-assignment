import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
import { main } from "../../route";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/announcement/")[1].split("/")[0];
    await main();

    const announcement = await prisma.announcement.findFirst({ where: { id } });

    if (!announcement) {
      return NextResponse.json(
        { message: "해당 공고를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Success", announcement },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/announcement/")[1];
    const { title, content } = await req.json();

    await main();
    const announcement = await prisma.announcement.update({
      data: { title, content },
      where: { id },
    });
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
