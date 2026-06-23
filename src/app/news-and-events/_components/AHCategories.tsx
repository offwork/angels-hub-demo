"use client";
import AHLink from "@/components/ui/AHLink";
import { CATEGORIES } from "@/constant";
import { classNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Categories() {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname.split("/").some((item) => item === slug);
  };

  return (
    <>
      <div className="relative flex items-center justify-center space-x-2 rounded-full bg-angel-blue-950 opacity-75 px-6 py-3 sm:space-x-6 md:px-9 md:py-4">
        <Link href="/news-and-events/page/1" legacyBehavior passHref>
          <AHLink
            href="/news-and-events/page/1"
            className={classNames(
              pathname.length < 24 ? "text-angel-orange" : "text-white",
              "relative z-10 font-medium whitespace-nowrap text-sm md:text-base"
            )}
          >
            <span>View All</span>
          </AHLink>
        </Link>
        {CATEGORIES.map((category, idx) => (
          <Link href={`/news-and-events/${category.slug}/page/1`} key={category.id} legacyBehavior passHref>
            <AHLink
              href={`/news-and-events/${category.slug}/page/1`}
              className={classNames(
                isActive(category.slug) ? "text-angel-orange" : "text-white",
                "relative z-10 font-medium whitespace-nowrap text-xs sm:text-base"
              )}
            >
              <span>{category.name}</span>
            </AHLink>
          </Link>
        ))}
      </div>
    </>
  );
}
