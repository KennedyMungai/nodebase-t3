import { inngest } from "~/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const generativeText = createTRPCRouter({
  testAI: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),
});
