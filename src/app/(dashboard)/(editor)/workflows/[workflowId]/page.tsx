import { requireAuth } from "~/lib/auth-utils";

type Props = {
  params: Promise<{
    workflowId: string;
  }>;
};

const Workflow = async ({ params }: Props) => {
  await requireAuth();

  const { workflowId } = await params;

  return <div>{workflowId}</div>;
};

export default Workflow;
