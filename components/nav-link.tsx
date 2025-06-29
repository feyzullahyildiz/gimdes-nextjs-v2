"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exactMatch?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    { children, className, activeClassName, exactMatch = true, href, ...props },
    ref,
  ) => {
    const pathname = usePathname();

    const isActive = exactMatch
      ? pathname === href
      : pathname.startsWith(href.toString());

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          // Base styles
          "relative inline-flex items-center px-2 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out md:px-3 md:py-2",
          "hover:bg-accent/50 hover:text-accent-foreground rounded-md",
          "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",

          // Active state
          isActive
            ? [
                "text-primary bg-accent/30 font-semibold",
                "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                "after:bg-primary after:h-0.5 after:w-full after:rounded-full",
                "after:transition-all after:duration-300",
                activeClassName,
              ]
            : [
                "text-muted-foreground hover:text-foreground",
                "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                "after:bg-primary after:h-0.5 after:w-0 after:rounded-full",
                "after:transition-all after:duration-300 hover:after:w-full",
              ],

          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
export type { NavLinkProps };
