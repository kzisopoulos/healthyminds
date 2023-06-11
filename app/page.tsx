import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <h1 className="text-center head_text green_gradient p-4">
        HealthyMinds.
      </h1>
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
      <div className="text-center pt-4 pb-8">
        <Link
          href="/about"
          className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md"
        >
          Γνωριστε μας
        </Link>
      </div>
      <Image
        src={"/hero2.jpg"}
        alt="Picture one hand trying to help another"
        width={400}
        height={400}
        className=" mx-auto aspect-square rounded-full shadow-xl object-cover"
      />
      <hr className="w-48 h-1 mx-auto my-2 bg-green-100 border-0 rounded md:my-10" />
      <div className="flex flex-col gap-4 justify-center lg:flex-row lg:gap-10">
        <div className="glassmorphism w-full">
          <h3 className="green_gradient md:text-xl font-semibold">
            Μεθοδολογία
          </h3>
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
          <p>
            Τέλος, η ΓΣΘ μπορεί να χρησιμοποιηθεί είτε μόνη της είτε σε
            συνδυασμό με την κατάλληλη φαρμακευτική αγωγή, ανάλογα με την
            σοβαρότητα της κατάστασης του κάθε θεραπευόμενου.
          </p>
        </div>
        <div className="glassmorphism w-full">
          <h3 className="green_gradient md:text-xl font-semibold">
            Ωφέλη Ψυχοθεραπείας
          </h3>
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
            className="inline-block mt-4 uppercase orange_background text-white font-semibold py-2 px-4 text-base rounded-md"
          >
            Υπηρεσιες
          </Link>
        </div>
      </div>
    </section>
  );
}
