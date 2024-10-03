import "./Divider.css";

export interface DividerProps {
  /* Set divider to use dashed style instead of a solid line */
  isDashed: boolean;
}

export default function Divider({ isDashed = false, ...props }) {
  return <hr className={`bcds-Divider ${isDashed && "dashed"}`} {...props} />;
}
