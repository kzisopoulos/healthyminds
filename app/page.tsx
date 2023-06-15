import Spacer from "@components/Spacer";
import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <header>
        <h1 className="head_text capitalize text-center mx-auto green_gradient p-4 max-w-lg">
          ψυχολογικό κέντρο
          <span className="orange_gradient"> HealthyMinds.</span>
        </h1>
      </header>
      <p className="text-center max-w-xl mx-auto p-4">
        Καλωσήρθατε στο HealthyMinds, ο έμπιστος προορισμός σας για ψυχική υγεία
        και ευεξία. Στο HealthyMinds, καταλαβαίνουμε το πόσο σημαντικό ρόλο
        παίζει η ψυχική υγεία στον καθένα μας και στην ποιότητα ζωής μας.
      </p>
      <p className="text-center max-w-xl mx-auto p-4">
        Με πελατοκεντρική προσέγγιση και βαθιά κατανόηση του να είσαι καλά
        ψυχολογικά , προσπαθούμε να δημιουργήσουμε ένα ασφαλές περιβάλλον όπου
        οι θεραπευόμενοι θα μπορούν να εκφράσουν τις σκέψεις , τα συναισθήματα
        και τις εμπειρίες τους.
      </p>
      <div className="text-center p-4">
        <Link
          href="/about"
          className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md"
        >
          Γνωριστε μας
        </Link>
      </div>
      <Spacer />
      <figure>
        <Image
          src={"/hero2.jpg"}
          alt="Picture one hand trying to help another"
          priority={true}
          width={400}
          height={400}
          className=" mx-auto aspect-square rounded-full shadow-xl object-cover"
        />
      </figure>
      <Spacer />
      <article className="flex flex-col gap-4 justify-center lg:flex-row lg:gap-10">
        <section className="glassmorphism w-full">
          <header>
            <h2 className="md:text-xl font-semibold text-2xl text-teal-shade-3 mb-2">
              Μεθοδολογία
            </h2>
          </header>
          <p className="py-2">
            Το θεραπευτικό μοντέλο που υποστηρίζουμε στο HealthyMinds είναι η
            γνωσιακή συμπεριφορική θεραπεία (ΓΣΘ). Το συγκεκριμένο μοντέλο
            θεραπείας απαιτεί από τον θεραπευτή και τον θεραπευόμενο να
            δουλέψουν μαζί ώστε να επιτύχουν την αναγνώριση και την κατανόηση
            των προβλημάτων που υπάρχουν ανάμεσα στις σκέψεις, τα συναισθήματα
            και τη συμπεριφορά. Η θεραπεία αφορά το τώρα και τα συμπτώματα του
            παρόντος.
          </p>
          <p className="py-2">
            Στόχος είναι να προσφέρει μια άμεση ανακούφιση στον θεραπευόμενο
            δουλεύοντας αυτά που τον απασχολούν εδώ και τώρα. Αυτή η θεραπευτική
            διαδικασία οδηγεί στον καθορισμό των στόχων που θα τεθούν και στην
            στρατηγική που θα ακολουθηθεί για την επίτευξη.
          </p>
          <p className="py-2">
            Τέλος, η ΓΣΘ μπορεί να χρησιμοποιηθεί είτε μόνη της είτε σε
            συνδυασμό με την κατάλληλη φαρμακευτική αγωγή, ανάλογα με την
            σοβαρότητα της κατάστασης του κάθε θεραπευόμενου.
          </p>
        </section>
        <section className="glassmorphism w-full flex flex-col">
          <header>
            <h2 className="md:text-xl font-semibold text-2xl text-teal-shade-3 mb-2">
              Ωφέλη Ψυχοθεραπείας
            </h2>
          </header>
          <p className="pt-2">Που μπορεί να βοηθήσει η ΓΣΘ</p>
          <ul className="py-2 flex flex-col gap-1">
            <li className="flex items-center">
              <FaCaretRight />
              Αγχώδεις διαταραχές
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Φοβίες
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Κατάθλιψη
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Διατροφικές διαταραχές
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Ψυχαναγκαστική Καταναγκαστική (ή Ιδεοληπτική) Διαταραχή
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Προβλήματα διαχείρισης θυμού
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Προβλήματα σχέσεων
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              Προβλήματα με αλκοόλ ή ουσίες
            </li>
          </ul>
          <Link
            href="/services"
            className="uppercase orange_background mt-4 text-white font-semibold py-2 px-4 text-base shrink-0 rounded-md self-start lg:mt-auto"
          >
            Υπηρεσιες
          </Link>
        </section>
      </article>
    </section>
  );
}
