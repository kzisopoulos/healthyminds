import AccordionQA from "@components/AccordionQA";
import Spacer from "@components/Spacer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBrain,
  FaBriefcase,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const About = ({}) => {
  return (
    <article className="">
      <section>
        <header>
          <h1 className="head_text text-center mx-auto green_gradient p-4 max-w-xl">
            Η Ιστορία μας και η αποστολή μας
          </h1>
        </header>
        <div className="flex flex-col lg:flex-row md:items-center gap-10 p-4">
          <Image
            src={"/book.jpg"}
            alt="Εικόνα ενός βίβλιου με γυαλία πάνω"
            width={350}
            height={350}
            className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
          />
          <section className="flex flex-col gap-4">
            <p>
              Στο HealthyMinds πιστεύουμε στη δύναμη της θεραπείας η οποία
              προάγει την προσωπική ανάπτυξη, και την προσωπική ίαση. Θα
              ξεκινήσουμε μαζί αυτό το ταξίδι για μια πιο υγιή χαρούμενη και
              λειτουργική ζωή.
            </p>
            <p>
              Στην HealthyMinds ο σκοπός μας είναι να προωθήσουμε την ψυχική
              υγεία. Επίσης, να προσφέρουμε τις καλύτερες υπηρεσίες για την
              υποστήριξη των θεραπευόμενων. Δίνοντας έμφαση σε τεχνικές που
              υποστηρίζονται από έρευνες και δημιουργώντας θεραπευτικά πλάνα που
              συνάδουν με τις προσωπικές ανάγκες του καθενός, δεσμευόμαστε για
              την υποστήριξη σας ώστε να ξεπεράσουμε μαζί τις δυσκολίες, να
              ανακαλύψουμε την εσωτερική σας δύναμη, και να βελτιώσουμε την
              ποιότητα ζωής
            </p>
            <p>
              Ο σκοπός μας είναι να χτισουμε μια σχέση εμπιστοσύνης σεβασμού,
              συνεργασίας, και ενδυνάμωσης. Είμαστε εδώ για να υποστηρίξουμε το
              ταξίδι σας προς μια νέα ζωή, και να βιώσετε κάτι ξεχωριστό.
            </p>
          </section>
        </div>
      </section>
      <Spacer />
      <section>
        <header>
          <h2 className="text-2xl font-semibold text-center my-2">
            H <span className="orange_gradient">ομάδα</span> μας!
          </h2>
        </header>
        <div className="flex flex-col md:flex-row md:gap-8 md:items-center">
          <div>
            <Image
              src={"/mv_selfie.jpg"}
              alt="Φωτογραφία του κλινικού ψυχολόγου Μιχάλη Βαζούρα"
              width={200}
              height={200}
              className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
            />
            <p className="text-xs text-center">
              &quot;Κλινικός Ψυχολόγος, Ιδρυτής&quot;
            </p>
          </div>
          <section className="glassmorphism w-full my-2 text-sm ">
            <header>
              <h3 className="text-xl text-teal-shade-4 font-medium text-center pb-4">
                Μιχάλης Βαζούρας
              </h3>
            </header>
            <div className="flex flex-col gap-1 pb-1 md:flex-row md:items-center md:gap-4">
              <FaUniversity className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="text-center w-full md:text-start">
                BCA, Tμήμα Ψυχολογίας, Αμερικανικό κολλέγιο Ελλάδος (DEREE).
              </p>
            </div>
            <div className="flex flex-col gap-1 pb-1 md:flex-row md:items-center md:gap-4">
              <FaGraduationCap className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="text-center w-full md:text-start">
                Master, Τμήμα Κλινικής Ψυχολογίας ,Πανεπιστήμιο Ουτρέχτης.
              </p>
            </div>
            <div className="flex flex-col gap-1 pb-1 md:flex-row md:items-center md:gap-4">
              <FaBrain className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="text-center w-full md:text-start">
                Ειδικότητα, Γνωστική Συμπεριφορική Ψυχοθεραπεία.
              </p>
            </div>
            <div className="flex flex-col gap-1 pb-1 md:flex-row md:items-center md:gap-4">
              <FaBriefcase className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="text-center w-full md:text-start">
                Εθελοντική εργασία στην ψυχιατρική κλινική παιδιών και εφήβων
                Σισμανόγλειο, στη Μ.Κ.Ο. Μ.Α.Ν.Α και ως ψυχολόγος σε ιδιωτικά
                κέντρα.
              </p>
            </div>
          </section>
        </div>
      </section>
      <Spacer />
      <section>
        <header>
          <h2 className="text-2xl font-semibold text-center my-2">
            Θεραπεία <span className="orange_gradient">online;</span>{" "}
          </h2>
        </header>
        <p className="max-w-4xl text-center mx-auto my-2">
          Η τεχνολογία μας δίνει την δυνατότητα μέσω της online θεραπείας να
          ξεπεραστούν τα οποιαδήποτε εμπόδια με σκοπό την απόλυτα εχέμυθη
          συνεργασία σου με έναν ειδικό!
        </p>

        <div className="flex flex-col gap-2 my-4 sm:flex-row sm:justify-center  max-w-md mx-auto">
          <figure>
            <Image
              src={"/on_premise.svg"}
              alt="Εικόνα που δείχνει τον θεραπευόμενο στο γραφείο του HealthyMinds."
              width={150}
              height={150}
              className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
            />
          </figure>
          <figure>
            <Image
              src={"/remote.svg"}
              alt="Εικόνα που δείχνει τον θεραπευόμενο σε online συνεδρία με ειδικό του HealthyMinds."
              width={150}
              height={150}
              className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
            />
          </figure>
        </div>
        <p className="text-sm font-semibold text-center my-2">
          Τώρα μπορείς να κλείσεις το ραντεβού σου είτε για
          <span className="orange_gradient"> συνεδρία δια ζώσης </span>
          είτε <span className="orange_gradient">online!</span>
        </p>
      </section>
      <Spacer />
      <section>
        <header>
          <h2 className="text-2xl font-semibold text-center my-2">
            <span className="orange_gradient">FAQ</span>
          </h2>
        </header>
        <AccordionQA />
      </section>
      <Spacer />
      <section>
        <header>
          <h2 className="text-2xl font-semibold text-center my-2">
            <span className="orange_gradient">Μεγαλώνουμε!</span>{" "}
          </h2>
        </header>
        <p className="text-center max-w-xl mx-auto">
          Σας ευχαριστούμε πολύ για την στήριξη σας! Η ομάδα του HealthyMinds
          αναζητά ψυχολόγο, κάνε την αίτηση σου και μπές στην ομάδα μας.
        </p>
        <div className="text-center my-2">
          <Link
            href="/contact"
            className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md"
          >
            Αιτηση
          </Link>
        </div>
      </section>
    </article>
  );
};
export const metadata: Metadata = {
  title:
    "Healthyminds | Σχετικά με εμάς | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Healthyminds | Επικοινωνία | Στείλτε μας την ερώτηση σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.",
};
export default About;
