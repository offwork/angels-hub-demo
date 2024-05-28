"use server";
import { ContactFormSchema } from "@/models";

export const onSubmitAction = async (data: ContactFormSchema) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  await fetch("https://getform.io/f/wbrkemda", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });
};
