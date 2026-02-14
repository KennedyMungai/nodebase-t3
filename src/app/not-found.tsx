import { CloudOffIcon } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center gap-4">
      <p className="text-4xl text-red-300">404! Page Not Found</p>
      <CloudOffIcon className="size-64 animate-pulse text-red-300" />
    </div>
  );
};

export default NotFoundPage;
