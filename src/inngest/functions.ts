import { db } from "~/server/db";
import { workflowTable } from "~/server/db/schema";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", retries: 5 },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching", "5s");

    await step.sleep("transcribing", "5s");

    await step.sleep("sending-to-ai", "5s");

    await step.run("create-workflow", async () => {
      return await db.insert(workflowTable).values({
        name: "test-workflow from inngest",
      });
    });
  },
);
