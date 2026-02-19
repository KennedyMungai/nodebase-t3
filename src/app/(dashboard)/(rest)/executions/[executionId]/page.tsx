import { requireAuth } from "~/lib/auth-utils";

type Props = {
  params: Promise<{
    executionId: string;
  }>;
};

const ExecutionPage = async ({ params }: Props) => {
  await requireAuth();

  const { executionId } = await params;

  return <div>{executionId}</div>;
};

export default ExecutionPage;
