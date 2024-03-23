import cx from "classnames";
import NextLink from "next/link";
import React, {
  AnchorHTMLAttributes,
  cloneElement,
  ReactElement,
  ReactNode,
  useRef,
} from "react";
import { ArrowUpRight } from "react-feather";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
  gradientUnderline?: boolean;
  noGradientUnderline?: boolean;
  noExternalLinkIcon?: boolean;
  noHighlight?: boolean;
  icon?: ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
  gradientUnderline,
  noGradientUnderline,
  noExternalLinkIcon,
  noHighlight = false,
  icon,
  ...otherProps
}: ExternalLinkProps): JSX.Element => {
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  const isGradientUnderline = gradientUnderline
    ? true
    : (typeof children === "string" || typeof children === "undefined") &&
      !noGradientUnderline
    ? true
    : false;

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <>
      {isInternalLink ? (
        <NextLink href={href} prefetch={false} passHref>
          <span
            className={cx(
              "transition duration-200",
              isGradientUnderline && "gradient-underline flex items-center",
              className
            )}
            {...otherProps}
          >
            {isGradientUnderline ? <span>{children ?? href}</span> : children}
          </span>
        </NextLink>
      ) : (
        <span
          ref={ref}
          className={cx(
            "mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200",
            isGradientUnderline && "gradient-underline no-underline",
            isGradientUnderline &&
              !noHighlight &&
              "text-blue-400 hover:text-blue-300",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...otherProps}
        >
          {icon &&
            cloneElement(icon as ReactElement, { className: "h-4 w-4 mr-1" })}
          {noExternalLinkIcon ? children : <span>{children}</span>}{" "}
          {!noExternalLinkIcon && <ArrowUpRight className="h-4 w-4" />}
        </span>
      )}
      <style jsx>{`
        .gradient-underline :not(.anchor) {
          text-decoration: none;
          background-image: linear-gradient(to right, #be185d, #1d4ed8);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0% 2px;
          transition: background-size 150ms ease-in-out;
        }

        .gradient-underline:hover :not(.anchor) {
          background-size: 100% 2px;
          color: inherit;
        }
      `}</style>
    </>
  );
};

ExternalLink.displayName = "Link";

export default ExternalLink;
