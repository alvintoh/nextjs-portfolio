import { SVGProps } from "react";

const InfraStackLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#f39c12" d="m3.188 6-2 10h2V9h18v7h2l-2-10h-18z" />
    <path fill="#e67e22" d="m3.188 9-2 14h22l-2-14h-18z" />
    <path
      fill="#2c3e50"
      d="M9 2v5H6v1h.031L12 14.5 17.969 8 18 7.9V7h-3V2H9z"
    />
    <path
      fill="#f1c40f"
      d="M1.188 16v7h22v-7H15c-.417 1.1-1.512 2-2.813 2-1.301 0-2.397-.9-2.812-2H1.186z"
    />
    <path fill="#f39c12" d="M1.188 23h22v1h-22z" />
    <path fill="#34495e" d="M9 0v6.969H6l6 6.531 6-6.531h-3V0H9z" />
  </svg>
);

export default InfraStackLogo;
