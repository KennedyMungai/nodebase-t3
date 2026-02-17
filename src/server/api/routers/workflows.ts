import { generateText } from "ai";
import { inngest } from "~/inngest/client";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";
import { workflowTable } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  testAI: protectedProcedure.mutation(async ({ ctx }) => {
    const { text } = await generateText({
      model: "google/gemini-2.5-flash",
      prompt: "Write a vegetarian lasagna recipe for 4 people",
    });

    return text;
  }),
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
