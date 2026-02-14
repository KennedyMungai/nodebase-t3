import { requireAuth } from "~/lib/auth-utils";

const HomePage = async () => {
  await requireAuth();

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      Protected server component
    </div>
  );
};

export default HomePage;
