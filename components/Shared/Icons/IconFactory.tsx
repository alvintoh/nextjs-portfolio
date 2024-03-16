import StorliLogo from "./Storli";

import {
  FigmaLogo,
  GoLogo,
  NextJSLogo,
  NotigerLogo,
  PayPeerLogo,
  ReactLogo,
  SecliLogo,
  TailwindCSSLogo,
  TwNFTLogo,
  TypescriptLogo,
  XdoXLogo,
} from ".";

import { SVGProps } from "react";
import { X } from "react-feather";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "xdox":
      return <XdoXLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "notiger":
      return <NotigerLogo {...otherProps} />;
    case "twnft":
      return <TwNFTLogo {...otherProps} />;
    case "storli":
      return <StorliLogo {...otherProps} />;
    case "secli":
      return <SecliLogo {...otherProps} />;
    case "paypeer":
      return <PayPeerLogo {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;
