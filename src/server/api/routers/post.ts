import { eq } from "drizzle-orm";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { user } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.session.user);

    return await db.select().from(user).where(eq(user.id, ctx.session.user.id));
  }),
});
