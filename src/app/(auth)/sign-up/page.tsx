import { RegisterForm } from "~/features/auth/components/register-form";
import { requireUnauth } from "~/lib/auth-utils";

const SignUpPage = async () => {
  await requireUnauth();

  return (
    <div className="bg-muted">
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
