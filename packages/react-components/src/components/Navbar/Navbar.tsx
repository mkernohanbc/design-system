import "./Navbar.css";
import React from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Menu from "../Menu";
import SvgMenuIcon from "../Icons/SvgMenuIcon";
import Button from "../Button";
import MenuItem from "../MenuItem";

export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  /* Add separators between children */
  const childrenArray = React.Children.toArray(children);
  const Separator = () => (
    <span className="bcds-Navbar--Separator" role="separator" />
  );
  /* Collapse navbar at smaller screen sizes */
  const { isSmall } = useWindowDimensions();
  return (
    <div className="bcds-Navbar" {...props}>
      <nav className="bcds-Navbar--Container">
        {isSmall ? (
          <>
            {childrenArray.map((child, index) => (
              <React.Fragment key={index}>
                {child}
                {index < childrenArray.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <Menu
              triggerElement={
                <Button size="small" variant="secondary">
                  <SvgMenuIcon />
                  Menu
                </Button>
              }
            >
              {childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                  <MenuItem>{child}</MenuItem>
                </React.Fragment>
              ))}
            </Menu>
          </>
        )}
      </nav>
    </div>
  );
}
