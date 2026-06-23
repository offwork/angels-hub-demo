"use client";

import { InputProps } from "@/models";
import { classNames } from "@/utils";

export default function Textbox({
  label,
  register,
  required,
  error,
  errors,
  onChange,
  type,
  name,
  placeholder,
  className,
}: InputProps<{ [key: string]: unknown }>) {
  const getTypeValidation = (type: string) => {
    return {
      email: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email address is incorrect",
      },
      text: {
        value: /^[a-zA-Z0-9- ]{3,}\b$/,
        message: "This field cannot be less than 3 characters",
      },
      tel: {
        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        message: "Incorrect phonne number format"
      }
    }[type];
  };

  return (
    <input
      id={name}
      type={type}
      {...register(label, {
        required: {
          value: required,
          message: getTypeValidation(type)?.message!,
        },
        pattern: getTypeValidation(type),
      })}
      placeholder={placeholder}
      autoComplete="off"
      className={classNames(
        errors && errors[label]
          ? "focus:outline-none focus:border-red-500"
          : "focus:outline-none focus:border-white",
        className!
      )}
    />
  );
}
