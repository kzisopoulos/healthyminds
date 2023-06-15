import Link from "next/link";

const DesktopNavMenu = () => {
  return (
    <nav className="hidden text-sm tracking-tighter gap-3 md:flex lg:text-base lg:gap-5 text-teal-shade-4 uppercase font-medium">
      <Link className="link" href="/">
        Αρχικη
      </Link>
      <Link className="link" href="/about">
        Σχετικα με εμας
      </Link>
      <Link className="link" href="/services">
        Υπηρεσιες
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
      <Link className="link" href="/contact">
        Επικοινωνια
      </Link>
    </nav>
  );
};

export default DesktopNavMenu;
