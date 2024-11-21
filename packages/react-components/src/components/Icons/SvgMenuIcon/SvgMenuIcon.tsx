/* The component implements the Bars icon from Font Awesome: https://fontawesome.com/icons/bars */
export default function SvgMenuIcon({ id = "menu-icon" }) {
  return (
    <svg
      id={id}
      width="20"
      height="20"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
