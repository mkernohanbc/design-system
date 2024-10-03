import "./Divider.css";

export interface DividerProps {
  /* Set divider to use dashed style instead of a solid line */
  isDashed?: boolean;
  /* Rotates divider 90 degrees */
  isVertical?: boolean;
}

export default function Divider({
  isDashed = false,
  isVertical = false,
  ...props
}) {
  return (
    <hr
      className={`bcds-Divider ${isDashed && "dashed"} ${
        isVertical && "vertical"
      }`}
      {...props}
    />
  );
}
