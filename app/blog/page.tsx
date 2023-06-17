import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section>
      <h1 className="heading_text mb-5 max-w-4xl">
        Υπό κατασκευή. Το τμήμα των{" "}
        <span className="orange_gradient">blogs - αρθρογραφίας</span> του site
        θα είναι σύντομα διαθέσιμο!
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
    "Healthyminds | Άρθρα - Blog | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Healthyminds | Αρθρογραφία - Blogs | Διαβάστε πρώτοι τα νέα άρθρα του κλινικού ψυχολόγου Μιχάλη Βαζούρα.",
};

export default Blog;
