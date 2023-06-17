"use client";
import ContactForm from "@components/ContactForm";
import Spacer from "@components/Spacer";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section>
      <header>
        <h1 className="head_text text-center mx-auto green_gradient p-4 max-w-xl">
          Επικοινωνήστε μαζί μας
        </h1>
      </header>
      <article className="flex flex-col text-center p-4 gap-5 items-center justify-center max-w-xl mx-auto">
        <p>
          Καμία αρχή δεν είναι εύκολή, όμως στην HealthyMinds πιστέυουμε σε εσάς
          και σας δίνουμε την ευκαιρία να γνωρίσετε την ομάδα μας με την πρώτη
          σας συνδεδρία εντελώς δωρεάν.
        </p>
        <p>
          Στείλτε μας ένα μήνυμα και αφήστε την επαγγελματική μας ομάδα να
          φροντίσει για εσάς.
        </p>
        <Image
          src={"./contact.svg"}
          alt="Image of someone sending an email"
          width={200}
          height={125}
        />
      </article>
      <Spacer />
      <ContactForm />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
