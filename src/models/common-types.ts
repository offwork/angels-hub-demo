import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
///////////////////          COMMON TYPES          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
interface ContactFormSchema {
  name: string;
  email: string;
  country: string;
  message?: string;
}

type ContactInputProps = {
  label: Path<ContactFormSchema>;
  register: UseFormRegister<ContactFormSchema>;
  required: boolean;
  error?: boolean;
  errors?: FieldErrors<ContactFormSchema>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  className?: string;
};

type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down" | undefined;

type ObjectPosition =
  | "bottom"
  | "center"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top"
  | undefined;

export type { ContactFormSchema, ContactInputProps, ObjectFit, ObjectPosition };
