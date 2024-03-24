import { SVGProps } from "react";

const NoteGoLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#97CCEF"
      d="M52 2.5H19A1.5 1.5 0 0 0 17.5 4v56a1.5 1.5 0 0 0 1.5 1.5h33a5.51 5.51 0 0 0 5.5-5.5V8A5.51 5.51 0 0 0 52 2.5Z"
    />
    <path
      fill="#0099D6"
      d="M19 2.5h-7A5.51 5.51 0 0 0 6.5 8v48a5.51 5.51 0 0 0 5.5 5.5h7a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 19 2.5Z"
    />
    <path
      fill="#275996"
      d="M47.07 2.5V20a1.499 1.499 0 0 1-1.5 1.5 1.49 1.49 0 0 1-1-.39L40.07 17l-4.49 4.08A1.5 1.5 0 0 1 33.07 20V2.5h14Z"
    />
  </svg>
);

export default NoteGoLogo;
