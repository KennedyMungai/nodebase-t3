"use client";

import { FolderOpenIcon } from "lucide-react";

export const AppSidebar = () => {
  const menuItems = [
    {
      title: "Workflows",
      items: [{ title: "Workflows", icon: FolderOpenIcon, url: "/workflows" }],
    },
  ];

  return <div>App Sidebar</div>;
};
