import { mailOptions, transporter } from "@config/nodemailer";
import { contactFormSchema } from "@lib/http/api";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const mockErrorData = {
    name: 1,
    email: "a",
    message: "a",
  };
  // TODO: Add logic to keep each email record to the database.
  try {
    const validatedData = contactFormSchema.parse(data);
    await transporter.sendMail({
      ...mailOptions,
      subject: "HealthyMinds: Εκδήλωση ενδιαφέροντος.",
      text: `Παρακαλώ επικοινωνήστε μαζί μου, στο email: ${validatedData.email} Μήνυμα: ${validatedData.message}`,
      html: `
      <div class="desc">
        <div>Όνομα: ${validatedData.name}</div>
        <div>Email: ${validatedData.email}</div>
        <div>Μήνυμα: ${validatedData.message}</div>
      </div>
    `,
    });
    return NextResponse.json(
      {
        success: true,
        message:
          "Το μήνυμα σας απεστάλλει επιτυχώς, σύντομα θα επικοινωνήσουμε μαζί σας.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Τα στοιχεία δεν είναι σωστά. Δοκιμάστε ξανά.",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Σφάλμα συστήματος. Δοκιμάστε ξανά αργότερα.",
      },
      {
        status: 500,
      }
    );
  }
}
