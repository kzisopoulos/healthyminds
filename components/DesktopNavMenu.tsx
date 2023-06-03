import Link from "next/link";
import { FC } from "react";

interface DesktopNavMenuProps {}

const DesktopNavMenu: FC<DesktopNavMenuProps> = ({}) => {
  return (
    <nav className="hidden md:flex gap-5 text-green-800">
      <Link className="link" href="/">
        Αρχική
      </Link>
      <Link className="link" href="/about">
        Σχετικά με εμάς
      </Link>
      <Link className="link" href="/services">
        Υπηρεσίες
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
      <Link className="link" href="/contact">
        Επικοινωνία
      </Link>
    </nav>
  );
};

export default DesktopNavMenu;
