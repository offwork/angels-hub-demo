import { ReactNode, forwardRef } from "react";

interface Props {
  children?: ReactNode;
  href: string;
}

const AHLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
  <a ref={ref} className="" href={props.href}>
    {props.children}
  </a>
));

AHLink.displayName = "AngelsHubLink";

export default AHLink;
