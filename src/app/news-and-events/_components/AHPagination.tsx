"use client";
import AHLink from "@/components/ui/AHLink";
import { classNames } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PaginationProps = {
  totalPages: number;
  category: string;
};

export default function Pagination({ totalPages, category }: PaginationProps) {
  const pathname = usePathname();
  const currentPage = Number(pathname.split("/").pop()) || 1;

  const getPageRange = (): number[] => {
    const maxVisible = 4;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageRange = getPageRange();

  const createPageURL = (pageNumber: number) => {
    return category === "view-all"
      ? `/news-and-events/page/${pageNumber}`
      : `/news-and-events/${category}/page/${pageNumber}`;
  };

  return (
    <div className="flex items-center space-x-3 justify-center md:space-x-4">
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)} legacyBehavior passHref>
          <AHLink
            href={createPageURL(currentPage - 1)}
            className="flex items-center justify-center min-w-7 min-h-7 border font-semibold bg-angel-blue text-white border-white rounded-full md:min-w-10 md:min-h-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512">
              <path
                fill="#FFFFFF"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </AHLink>
        </Link>
      )}

      {pageRange[0] > 1 && (
        <>
          <Link
            className="flex items-center justify-center min-w-7 min-h-7 text-sm border font-semibold bg-angel-blue text-white border-white rounded-full md:text-base md:min-w-10 md:min-h-10"
            href={createPageURL(1)}
            legacyBehavior
            passHref
          >
            <AHLink
              href={createPageURL(1)}
              className="flex items-center justify-center min-w-7 min-h-7 text-sm border font-semibold bg-angel-blue text-white border-white rounded-full md:text-base md:min-w-10 md:min-h-10"
            >
              1
            </AHLink>
          </Link>
          {pageRange[0] > 2 && (
            <span className="font-medium select-none text-white text-sm md:text-base">...</span>
          )}
        </>
      )}

      {pageRange.map((page) => (
        <Link key={page} href={createPageURL(page)} legacyBehavior passHref>
          <AHLink
            href={createPageURL(page)}
            className={classNames(
              "flex items-center justify-center min-w-7 min-h-7 text-sm border font-semibold border-white rounded-full md:text-base md:min-w-10 md:min-h-10",
              currentPage === page ? "bg-white text-angel-blue" : "bg-angel-blue text-white"
            )}
          >
            {page}
          </AHLink>
        </Link>
      ))}

      {pageRange[pageRange.length - 1] < totalPages && (
        <>
          {pageRange[pageRange.length - 1] < totalPages - 1 && (
            <span className="font-medium select-none text-white text-sm md:text-base">...</span>
          )}
          <Link href={createPageURL(totalPages)} legacyBehavior passHref>
            <AHLink
              href={createPageURL(totalPages)}
              className="flex items-center justify-center min-w-7 min-h-7 text-sm border font-semibold bg-angel-blue text-white border-white rounded-full md:text-base md:min-w-10 md:min-h-10"
            >
              {totalPages}
            </AHLink>
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)} legacyBehavior passHref>
          <AHLink
            href={createPageURL(currentPage + 1)}
            className="flex items-center justify-center min-w-7 min-h-7 border font-semibold bg-angel-blue text-white border-white rounded-full md:min-w-10 md:min-h-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512">
              <path
                fill="#FFFFFF"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </AHLink>
        </Link>
      )}
    </div>
  );
}
