import { inngest } from "~/inngest/client";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { workflowTable } from "~/server/db/schema";

export const workflowRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(async ({ ctx }) => {
    console.log(ctx.session.user);

    return await db.select().from(workflowTable).limit(10);
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "kennedymungaifmab@gmail.com",
      },
    });

    return { success: true, message: "Job queued" };
  }),
});
