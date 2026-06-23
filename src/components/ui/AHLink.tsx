"use client";
import { HTMLAttributeAnchorTarget, ReactNode, forwardRef, useCallback, MouseEvent } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useTransitionRouter } from "@/hooks/use-transition-router";
import { capitalize } from "@/utils";

type AHLinkProps = NextLinkProps & {
  children?: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

const AHLink = forwardRef<HTMLAnchorElement, AHLinkProps>(
  (
    { as, href, prefetch, replace, scroll, shallow, locale, className, children, target, onClick },
    ref
  ) => {
    const router = useTransitionRouter();

    const onLinkClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>) => {
        if (onClick) onClick(e);

        const navigate = replace ? router.replace : router.push;
        navigate((as || href) as string, { scroll: scroll ?? true });
      },
      [onClick, replace, router.replace, router.push, as, href, scroll]
    );

    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        target={target}
        passHref
        legacyBehavior
      >
        <a
          ref={ref}
          className={`custom-link ${className}`}
          target={target}
          role="link"
          aria-label={capitalize(href.toString() !== "/" ? href.toString() : "Angels-home")}
          onClick={onLinkClick}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </NextLink>
    );
  }
);

AHLink.displayName = "AngelsHubLink";
export default AHLink;
