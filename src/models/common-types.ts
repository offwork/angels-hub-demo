import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
///////////////////          COMMON TYPES          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
type InputProps<T extends FieldValues> = {
  label: Path<T>;
  id?: string;
  bg?: string;
  register: UseFormRegister<T &{ [key: string]: unknown }>;
  required: boolean;
  error?: boolean;
  errors?: FieldErrors<T>;
  reset?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  className?: string;
  value?: string
};

type Jobs = {
  index: number;
  caption: string;
  about: string
  href: string;
  title: string;
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

export type { InputProps, Jobs, ObjectFit, ObjectPosition };
