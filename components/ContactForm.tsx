"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Αυτό το πεδίο είναι υποχρεωτικό." }),
  email: z.string().email({ message: "Μη έγκυρο email." }),
  message: z.string().min(1, { message: "Αυτό το πεδίο είναι υποχρεωτικό." }),
});

type Inputs = z.infer<typeof schema>;
type FormError = {
  generalFormError: string | null;
  errors:
    | {
        fieldName: string | number;
        fieldError: string;
      }[]
    | null;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // const onSubmit = (data: Inputs) => {
  //   try {
  //     const errors = schema.parse(data);
  //   } catch (error) {
  //     // if (error instanceof z.ZodError) {
  //     //   const errors = error.errors.map((err) => {
  //     //     return {
  //     //       fieldName: err.path[0],
  //     //       fieldError: err.message,
  //     //     };
  //     //   });
  //     //   setErrors({ generalFormError: null, errors });
  //     //   return;
  //     // }
  //     // setErrors({
  //     //   generalFormError: "Σφάλμα, δοκιμάστε ξανά αργότερα.",
  //     //   errors: null,
  //     // });
  //   }
  // };

  return (
    <div className="mx-auto w-full bg-green-50 ">
      <form
        //@ts-ignore
        onSubmit={() => handleSubmit()}
        className="w-full max-w-2xl p-2 sm:p-5 mt-5 rounded-md mx-auto"
      >
        <label className="block p-1">Όνομα</label>
        <input
          {...register("name")}
          placeholder="Όνομα..."
          className="w-full p-2 rounded-md"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p
            role="alert"
            className="bg-red-100 text-red-500 p-1 mt-1 rounded-md"
          >
            {errors.name.message as string}
          </p>
        )}
        <label className="block p-1">Email</label>
        <input
          {...register("email")}
          placeholder="Email..."
          className="w-full p-2 rounded-md"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p
            role="alert"
            className="bg-red-100 text-red-500 p-1 mt-1 rounded-md"
          >
            {errors.email.message as string}
          </p>
        )}
        <label className="block p-1">Μήνυμα</label>
        <textarea
          {...register("message")}
          className="block w-full p-2 rounded-md resize-none"
          aria-invalid={errors.message ? "true" : "false"}
          placeholder="Το μήνυμα σας..."
          rows={10}
        />
        {errors.message && (
          <p
            role="alert"
            className="bg-red-100 text-red-500 p-1 mt-1 rounded-md"
          >
            {errors.message.message as string}
          </p>
        )}
        <button
          type="submit"
          className="mt-2 border-2 border-green-500 uppercase bg-green-500 rounded-md text-white font-semibold py-1 px-4 "
        >
          Αποστολη
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
