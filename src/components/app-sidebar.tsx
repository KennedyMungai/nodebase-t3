"use client";

import { FolderOpenIcon, HistoryIcon, KeyIcon } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export const AppSidebar = () => {
  const menuItems = [
    {
      title: "Main",
      items: [
        { title: "Workflows", icon: FolderOpenIcon, url: "/workflows" },
        { title: "Credentials", icon: KeyIcon, url: "/credentials" },
        { title: "Executions", icon: HistoryIcon, url: "/executions" },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupContent>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={false}
                    asChild
                    className="h-10 gap-x-4 px-4"
                  >
                    <Link href={item.url} prefetch>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
