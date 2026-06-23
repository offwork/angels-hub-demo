"use client";
import useOnClickOutside from "@/hooks/use-click-outside";
import { InputProps } from "@/models";
import { classNames, useIsomorphicLayoutEffect } from "@/utils";
import { MouseEvent, useRef, useState } from "react";
import VirtualScroll from "./AHVirtualScroll";
import { COUNTRIES } from "@/constant";

export default function Select({
  label,
  bg,
  register,
  required,
  error,
  errors,
  onChange,
  reset,
  type,
  name,
  placeholder,
  className,
}: InputProps<{ [key: string]: unknown }>) {
  const [toggleOptions, setToggleOptions] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>(null!);
  const [displayTextValue, setDisplayTextValue] = useState("");
  const [isLoading, setLoading] = useState(true);
  const runOnce = useRef<boolean>(false);
  const selectWrapRef = useRef<HTMLDivElement>(null!);

  useOnClickOutside(selectWrapRef, (value) => {
    setToggleOptions(value);
  });

  const onSelected = (evt: MouseEvent<HTMLDivElement>) => {
    if (!evt.defaultPrevented) {
      evt.preventDefault();
      setToggleOptions(false);
      setDisplayTextValue(evt.currentTarget.innerText);
      evt.stopPropagation();
    }
  };

  /* const loadCountriesData = async () => {
    fetch("https://www.apicountries.com/countries", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const nodes = Array.isArray(data)
          ? data.map<JSX.Element>((country) => (
              <div
                onClick={onSelected}
                className="flex items-center h-16 cursor-pointer select-none"
                key={country.name.common}
              >
                <p className="relative text-left py-1.5 w-full h-full leading-[3rem]">
                  {country.name.common}
                </p>
              </div>
            ))
          : [];
        setItems(nodes);
      });
  }; */

  useIsomorphicLayoutEffect(() => {
    if (!runOnce.current) {
      //loadCountriesData();
      setLoading(false);
      const nodes = COUNTRIES.map<JSX.Element>((country) => (
        <div
          onClick={onSelected}
          className="flex items-center h-16 cursor-pointer select-none"
          key={country.name}
        >
          <p className="relative text-left py-1.5 w-full h-full leading-[3rem]">{country.name}</p>
        </div>
      ));
      setItems(nodes);
    }

    if (reset) {
      setDisplayTextValue("");
    }

    return () => {
      runOnce.current = true;
      reset = false;
    };
  }, [, /* loadCountriesData */ reset]);

  return (
    <div ref={selectWrapRef} className="relative w-full h-[74px] z-30">
      <label aria-label="country" htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(label, {
          validate: () => {
            return displayTextValue.length > 1;
          },
        })}
        placeholder={placeholder}
        value={displayTextValue}
        onFocus={() => setToggleOptions(true)}
        autoComplete="off"
        onChange={(evt) => setDisplayTextValue(evt.target.value)}
        className={classNames(
          errors && errors[label]
            ? "border border-red-500 focus:outline-none focus:border-red-500"
            : "border border-white/30 focus:outline-none focus:border-white",
          className!,
        )}
      />
      <div
        className={classNames(
          toggleOptions ? "grid" : "hidden",
          `w-full absolute left-0 top-20 z-40 ${bg} indent-14 rounded-md border border-white/30`,
        )}
      >
        {!isLoading ? (
          <VirtualScroll
            rowHeight={64}
            totalItems={items.length}
            items={items}
            visibleItemsLength={20}
            containerHeight={320}
          />
        ) : (
          <p className="sr-only">Loading...</p>
        )}
      </div>
      <button
        type="button"
        role="button"
        aria-label="Country Select"
        aria-labelledby="country"
        className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer border-l border-white/40 pl-4"
      >
        <svg
          className={classNames(toggleOptions ? "rotate-180" : "rotate-0", "rotate-0", "w-7 h-7")}
          width="57"
          height="30"
          viewBox="0 0 57 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M55.5 1.50098L28.5 28.501L1.5 1.50098" stroke="#939393" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}
