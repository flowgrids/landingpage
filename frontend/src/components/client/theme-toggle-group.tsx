"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* TODO: Render different background on button that represents current setting */
/* TODO: Fix Hover color: In light mode it isn't visible. */

export default function ThemeToggleGroup() {
  const { setTheme } = useTheme();

  return (
    <div className="border rounded-full overflow-hidden text-muted-foreground border-foreground/20">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className="rounded-full text-muted-foreground"
      >
        <Sun className="h-[1rem] w-[1rem]" />
        <span className="sr-only">Light</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className="rounded-full"
      >
        <Monitor className="h-[1rem] w-[1rem]" />
        <span className="sr-only">System</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className="rounded-full"
      >
        <Moon className="h-[1rem] w-[1rem]" />
        <span className="sr-only">Dark</span>
      </Button>
    </div>
  );
}
