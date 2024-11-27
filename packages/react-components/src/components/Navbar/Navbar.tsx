import "./Navbar.css";
import React from "react";
import Separator from "../Separator";
export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  const childrenArray = React.Children.toArray(children);
  return (
    <div className="bcds-Navbar" {...props}>
      <nav className="bcds-Navbar--Container">
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && (
              <Separator orientation="vertical" />
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
