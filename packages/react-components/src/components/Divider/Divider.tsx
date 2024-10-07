import "./Divider.css";

export interface DividerProps {
  /* Set divider to use dashed style instead of a solid line */
  isDashed?: boolean;
  /* Sets orientation to vertical, renders <div> instead of <hr> */
  isVertical?: boolean;
}

export default function Divider({
  isDashed = false,
  isVertical = false,
  ...props
}) {
  if (isVertical) {
    return (
      <div
        className={`bcds-Divider vertical ${isDashed && "dashed"}`}
        aria-orientation="vertical"
        role="separator"
        {...props}
      />
    );
  }
  return <hr className={`bcds-Divider ${isDashed && "dashed"}`} {...props} />;
}
