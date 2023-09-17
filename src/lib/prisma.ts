import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// model에서 변경이 있거나 추가가 있으면 「npx prisma generate」
//https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search
export const prisma = client({
  data: {},
});
