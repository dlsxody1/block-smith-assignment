// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export const GetAnnouncement = async () => {
//   const announcements = await prisma.findMany();
//   return NextResponse.json(announcements);
// };

// interface ReqProps {
//   id: String;
//   title: String;
//   content: String;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export const updateAnnouncement = async (req: ReqProps) => {
//   try {
//     const announcement = await prisma.announcement.update({
//       req,
//     });
//   } catch (err) {
//     alert(err);
//   }
// };
