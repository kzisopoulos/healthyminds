"use client";
import Link from "next/link";
import MobileNavMenu from "@components/MobileNavMenu";
import { FC } from "react";
import DesktopNavMenu from "@/components/DesktopNavMenu";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <nav className="flex-between w-full my-3">
      <Link href="/">
        <span className="logo_text green_gradient">healthyminds.</span>
      </Link>
      <MobileNavMenu />
      <DesktopNavMenu />
    </nav>
  );
};

export default Nav;
