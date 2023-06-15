"use client";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FaStream } from "react-icons/fa";
import Link from "next/link";

const MobilieNavMenu = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggle = () => {
    console.log("hello");
    setShowNav((prev) => !prev);
  };

  return (
    <Popover>
      <PopoverTrigger onClick={() => setShowNav(true)}>
        <FaStream
          role="button"
          aria-label="Button for opening mobile navigation"
          className="text-teal-shade-2 text-xl md:hidden"
        />
      </PopoverTrigger>
      {showNav && (
        <PopoverContent className="bg-primary-teal-light rounded-md text-teal-shade-5 text-center md:hidden shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <ul>
            <li>
              <Link
                href="/"
                className="inline-block py-4 hover:bg-teal-shade-1 hover:text-primary-teal-light uppercase tracking-tighter font-medium px-4 w-full "
                aria-label="Συνδεσμός για την αρχική σελίδα"
                onClick={() => setShowNav(false)}
              >
                Αρχικη
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="inline-block py-4 hover:bg-teal-shade-1 hover:text-primary-teal-light uppercase tracking-tighter font-medium px-4 w-full "
                aria-label="Συνδεσμός για την σελίδα Σχετικά με εμάς"
                onClick={() => setShowNav(false)}
              >
                Σχετικα με εμας
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="inline-block py-4 hover:bg-teal-shade-1 hover:text-primary-teal-light uppercase tracking-tighter font-medium px-4 w-full "
                aria-label="Συνδεσμός για την σελίδα υπηρεσίες"
                onClick={() => setShowNav(false)}
              >
                Υπηρεσιες
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="inline-block py-4 hover:bg-teal-shade-1 hover:text-primary-teal-light uppercase tracking-tighter font-medium px-4 w-full "
                aria-label="Συνδεσμός για την σελίδα blog - αρθρογραφίας"
                onClick={() => setShowNav(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-block py-4 hover:bg-teal-shade-1 hover:text-primary-teal-light uppercase tracking-tighter font-medium px-4 w-full "
                aria-label="Συνδεσμός για την σελίδα επικοινωνίας"
                onClick={() => setShowNav(false)}
              >
                Επικοινωνια
              </Link>
            </li>
          </ul>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default MobilieNavMenu;
