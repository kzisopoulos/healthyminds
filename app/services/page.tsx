import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="py-8">
      <h1 className="heading_text mb-5 max-w-4xl">
        Υπό κατασκευή. Το τμήμα των{" "}
        <span className="orange_gradient">υπηρεσιών</span> του site θα είναι
        σύντομα διαθέσιμο!
      </h1>
      <Image
        src={"./under_construction.svg"}
        alt={"Εικόνα που δείχνει εργάτες να κατασκευάζουν ένα σπίτι."}
        width={300}
        height={300}
        className="mx-auto my-10"
      />
      <Link
        href="/"
        className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md"
      >
        Επιστροφη στην αρχικη
      </Link>
    </section>
  );
};
export const metadata: Metadata = {
  title:
    "Healthyminds | Υπηρεσίες | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Healthyminds | Υπηρεσίες | Ενημερωθείτε για τις υπηρεσίες που προσφέρουμε στο HealthyMinds.",
};
export default page;
