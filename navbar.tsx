"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-white">The Navbar will show on top of the page</p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-full md:w-[80vw] mx-auto z-50", className)}
    >
        <div className="justify-around"></div>
      <Menu  setActive={setActive}>
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/images/logo-text.svg"
            alt="persisst logo"
            width={200}
            height={60}
          />
        </Link>

        <div className="flex text-1xl space-x-10">
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/About/Lab">Our Lab</HoveredLink>
            <HoveredLink href="/About/Team">Our Team</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Research/Blogs">Blogs</HoveredLink>
            <HoveredLink href="/Research/Projects">Projects</HoveredLink>
            <HoveredLink href="/Research/Publications">Publications</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/Research/Blogs">FAQs</HoveredLink>
            <HoveredLink href="/Research/Projects">Internal Resources</HoveredLink>
            <HoveredLink href="/Research/Publications">External Resources</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Let's Connect">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Research/Blogs">Join Us</HoveredLink>
                <HoveredLink href="/Research/Projects">Contact Us</HoveredLink>
            </div>
        </MenuItem>

        </div>
        
      </Menu>
    </div>
  );
}

export default Navbar;
