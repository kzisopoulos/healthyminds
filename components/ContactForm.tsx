"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContactForm } from "@lib/http/HttpClient";
import { ContactFormInputs, contactFormSchema } from "@lib/http/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({ resolver: zodResolver(contactFormSchema) });

  const onFormSubmission = async (data: ContactFormInputs) => {
    try {
      setIsLoading(true);
      const res = await useSubmitContactForm(data);
      console.log(res);
      toast.success(res.data.message);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full  py-10">
      <form
        onSubmit={handleSubmit(onFormSubmission)}
        className="w-full max-w-2xl p-2 sm:p-5 mt-5 rounded-md mx-auto shadow-xl"
      >
        <label className="block p-1">Όνομα</label>
        <input
          {...register("name")}
          placeholder="Όνομα..."
          className="w-full p-2 rounded-md placeholder:text-gray-500 border outline-none"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p
            role="alert"
            className="bg-red-500 text-white pl-2 p-1 mt-2 rounded-md"
          >
            {errors.name.message as string}
          </p>
        )}
        <label className="block p-1">Email</label>
        <input
          {...register("email")}
          placeholder="Email..."
          className="w-full p-2 rounded-md placeholder:text-gray-500 border outline-none"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p
            role="alert"
            className="bg-red-500 text-white pl-2 p-1 mt-2 rounded-md"
          >
            {errors.email.message as string}
          </p>
        )}
        <label className="block p-1">Μήνυμα</label>
        <textarea
          {...register("message")}
          className="block w-full p-2 rounded-md resize-none placeholder:text-gray-500 border"
          aria-invalid={errors.message ? "true" : "false"}
          placeholder="Το μήνυμα σας..."
          rows={10}
        />
        {errors.message && (
          <p
            role="alert"
            className="bg-red-500 text-white pl-2 p-1 mt-2 rounded-md"
          >
            {errors.message.message as string}
          </p>
        )}
        <button
          type="submit"
          className="mt-2 border-2 border-amber-500 uppercase bg-amber-500 rounded-md text-white font-semibold py-1 px-4 "
        >
          <div className="flex items-center gap-2">
            Αποστολη
            {isLoading && <FaSpinner className="animate-spin" />}
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
