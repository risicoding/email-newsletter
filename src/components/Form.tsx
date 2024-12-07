"use client";

import { EmailFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribe } from "@/actions/subscribe";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const Form = () => {
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof EmailFormSchema>) => {
    const res = await subscribe(values.email);

    if (res.error) {
      redirect(`/email-taken?email=${values.email}`);
    }

    redirect(`/success?email=${values.email}`);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className=" flex items-center justify-center px-4 py-2 rounded-full shadow-md border">
        <input
          {...form.register("email")}
          className="p-4 w-full h-full focus:outline-none focus:bg-white"
          placeholder="Enter your email"
        />
        <button
          className={cn(
            "px-5 py-3 h-full bg-[#4A3AFF] font-semibold text-[0.8rem] text-white rounded-full",
            form.formState.isSubmitting && "bg-gray-300 text-gray-700",
          )}
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting" : "Subscribe"}
        </button>
      </div>
    </form>
  );
};

export default Form;
