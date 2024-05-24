"use client"
import { ContactFormSchema } from "@/models";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSend from "../ui/ah-button-send";
import Textbox from "../ui/ah-textbox";

export default function ContactForm() {
  const [action, setAction] = useState("");

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ContactFormSchema>({
    defaultValues: {
      name: "",
      email: "",
      country: "",
      message: undefined,
    },
  });
  const onSubmitHandle = async (data: ContactFormSchema) => {
    setAction("PENDING");
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
    })
      .then(() => {
        setAction("SUCCESS");
        return new Promise((resolve) => setTimeout(resolve, 2000));
      })
      .catch(() => {
        setAction("FAILED");
      })
      .finally(() => {
        setAction("");
        reset();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandle)}
      noValidate
      data-hs-cf-bound
      className="grid gap-4 mx-auto text-white w-full mt-10 lg:mt-20 lg:min-w-[672px] lg:max-w-2xl"
    >
      <Textbox
        label="name"
        register={register}
        required
        type="text"
        name="name"
        errors={errors}
        placeholder="Name"
        className="w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="email"
        register={register}
        required
        type="email"
        name="email"
        errors={errors}
        placeholder="Email"
        className="w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="country"
        register={register}
        required
        type="text"
        name="operation"
        errors={errors}
        placeholder="Country of Operation"
        className="w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="message"
        register={register}
        required={false}
        type="text"
        name="message"
        errors={errors}
        placeholder="Leave Us a Message"
        className="w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <div className="grid justify-items-stretch">
        <ButtonSend action={action} available={true} bg="bg-black" label="SEND" />
      </div>
    </form>
  );
}
