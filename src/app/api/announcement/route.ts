import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("연결되지 않았습니다.");
  }
}

export async function GET() {
  try {
    const announcement = await prisma?.announcement.findMany();

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
