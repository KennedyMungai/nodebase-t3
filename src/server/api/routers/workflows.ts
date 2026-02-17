import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { workflowTable } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.session.user);

    return await db.select().from(workflowTable).limit(10);
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    return db.insert(workflowTable).values({
      name: "test-workflow",
    });
  }),
});
