"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

const SubscriptionsPage = () => {
  const textAI = api.generativeText.textAI.useMutation({
    onSuccess: () => {
      toast.success("Success");
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return (
    <Button onClick={() => textAI.mutate()}>Click to test subscription</Button>
  );
};

export default SubscriptionsPage;
