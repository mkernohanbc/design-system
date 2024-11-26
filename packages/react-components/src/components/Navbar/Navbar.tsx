import "./Navbar.css";
import React from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Button from "../Button";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import { MenuTrigger } from "../Menu";
import Separator from "../Separator";
import SvgMenuIcon from "../Icons/SvgMenuIcon";

export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  const childrenArray = React.Children.toArray(children);
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
                {index < childrenArray.length - 1 && (
                  <Separator orientation="vertical" />
                )}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <MenuTrigger>
              <Button size="small" variant="secondary">
                <SvgMenuIcon />
                Menu
              </Button>
              <Menu>
                {childrenArray.map((child, index) => (
                  <React.Fragment key={index}>
                    <MenuItem>{child}</MenuItem>
                  </React.Fragment>
                ))}
              </Menu>
            </MenuTrigger>
          </>
        )}
      </nav>
    </div>
  );
}
