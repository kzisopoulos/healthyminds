import Spacer from "@components/Spacer";
import { Metadata } from "next";
import { services } from "@lib/static";
import ServiceCard from "@components/ServiceCard";
const Services = () => {
  return (
    <section>
      <header>
        <h1 className="head_text text-center mx-auto green_gradient p-4 max-w-xl">
          Οι <span className="orange_gradient">υπηρεσίες</span> μας
        </h1>
        <h2 className="text-center text-2xl p-4">
          Επαγγελματική φροντίδα για την ψυχική ευεξία
        </h2>
      </header>
      <p className="text-center p-4 max-w-xl mx-auto">
        Εδώ στο HealthyMinds, προσφέρουμε εξειδικευμένη υποστήριξη για την
        ψυχική ευεξία σας. Μέσα από προσαρμοσμένες ατομικές συνεδρίες αλλά και
        ομαδικές συναντήσεις, σας βοηθούμε να επιτύχετε τους στόχους σας και να
        βελτιώσετε την ποιότητα ζωής σας. Είμαστε εδώ για να σας υποστηρίξουμε
        σε κάθε βήμα του ταξιδιού σας προς την ψυχική ευεξία.
      </p>
      <Spacer />
      <div className="flex flex-col items-center md:items-stretch gap-5 md:flex-row md:flex-wrap md:justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            content={service.content}
            coupon={service.coupon}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
};
export const metadata: Metadata = {
  title:
    "Healthyminds | Υπηρεσίες | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Healthyminds | Υπηρεσίες | Ενημερωθείτε για τις υπηρεσίες που προσφέρουμε στο HealthyMinds.",
};
export default Services;
