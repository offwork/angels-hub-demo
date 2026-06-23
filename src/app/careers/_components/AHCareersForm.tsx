"use client";
import Filebox from "@/components/ui/AHFilebox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ButtonSend from "../../../components/ui/AHButtonSend";
import Textbox from "../../../components/ui/AHTextbox";
import { Jobs } from "@/models";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function CareersForm({ message, job }: { message: string; job: Jobs }) {
  const [action, setAction] = useState("");
  const formData = new FormData();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<{ [key: string]: unknown }>({
    defaultValues: {
      fullname: "",
      email: "",
      mobile: "",
      message: undefined,
      resume: null,
    },
  });
  const onSubmitHandle = async (data: Record<string, any>) => {
    setAction("PENDING");
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "resume") {
        formData.append(key, value);
      }
    });

    await fetch("https://getform.io/f/ayvpwnqb", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then(() => {
        setAction("SUCCESS");
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
                    id="Vector_2"
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
        reset();
      });
  };

  return (
    <>
      <ReactMarkdown
        className="text-sm text-white leading-relaxed break-words px-3 sm:px-5 md:px-8 lg:px-0"
        components={{
          h2: (props) => {
            return (
              <h2 className="text-xl sm:text-3xl mt-12 mb-4 leading-snug" {...props}>
                {props.children}
              </h2>
            );
          },
          h3: (props) => {
            return (
              <h3 className="text-xl sm:text-2xl mt-8 mb-4 leading-snug" {...props}>
                {props.children}
              </h3>
            );
          },
          h4: (props) => {
            return (
              <h4 className="text-lg sm:text-xl mt-8 mb-4 leading-snug" {...props}>
                {props.children}
              </h4>
            );
          },
          p: (props) => {
            if (
              !Array.isArray(props.children) &&
              props.children &&
              typeof props.children !== "string"
            ) {
              return (
                <p className="relative inline-block w-full h-auto my-6" {...props}>
                  {props.children}
                </p>
              );
            }
            return (
              <p className="my-6" {...props}>
                {props.children}
              </p>
            );
          },
          ol: (props) => {
            return (
              <ol className="my-6" {...props}>
                {props.children}
              </ol>
            );
          },
          ul: (props) => {
            return (
              <div className="pl-6">
                <ul className="my-6 list-disc list-outside" {...props}>
                  {props.children}
                </ul>
              </div>
            );
          },
          blockquote: (props) => {
            return (
              <blockquote className="my-6" {...props}>
                {props.children}
              </blockquote>
            );
          },
          a: (props) => {
            if (props.href?.length) {
              const href = props.href;
              const children = Array.isArray(props.children) ? props.children[0] : props.children;
              const hrefWithoutTrailingSlash = href.endsWith("/")
                ? href.slice(0, href.length - 1)
                : href;
              return (
                <Link
                  className="font-semibold hover:underline"
                  href={hrefWithoutTrailingSlash}
                  target="_blank"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-angel-orange-500 to-angel-orange-300">
                    {children}
                  </span>
                </Link>
              );
            }
            return null;
          },
        }}
      >
        {job.about}
      </ReactMarkdown>
      <form
        onSubmit={handleSubmit(onSubmitHandle)}
        noValidate
        data-hs-cf-bound
        encType="multipart/form-data"
        className="grid gap-4 mx-auto mt-20 text-white w-full px-3 sm:px-5 md:px-8 lg:px-0"
      >
        <Textbox
          label="fullname"
          register={register}
          required
          type="text"
          name="fullname"
          errors={errors}
          placeholder="Name Surname"
          className="w-full appearance-none bg-[#252525] indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="email"
          register={register}
          required
          type="email"
          name="email"
          errors={errors}
          placeholder="Email"
          className="w-full appearance-none bg-[#252525] indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="mobile"
          register={register}
          required
          type="tel"
          name="mobile"
          errors={errors}
          placeholder="Mobile"
          className="w-full appearance-none bg-[#252525] indent-14 py-6 rounded-full border border-white/30"
        />
        <Filebox
          label="resume"
          register={register}
          required={false}
          type="file"
          name="resume"
          errors={errors}
          placeholder="Upload Pdf"
          onChange={(evt) => {
            const target = evt.target as HTMLInputElement & {
              files: FileList;
            };
            formData.append("resume", target.files[0]);
          }}
          className="w-full appearance-none bg-[#252525] indent-14 py-6 rounded-full border border-white/30"
        />
        <Textbox
          label="message"
          register={register}
          required={false}
          type="text"
          name="message"
          errors={errors}
          placeholder="Message/Professional details"
          className="w-full appearance-none bg-[#252525] indent-14 py-6 rounded-full border border-white/30"
        />
        <div className="grid justify-items-stretch">
          <ButtonSend
            action={action}
            available={action === ""}
            bg="bg-[#252525]"
            label="APLLY NOW"
          />
        </div>
      </form>
    </>
  );
}
