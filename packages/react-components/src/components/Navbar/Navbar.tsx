import "./Navbar.css";
import React from "react";

export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  const childrenArray = React.Children.toArray(children);
  const Separator = () => (
    <span className="bcds-Navbar--Separator" role="separator" />
  );
  return (
    <div className="bcds-Navbar" {...props}>
      <div className="bcds-Navbar--Container" role="navigation">
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {index < childrenArray.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
