import "./Divider.css";

export interface DividerProps {
  orientation?: "horizontal" | "vertical" | undefined;
}

export default function Divider({ orientation = "horizontal" }: DividerProps) {
  return <hr className={`bcds-Divider ${orientation}`} />;
}
