import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Settings, Wheat } from "lucide-react";
import { Button } from "./ui/button";

// Import Data
import {
  menuItemsGeneral,
  menuItemsTools,
  menuItemsSupport,
} from "../data/sidebarData";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/*  */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Wheat className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold">ADMIN</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* GENERAL */}
        <SidebarGroup>
          <SidebarGroupLabel>GENERAL</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsGeneral.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      disabled={item.disabled}
                    >
                      <Link
                        to={item.url}
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          if (item.disabled) e.preventDefault();
                        }}
                      >
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* TOOLS */}
        <SidebarGroup>
          <SidebarGroupLabel>TOOLS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsTools.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      disabled={item.disabled}
                    >
                      <Link
                        to={item.url}
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          if (item.disabled) e.preventDefault();
                        }}
                      >
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* SUPPORT */}
        <SidebarGroup>
          <SidebarGroupLabel>SUPPORT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsSupport.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      disabled={item.disabled}
                    >
                      <Link
                        to={item.url}
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          if (item.disabled) e.preventDefault();
                        }}
                      >
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        disabled={item.disabled}
                      >
                        <Link
                          to={item.url}
                          className="flex items-center gap-2"
                          onClick={(e) => {
                            if (item.disabled) e.preventDefault();
                          }}
                        >
                          {item.icon && (
                            <item.icon className="size-4 shrink-0" />
                          )}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent> */}
      <SidebarFooter className="py-6">
        <Button variant="outline" size="sm" className="w-full bg-transparent">
          <Settings className="w-4 h-4 mr-2" />
          Configuración
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
