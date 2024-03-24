import { SVGProps } from "react";

const GoProLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="#000dff"
      d="M32 128c0-53.02 42.98-96 96-96h256c53.019 0 96 42.98 96 96v256c0 53.019-42.981 96-96 96H128c-53.02 0-96-42.981-96-96V128Z"
    />
    <path
      fill="#5900ff"
      d="M128 32c-53.02 0-96 42.98-96 96v240c0 44.183 35.817 80 80 80h256c44.183 0 80-35.817 80-80V112c0-44.183-35.817-80-80-80H128Z"
    />
    <path
      fill="#fff"
      d="M172 148h180c11.046 0 20-8.954 20-20s-8.954-20-20-20H168c-19.882 0-36 16.118-36 36v224c0 19.882 16.118 36 36 36h176c19.882 0 36-16.118 36-36v-96c0-19.882-16.118-36-36-36h-88c-11.046 0-20 8.954-20 20s8.954 20 20 20h84v88H172V148Z"
    />
  </svg>
);

export default GoProLogo;
