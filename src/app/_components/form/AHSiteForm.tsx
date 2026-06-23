"use client";
import ButtonSend from "@/components/ui/AHButtonSend";
import Select from "@/components/ui/AHSelect";
import Textbox from "@/components/ui/AHTextbox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SiteForm({ message }: { message: string }) {
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
                role="button"
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
    <div className="container text-center w-full text-white">
      <div className="grid grid-flow-row justify-items-stretch gap-4 lg:place-items-center lg:gap-8 lg:grid-flow-col">
        <h2 className="title font-bold text-2xl lg:justify-self-end xl:text-4xl">
          ARE YOU READY TO START?
        </h2>
        <h3 className="caption text-sm lg:justify-self-start xl:text-2xl">
          Share your ideas with us!
        </h3>
      </div>
      <p className="mt-6 text-center text-white">
        Our team is ready 24/7 to answer all your questions and provide the best technical support
        services.
      </p>
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
          className="w-full appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="email"
          register={register}
          required
          type="email"
          name="email"
          errors={errors}
          placeholder="Email"
          className="w-full appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="phone"
          register={register}
          required
          type="tel"
          name="phone"
          errors={errors}
          placeholder="Phone number"
          className="w-full appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <Select
          label="country"
          register={register}
          required
          type="text"
          name="country"
          reset={selectReset}
          errors={errors}
          bg="bg-angel-blue"
          placeholder="Country"
          className="relative z-0 w-full appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="telegram"
          register={register}
          required={false}
          type="text"
          name="telegram"
          errors={errors}
          placeholder="Telegram User/ID"
          className="relative z-0 w-full appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="message"
          register={register}
          required={false}
          type="text"
          name="message"
          errors={errors}
          placeholder="Leave Us a Message"
          className="w-full form-element appearance-none bg-angel-blue indent-14 py-6 rounded-full border border-white/30"
        />
        <div className="grid form-element justify-items-stretch">
          <ButtonSend action={action} available={action === ""} bg="bg-angel-blue" label="SEND" />
        </div>
      </form>
    </div>
  );
}
