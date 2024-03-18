import { SVGProps } from "react";

const TechInfraLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    version="1.1"
    viewBox="0 0 24 24"
    {...props}
  >
    <g transform="translate(0 -1028.4)">
      <path
        d="m3.1875 6l-2 10h2v-7h18v7h2l-2-10h-18z"
        transform="translate(0 1028.4)"
        fill="#f39c12"
      ></path>
      <path d="m3.1875 1037.4-2 14h2 18 2l-2-14h-18z" fill="#e67e22"></path>
      <path
        d="m9 1030.4v5h-3v0.9 0.1h0.0312l5.9688 6.5 5.969-6.5 0.031-0.1v-0.9h-3v-5h-6z"
        fill="#2c3e50"
      ></path>
      <path
        d="m1.1875 1044.4v7h22v-7h-8.188c-0.416 1.1-1.511 2-2.812 2-1.302 0-2.3975-0.9-2.813-2h-8.1875z"
        fill="#f1c40f"
      ></path>
      <rect height="1" width="22" y="1051.4" x="1.1875" fill="#f39c12"></rect>
      <path
        d="m9 0v1 5.9688h-3l6 6.5312 6-6.5312h-3v-5.9688-1h-6z"
        transform="translate(0 1028.4)"
        fill="#34495e"
      ></path>
    </g>
  </svg>
);

export default TechInfraLogo;
