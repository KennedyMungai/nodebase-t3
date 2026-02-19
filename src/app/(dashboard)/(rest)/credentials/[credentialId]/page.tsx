type Props = {
  params: Promise<{
    credentialId: string;
  }>;
};

const Credential = async ({ params }: Props) => {
  const { credentialId } = await params;

  return <div>{credentialId}</div>;
};

export default Credential;
