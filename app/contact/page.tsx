"use client";
import ContactForm from "@components/ContactForm";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = ({}) => {
  return (
    <section className="py-4">
      <h1 className="heading_text mb-5 max-w-5xl">
        <div className="mb-3 md:mb-0">
          Έλα να ξεκινήσουμε λοιπόν με την πρώτη σου συνδεδρία
          <span className="orange_gradient"> εντελώς δωρεάν.</span>
        </div>
        Ένα κλίκ <span className="orange_gradient">away</span> απο το να κάνεις
        μία νέα <span className="orange_gradient">αρχή!</span>
      </h1>
      <article className="flex flex-col max-w-3xl gap-5 items-center md:flex-row  md:items-start">
        <p className="md:pt-5">
          Καμία αρχή δεν είναι εύκολή, όμως στην HealthyMinds πιστέυουμε σε
          εσένα και σου δίνουμε την ευκαιρία να γνωρίσεις την ομάδα μας με την
          πρώτη σου συνδεδρία εντελώς δωρεάν.
        </p>
        <Image
          src={"./contact.svg"}
          alt="Image of someone sending an email"
          width={200}
          height={125}
        />
      </article>
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

export default page;
