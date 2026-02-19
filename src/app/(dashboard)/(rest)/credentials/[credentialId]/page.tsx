type Props = {
  params: {
    credentialId: string;
  };
};

const Credential = ({ params: { credentialId } }: Props) => {
  return <div>{credentialId}</div>;
};

export default Credential;
