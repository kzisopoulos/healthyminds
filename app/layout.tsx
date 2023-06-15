import Footer from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Healthyminds | Αρχική | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Καλωσήρθατε στο HealthyMinds. Το γραφείο του κλινικού ψυχολόγου Μιχάλη Βαζούρα με έδρα στην Νέα Φιλαδέλφεια. Που εξειδικέυεται στην Γνωσιακή Συμπεριφορική Θεραπεία (ΓΣΘ)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-teal-light">
        <main className="app ">
          <Nav />
          <section className="min-h-[calc(100vh-230px)] my-10">
            {children}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
