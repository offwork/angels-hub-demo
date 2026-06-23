import { useEffect, useLayoutEffect } from "react";

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
/////////////////          HELPER METHODS          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function SplitFirstWord(str: string) {
  return str.replace(/\s+/g, "");
}

function SeparationStaticImageName(str: string) {
  const extension = str.lastIndexOf(".");
  const slash = str.lastIndexOf("/") + 1;
  const imageName = str.substring(slash, extension).split("-");
  return imageName[imageName.length - 1];
}

const isEmptyObject = (obj: object) => Boolean(Object.keys(obj).length);

const capitalize = (str: string) => {
  const words =
    str.length > 1
      ? str.split("-").map((el) => el[0].toUpperCase() + el.substring(1))
      : [""];
  return words.join(" ");
};

function transformObjectToParams(object: { [key: string]: string | number | undefined | null }) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return params.length > 0 ? `?${params.join("&")}` : "";
}

function transformTagsToUpparcase(tags: string[]) {
  const tagsMap = [
    { display: "Articles", value: "articles" },
    { display: "Events", value: "events" },
    { display: "Press Releases", value: "pressReleases" },
    { display: "News", value: "news" },
  ];

  const result: string[] = [];

  return tags.reduce((cur: string[], acc: string) => {
    tagsMap.forEach((elm) => {

      if (elm.value === acc) {
        result.push(elm.display)
      }
      return result
    });

    cur = result
    return cur;
  }, []);
}

//////////////////////////////////////////////////////////////////////
///////////////////////                        ///////////////////////
///////////////////          EXPORT UTILS          ///////////////////
///////////////////////                        ///////////////////////
//////////////////////////////////////////////////////////////////////
export {
  capitalize,
  classNames,
  isEmptyObject,
  SplitFirstWord,
  transformObjectToParams,
  transformTagsToUpparcase,
  useIsomorphicLayoutEffect,
  SeparationStaticImageName
};
