import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Spacer from "./Spacer";

const Footer = () => {
  return (
    <footer>
      <Spacer />
      <h2 className="green_gradient text-center font-semibold my-2">
        healthyminds.
      </h2>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <nav className="flex flex-col items-center gap-2 text-xs  md:w-72 md:items-end lg:items-start uppercase font-medium">
          <Link href="/">Αρχικη</Link>
          <Link href="/about">Σχετικα με εμας</Link>
          <Link href="/services">Υπηρεσιες</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Επικοινωνια</Link>
        </nav>
        <div className="flex-center">
          <a
            href="https://www.facebook.com/HealthyMinds.gr/"
            target="_blank"
            className="block  hover:bg-teal-shade-5 hover:text-primary-teal-light rounded-full p-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/healthyminds.gr/"
            target="_blank"
            className="block  hover:bg-teal-shade-5 hover:text-primary-teal-light rounded-full p-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://gr.linkedin.com/"
            target="_blank"
            className="block  hover:bg-teal-shade-5 hover:text-primary-teal-light rounded-full p-2"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="flex flex-col gap-1 text-xs items-center md:w-72 md:items-start lg:items-end">
          <a href="tel:+6949374893" className="flex items-center gap-1 ">
            <FaPhone /> +30 694 8779291
          </a>
          <a
            href="mailto:healthyminds.gr@gmail.com"
            className="flex items-center gap-1"
          >
            <FaEnvelope /> healthyminds.gr@gmail.com
          </a>
          <span className="flex items-center gap-1 uppercase">
            <FaMapMarkerAlt /> Αναξαγόρα 18, Νέα Φιλαδέλφεια, 14342
          </span>
        </div>
      </div>

      <div className="text-center text-xs mt-4">
        Healthyminds&reg; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
