"use client";
import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import navigationMenuItems from "@/app/navigation-menu-items";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggleGroup from "@/components/client/theme-toggle-group";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeDrawer = () => setIsDrawerOpen(false);

  const ariaSafeFragmentRouting = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href")!; // cache as `closeDrawer` will release `e`

    closeDrawer();

    requestAnimationFrame(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-muted-foreground"
          onClick={(e) => {
            // Remove focus from button.
            // shadcn applies aria-hidden to everything outside the drawer, including this button.
            // WAI-ARIA doesn't allow focused elements with aria-hidden.
            e.currentTarget.blur();
          }}
        >
          <Menu className="h-[1rem] w-[1rem]" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div>
          {/* Theming */}
          <VisuallyHidden>
            <DrawerTitle>Change Theme</DrawerTitle>
            <DrawerDescription>Select a visual theme</DrawerDescription>
          </VisuallyHidden>
          <div className="w-full flex justify-center">
            <ThemeToggleGroup />
          </div>

          {/* Navigation */}
          <VisuallyHidden>
            <DrawerTitle>Navigation</DrawerTitle>
            <DrawerDescription>
              Select a target to navigate to
            </DrawerDescription>
          </VisuallyHidden>
          <nav className="mx-auto w-full max-w-sm">
            <div className="px-2">
              <Accordion type="single" collapsible>
                {navigationMenuItems.map((navItem, index) => (
                  <AccordionItem key={index} value="item-link">
                    <NonCollapsible>
                      <Link
                        href={navItem.href}
                        onClick={ariaSafeFragmentRouting}
                        className="w-full"
                      >
                        {navItem.title}
                      </Link>
                    </NonCollapsible>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const NonCollapsible = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 items-center justify-between py-4 font-medium hover:underline ">
    {children}
  </div>
);
