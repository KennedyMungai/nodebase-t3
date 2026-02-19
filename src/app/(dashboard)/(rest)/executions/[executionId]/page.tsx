type Props = {
  params: Promise<{
    executionId: string;
  }>;
};

const ExecutionPage = async ({ params }: Props) => {
  const { executionId } = await params;

  return <div>{executionId}</div>;
};

export default ExecutionPage;