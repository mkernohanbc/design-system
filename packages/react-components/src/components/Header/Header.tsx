import { cloneElement, PropsWithChildren } from "react";

import SvgBcLogo from "../Icons/SvgBcLogo";
import SvgBcLogoInvert from "../Icons/SvgBcLogoInvert";

import "./Header.css";

export interface HeaderProps {
  /**
   * Link element that surrounds the logo. Use what's appropriate for your
   * router, like a `<Link>`. Defaults to a generic HTML link element like
   * `<a href="/" title="Government of British Columbia">`
   */
  logoLinkElement?: React.ReactElement;
  /**
   * Image used for the logo. Defaults to an SVG of the Government of B.C. logo.
   */
  logoImage?: JSX.Element;
  /**
   * Alternative logo image for use in dark mode. Defaults to reversed version of the Government of B.C. logo.
   */
  logoImageDarkMode?: JSX.Element;
  /**
   * Array of link elements that are not visible until they are focused. Used
   * for accessibility for keyboard users, to let them easily skip to main
   * content, navigation, etc.
   */
  skipLinks?: React.ReactElement[];
  /**
   * Header title text that appears to the right of the logo.
   */
  title?: string;
  /**
   * Desired element that renders the `title` string. Defaults to `<span>`.
   */
  titleElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  /**
   * Toggle between default and dark colour schemes
   */
  darkMode: boolean;
}

export default function Header({
  children,
  logoLinkElement,
  logoImage = <SvgBcLogo id="bcgov-logo-header" />,
  logoImageDarkMode = <SvgBcLogoInvert id="bcgov-logo-header" />,
  skipLinks,
  title = "",
  titleElement = "span",
  darkMode = false,
}: PropsWithChildren<HeaderProps>) {
  /* Use alternative logo image when in dark mode */
  function getLogoVersion() {
    switch (darkMode) {
      case true:
        return logoImageDarkMode;
      case false:
        return logoImage;
    }
  }
  /* Set link element type */
  function getLogo() {
    if (!logoLinkElement)
      return (
        <a href="/" title="Government of British Columbia">
          {getLogoVersion()}
        </a>
      );

    return cloneElement(logoLinkElement, { children: getLogoVersion() });
  }

  function getTitle() {
    switch (titleElement) {
      case "h1":
        return <h1 className="bcds-header--title">{title}</h1>;
      case "h2":
        return <h2 className="bcds-header--title">{title}</h2>;
      case "h3":
        return <h3 className="bcds-header--title">{title}</h3>;
      case "h4":
        return <h4 className="bcds-header--title">{title}</h4>;
      case "h5":
        return <h5 className="bcds-header--title">{title}</h5>;
      case "h6":
        return <h6 className="bcds-header--title">{title}</h6>;
      case "p":
        return <p className="bcds-header--title">{title}</p>;
      default:
        return <span className="bcds-header--title">{title}</span>;
    }
  }

  return (
    <header className={`bcds-header ${darkMode && "dark"}`}>
      <div className="bcds-header--container">
        {getLogo()}
        {skipLinks && (
          <ul className="bcds-header--skiplinks">
            {skipLinks.map((link, index) => {
              return <li key={`skiplink-${index}`}>{link}</li>;
            })}
          </ul>
        )}
        {title && (
          <>
            <div className="bcds-header--line" />
            {getTitle()}
          </>
        )}
        {children}
      </div>
    </header>
  );
}
