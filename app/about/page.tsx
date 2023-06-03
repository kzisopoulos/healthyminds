import AccordionQA from "@components/AccordionQA";
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
    <section className="py-8">
      <article>
        <h4 className="heading_text mb-8 text-center">
          Λίγα λόγια για το
          <span className="orange_gradient"> HealthyMinds.</span>
        </h4>
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <Image
            src={"/book.jpg"}
            alt="Εικόνα ενός βίβλιου με γυαλία πάνω"
            width={350}
            height={350}
            className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
          />
          <article className="flex flex-col gap-4">
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
              συνεργασίες, και ενδυνάμωσης. Είμαστε εδώ για να υποστηρίξουμε το
              ταξίδι σας προς μια νέα ζωή, και να βιώσετε ένα ξεχωριστό ταξίδι
              στην Healthy Minds
            </p>
          </article>
        </div>
      </article>
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <article>
        <h4 className="text-2xl font-semibold text-center my-2">
          H <span className="orange_gradient">ομάδα</span> μας!
        </h4>
        <article className="flex flex-col md:flex-row md:gap-8 md:items-center">
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
          <div className="glassmorphism w-full my-2 text-sm ">
            <h3 className="text-xl text-center pb-2">Μιχάλης Βαζούρας</h3>
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
          </div>
        </article>
      </article>

      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <article>
        <h4 className="text-2xl font-semibold text-center my-2">
          Θεραπεία <span className="orange_gradient">online;</span>{" "}
        </h4>
        <p className="max-w-4xl text-center mx-auto my-2">
          Η τεχνολογία μας δίνει την δυνατότητα μέσω της online θεραπείας να
          ξεπεραστούν τα οποιαδήποτε εμπόδια με σκοπό την απόλυτα εχέμυθη
          συνεργασία σου με έναν ειδικό!
        </p>

        <div className="flex flex-col gap-2 my-4 sm:flex-row sm:justify-center  max-w-md mx-auto">
          <Image
            src={"/on_premise.svg"}
            alt="Εικόνα που δείχνει τον θεραπευόμενο στο γραφείο του HealthyMinds."
            width={150}
            height={150}
            className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
          />
          <Image
            src={"/remote.svg"}
            alt="Εικόνα που δείχνει τον θεραπευόμενο σε online συνεδρία με ειδικό του HealthyMinds."
            width={150}
            height={150}
            className="aspect-square rounded-full object-cover shadow-lg mx-auto mb-2"
          />
        </div>
        <h6 className="text-sm font-semibold text-center my-2">
          Τώρα μπορείς να κλείσεις το ραντεβού σου είτε για
          <span className="orange_gradient"> συνεδρία δια ζώσης </span>
          είτε <span className="orange_gradient">online!</span>
        </h6>
      </article>
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <article>
        <h4 className="text-2xl font-semibold text-center my-2">
          <span className="orange_gradient">Q & A</span>
        </h4>
        <AccordionQA />
      </article>
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <article>
        <h4 className="text-2xl font-semibold text-center my-2">
          <span className="orange_gradient">Μεγαλώνουμε!</span>{" "}
        </h4>
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
      </article>
    </section>
  );
};

export default About;
