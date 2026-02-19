import { requireAuth } from "~/lib/auth-utils";

type Props = {
  params: Promise<{
    credentialId: string;
  }>;
};

const Credential = async ({ params }: Props) => {
  await requireAuth();

  const { credentialId } = await params;

  return <div>{credentialId}</div>;
};

export default Credential;
