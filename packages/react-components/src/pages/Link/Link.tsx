import { Link, SvgInfoIcon } from "@/components";

export default function LinkPage() {
  return (
    <>
      <h2>Links</h2>
      <p>
        The Link component can be used to create accessible and extensible
        links. It is built using{" "}
        <Link href="https://react-spectrum.adobe.com/react-aria/Link.html">
          React Aria Link
        </Link>{" "}
        as a base. It supports standard HTML hyperlinking, as well as JavaScript
        link handling.
      </p>
      <p>
        The Link component can be used to populate navigation bars, as in the
        examples above, or to create inline hyperlinks within content. A link
        can have{" "}
        <Link href="#">
          <SvgInfoIcon />
          an icon next to it
        </Link>
        .
      </p>
      <p>
        If needed, you can also disable a link. A disabled link cannot be
        focused or clicked.{" "}
        <Link isDisabled href="#">
          This is an example of a disabled link.
        </Link>{" "}
      </p>
      <h3 id="headings">
        Links and <Link href="#headings">headings</Link>
      </h3>
      <p>
        The Link component is styled to align with the B.C. Design System's
        typescale. It matches the standard styles for H1 to H6 headings. It will
        also respect generic text styling like{" "}
        <b>
          <Link href="#headings">bold</Link>
        </b>{" "}
        and{" "}
        <i>
          <Link href="#headings">italics</Link>
        </i>
        .
      </p>
    </>
  );
}
