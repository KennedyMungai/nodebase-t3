import type { ReactNode } from "react";
import { AppHeader } from "~/components/app-header";

type Props = {
  children: ReactNode;
};

const RestRouteLayout = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default RestRouteLayout;
