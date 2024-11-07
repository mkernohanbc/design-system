import "./Navbar.css";

export interface NavbarProps extends React.PropsWithChildren {
  children?: React.ReactNode;
}

export default function Navbar({ children, ...props }: NavbarProps) {
  return (
    <div className="bcds-Navbar" {...props}>
      <div className="bcds-Navbar--Container" role="navigation">
        {children}
      </div>
    </div>
  );
}
