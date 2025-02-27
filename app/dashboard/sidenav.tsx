"use client";

import AppLogo from "../../components/shared/app-logo";
import NavLinks from "./nav-links";
import { Button } from "@/components/ui/button";
import { PowerIcon, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "./mode-toggle";
import { handleSignOut } from "@/lib/actions/auth.actions"; // Import sign-out action

export default function Sidenav() {
  return (
    <div className="flex flex-col h-full p-3">
      <div>
        <AppLogo />
      </div>

      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:mt-2">
        <NavLinks />
        <div className="h-auto w-full grow rouned-md md:block"></div>

        {/* Settings Dropdown Menu */}
        <div className="flex md:flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-6 mr-2" />
                <span className="hidden md:block">Settings</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <ModeToggle />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <form action={handleSignOut}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500"
                  >
                    <PowerIcon className="w-6 mr-2" />
                    Sign Out
                  </Button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
