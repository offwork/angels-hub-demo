"use client";
import { InputProps } from "@/models";

export default function Radio({
  label,
  id,
  register,
  required,
  error,
  errors,
  onChange,
  type,
  name,
  placeholder,
  className,
  value,
}: InputProps<{ [key: string]: unknown }>) {
  return (
    <div className="flex items-center gap-x-3 text-white">
      <input
        id={id}
        type={type}
        {...register(label, {
          required: true,
        })}
        value={value}
        className="sr-only peer"
      />
      <label
        htmlFor={id}
        className={`flex w-full items-center h-[74px] px-8 ${className} bg-opacity-50 border border-white/30 rounded-full cursor-pointer hover:bg-opacity-60 peer-checked:bg-opacity-100 peer-checked:${className} peer-checked:border-angel-blue-500 ring-opacity-30 ring-angel-blue-400 peer-checked:ring-4 group`}
      >
        <div className="flex items-center justify-center w-6 h-6 border border-white/30 rounded-full peer-checked:group:bg-angel-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden w-4 h-4 text-white fill-current peer-checked:group:visible"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="ml-3">{placeholder}</span>
      </label>
    </div>
  );
}
