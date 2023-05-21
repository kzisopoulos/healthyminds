import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr className="my-3 h-0.5 border-t-0 bg-green-100 opacity-100 dark:opacity-50" />
      <div className="green_gradient text-center font-semibold">
        healthyminds.
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <nav className="flex flex-col items-center gap-1 text-xs text-green-800 md:w-60 md:items-start">
          <Link href="/">Αρχική</Link>
          <Link href="/">Υπηρεσίες</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Επικοινωνία</Link>
        </nav>
        <div className="flex-center">
          <a href="" className="block  hover:bg-green-100 rounded-full p-2">
            <FaFacebookF className="text-green-800" />
          </a>
          <a href="" className="block  hover:bg-green-100 rounded-full p-2">
            <FaInstagram className="text-green-800" />
          </a>
          <a href="" className="block  hover:bg-green-100 rounded-full p-2">
            <FaLinkedinIn className="text-green-800" />
          </a>
        </div>

        <div className="flex flex-col gap-1 text-green-800 text-xs items-center md:w-60 md:items-start ">
          <a href="tel:+6949374893" className="flex items-center gap-1 ">
            <FaPhone /> +30 694 9374893
          </a>
          <a
            href="mailto:healthyminds@gmail.gr"
            className="flex items-center gap-1"
          >
            <FaEnvelope /> healthyminds@gmail.gr
          </a>
          <a
            href="mailto:healthyminds@gmail.gr"
            className="flex items-center gap-1"
          >
            <FaMapMarkerAlt /> Αναξαγόρα 18, Νέα Φιλαδέλφεια, 14342
          </a>
        </div>
      </div>

      <div className="text-center text-green-800 text-xs mt-2">
        Healthyminds&reg; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
