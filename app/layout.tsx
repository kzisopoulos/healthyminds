import Footer from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Healthyminds",
  description: "Καλωσήρθατε στην Healthyminds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-50 via-amber-50 to-green-50">
        <main className="app ">
          <Nav />
          <section className="min-h-[calc(100vh-230px)]">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
