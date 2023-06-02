import * as z from "zod";

// ***************************************** Contact form schema and type ****************************
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Αυτό το πεδίο είναι υποχρεωτικό." }),
  email: z.string().email({ message: "Μη έγκυρο email." }),
  message: z.string().min(1, { message: "Αυτό το πεδίο είναι υποχρεωτικό." }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
// ****************************************************************************************************
