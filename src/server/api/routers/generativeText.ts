import { inngest } from "~/inngest/client";
import { createTRPCRouter, premiumProcedure } from "../trpc";

export const generativeTextRouter = createTRPCRouter({
  textAI: premiumProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });

    return {
      success: true,
      message: "Job queued",
    };
  }),
});
