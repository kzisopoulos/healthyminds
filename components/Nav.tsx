"use client";
import Link from "next/link";
import { FC } from "react";
import DesktopNavMenu from "@/components/DesktopNavMenu";
import MobilieNavMenu from "./MobileNavMenu";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <nav className="flex-between w-full my-3">
      <Link href="/">
        <span className="logo_text green_gradient">healthyminds.</span>
      </Link>
      <MobilieNavMenu />
      <DesktopNavMenu />
    </nav>
  );
};

export default Nav;
