"use client";
import Select from "@/components/ui/AHSelect";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ButtonSend from "../../../components/ui/AHButtonSend";
import Textbox from "../../../components/ui/AHTextbox";

export default function ContactForm({ message }: { message: string }) {
  const [action, setAction] = useState("");
  const [selectReset, setSelectReset] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<{ [key: string]: unknown }>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      telegram: undefined,
      message: undefined,
    },
  });
  const onSubmitHandle = async (data: Record<string, any>) => {
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
        setSelectReset(true);
        reset();
        toast(
          (t) => (
            <div className="relative grid text-center gap-3 p-4">
              <h3 className="text-xl font-medium text-angel-blue">AngelsHub</h3>
              <p className="">{message}</p>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="absolute bg-transparent top-0 right-0 w-6 h-6 focus:outline-none"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 8.50002L8.5 13.5M8.49998 8.5L13.5 13.5"
                    stroke="#FF5F00"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ),
          { duration: 5000 }
        );
        return new Promise((resolve) => setTimeout(resolve, 3000));
      })
      .catch(() => {
        setAction("FAILED");
      })
      .finally(() => {
        setAction("");
        setSelectReset(false);
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
        className="relative z-0 w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="email"
        register={register}
        required
        type="email"
        name="email"
        errors={errors}
        placeholder="Email"
        className="relative z-0 w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="phone"
        register={register}
        required
        type="tel"
        name="phone"
        errors={errors}
        placeholder="Phone number"
        className="w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Select
        label="country"
        register={register}
        required
        type="text"
        name="country"
        reset={selectReset}
        errors={errors}
        bg="bg-black"
        placeholder="Country"
        className="relative z-0 w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="telegram"
        register={register}
        required={false}
        type="text"
        name="telegram"
        errors={errors}
        placeholder="Telegram User/ID"
        className="relative z-0 w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <Textbox
        label="message"
        register={register}
        required={false}
        type="text"
        name="message"
        errors={errors}
        placeholder="Leave Us a Message"
        className="relative z-0 w-full appearance-none bg-black indent-14 py-6 rounded-full border border-white/30"
      />
      <div className="relative z-0 grid justify-items-stretch">
        <ButtonSend action={action} available={action === ""} bg="bg-black" label="SEND" />
      </div>
    </form>
  );
}
