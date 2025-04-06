import React from "react";
import NextLink from "next/link";

const Link = ({ href, children, className, onClick, ...props }) => {
  // Check if the href is external (starts with http or https)
  const isExternal =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  // If it's an external link, use a regular anchor tag
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <NextLink
      href={href || "/"}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
