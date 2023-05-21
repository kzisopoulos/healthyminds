import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const MobileNavMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center md:hidden text-green-900  shadow-blackA7 outline-none hover:bg-green-100 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon style={{ scale: "1.5" }} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] text-base bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="cursor-pointer group  rounded-[3px] flex items-center p-2 relative pl-[25px] select-none outline-none  data-[highlighted]:bg-green-200 data-[highlighted]:text-black1">
            <Link href="/">Αρχική</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="cursor-pointer group   rounded-[3px] flex items-center p-2 relative pl-[25px] select-none outline-none  data-[highlighted]:bg-green-200 data-[highlighted]:text-black1">
            <Link href="/services">Υπηρεσίες</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="cursor-pointer group  rounded-[3px] flex items-center p-2 relative pl-[25px] select-none outline-none  data-[highlighted]:bg-green-200 data-[highlighted]:text-black1">
            <Link href="/blog">Blog</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="cursor-pointer group   rounded-[3px] flex items-center p-2 relative pl-[25px] select-none outline-none  data-[highlighted]:bg-green-200 data-[highlighted]:text-black1">
            <Link href="/contact">Επικοινωνία</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileNavMenu;
