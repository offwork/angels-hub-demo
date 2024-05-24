import { classNames } from "@/utils";
import { ReactNode, forwardRef } from "react";

interface Props {
  children?: ReactNode;
  href: string;
  className?: string;
}
//"hover:text-white/65"
const AHLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <a ref={ref} className={props.className} href={props.href}>
    {props.children}
  </a>
));

AHLink.displayName = "AngelsHubLink";

export default AHLink;
