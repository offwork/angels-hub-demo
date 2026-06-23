export const BASE_URL = process.env.NODE_ENV !== "development"
  ? `https://www.agelshub.com`
  : `http://localhost:${process.env.PORT ?? 3000}`

/**
 * Returns the absolute URL for the given pathname.
 */
export function absolute(pathname: string = ''): string {
  return new URL(pathname, BASE_URL).href
}
