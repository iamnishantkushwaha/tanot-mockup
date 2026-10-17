import Link from "next/link";
import * as React from "react";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

/** Internal paths use next/link; absolute URLs and mailto open as plain external anchors. */
export function SmartLink({ href, children, ...rest }: Props) {
  const { target: _t, rel: _r, ...props } = rest;
  void _t;
  void _r;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>
      {children}
    </a>
  );
}
