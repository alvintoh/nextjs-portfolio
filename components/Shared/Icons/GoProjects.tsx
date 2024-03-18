import { SVGProps } from "react";

const GoProjectsLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 128C32 74.9807 74.9807 32 128 32H384C437.019 32 480 74.9807 480 128V384C480 437.019 437.019 480 384 480H128C74.9807 480 32 437.019 32 384V128Z"
      fill="#000dff"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M128 32C74.9807 32 32 74.9807 32 128V368C32 412.183 67.8172 448 112 448H368C412.183 448 448 412.183 448 368V112C448 67.8172 412.183 32 368 32H128Z"
      fill="#5900ff"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M172 148H352C363.046 148 372 139.046 372 128C372 116.954 363.046 108 352 108H168C148.118 108 132 124.118 132 144V368C132 387.882 148.118 404 168 404H344C363.882 404 380 387.882 380 368V272C380 252.118 363.882 236 344 236H256C244.954 236 236 244.954 236 256C236 267.046 244.954 276 256 276H340V364H172V148Z"
      fill="white"
    ></path>
  </svg>
);

export default GoProjectsLogo;
