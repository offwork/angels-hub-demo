"use client";
import { InputProps } from "@/models";
import { classNames } from "@/utils";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export default function Filebox({
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
  const [file, setFile] = useState<File | undefined>(null!);
  const limit = 5000;

  const addFile = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(evt)
      const target = evt.target as HTMLInputElement & {
        files: FileList;
      }
      setFile(target.files[0])
    } else {
      setFile(undefined)
    }
  }, [onChange])
 
  useEffect(() => {
    if(typeof file === "undefined") {
      setFile(undefined)
    }
  }, [file])

  return (
    <input
      id={name}
      type={type}
      {...register(label, {
        required: {
          value: required,
          message: "",
        },
        validate: () => {
          return file && file?.size/1024 < limit ? true : false;
        }
      })}
      accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      placeholder={placeholder}
      autoComplete="off"
      onChange={addFile}
      className={classNames(
        errors && errors[label]
          ? "focus:outline-none focus:border-red-500"
          : "focus:outline-none focus:border-white",
        className!
      )}
    />
  );
}
