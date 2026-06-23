"use client";

import AHLink from "@/components/ui/AHLink";
import { classNames } from "@/utils";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";

export default function CookieConsent({ cookie }: { cookie?: string }) {
  const [acceptance, setAcceptance] = useState<string | undefined>();
  const [cookieConsent, setCookieConsent] = useState(true);

  const onPopupClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();

    const acceptance = evt.currentTarget.innerHTML === "ACCEPT" ? "granted" : "denied";
    setAcceptance(acceptance);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_user_data: acceptance,
        ad_personalization: acceptance,
        ad_storage: acceptance,
        analytics_storage: acceptance,
      });
    }
  };

  useEffect(() => {
    setCookieConsent(typeof acceptance === "string");
    if (typeof window !== "undefined" && typeof acceptance === "string") {
      let cookie = `__angels_cookie_consent_accept=${acceptance};`;
      cookie += "path=/;";
      cookie += `max-age=${60 * 60 * 24 * 365};`;
      cookie += `SameSite=None;`;
      cookie += `Secure`;
      document.cookie = cookie;
    }
  }, [acceptance, cookie, cookieConsent]);

  if (typeof cookie === "string" || cookie === "undefined") {
    return;
  }

  return (
    <div
      className={classNames(
        acceptance ? "hidden" : "block",
        "right-0 bottom-10 max-w-md fixed z-50 bg-angel-orange py-6 shadow-3xl rounded-xl sm:right-10"
      )}
    >
      <button onClick={onPopupClick} className="cursor-pointer absolute top-4 right-4">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Item &#226;&#143;&#181; Link &#226;&#143;&#181; Products"
            d="M6.81652 5.19229L11.3243 0.684484L12.9374 2.29757L8.42961 6.80538L13.0921 11.4679L11.468 13.092L6.80548 8.42951L2.29767 12.9373L0.684582 11.3242L5.19239 6.81643L0.507806 2.13184L2.13194 0.507707L6.81652 5.19229Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="flex items-center my-8">
        <span className="min-w-2.5 h-14 bg-white mr-6"></span>
        <p className="text-white pr-8">
          We use cookies to ensure that we give you the best experience on our website. If you
          continue to use this site we will assume that you are happy with it.
        </p>
      </div>
      <div className="flex space-x-8 items-center pl-10">
        <button
          onClick={onPopupClick}
          className="text-white font-light cursor-pointer hover:underline"
        >
          ACCEPT
        </button>
        <Link href="/cookie-policy" legacyBehavior passHref>
          <AHLink className="text-white font-light hover:underline" href="/cookie-policy">
            Cookie Policy
          </AHLink>
        </Link>
      </div>
    </div>
  );
}
