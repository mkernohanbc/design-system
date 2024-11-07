import "./Navbar.css";

export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  return (
    <div className="bcds-Navbar" {...props}>
      <div className="bcds-Navbar--Container">{children}</div>
    </div>
  );
}
