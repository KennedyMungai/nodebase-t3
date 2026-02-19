type Props = {
  params: Promise<{
    workflowId: string;
  }>;
};

const Workflow = async ({ params }: Props) => {
  const { workflowId } = await params;

  return <div>{workflowId}</div>;
};

export default Workflow;
