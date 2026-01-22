"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="relative overflow-hidden">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-[8rem]">
				<DropdownMenuItem 
					onClick={() => setTheme("light")}
					className="cursor-pointer flex items-center gap-2"
				>
					<SunIcon className="h-4 w-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme("dark")}
					className="cursor-pointer flex items-center gap-2"
				>
					<MoonIcon className="h-4 w-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme("system")}
					className="cursor-pointer flex items-center gap-2"
				>
					<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
						<line x1="9" y1="9" x2="15" y2="15"/>
						<line x1="15" y1="9" x2="9" y2="15"/>
					</svg>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
