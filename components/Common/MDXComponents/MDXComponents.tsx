import Link from "@/components/Shared/Link";
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cloneElement, useRef } from "react";

const CodeBlock = props => {
  const codeRef = useRef<HTMLElement>(null);

  return (
    <div style={{ position: "relative", overflow: "auto" }}>
      <pre {...props}>
        {cloneElement(props.children as React.ReactElement, { ref: codeRef })}
      </pre>
    </div>
  );
};

const BlogImage = props => {
  return (
    <div className="my-8 rounded-md">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width || 800}
        height={props.height || 450}
        layout="responsive"
      />
    </div>
  );
};

const BlogLink = props => {
  return <Link {...props} className="text-blue-400 hover:text-blue-300" />;
};

const CustomMDXComponents: MDXComponents = {
  a: BlogLink,
  pre: CodeBlock,
  img: BlogImage,
};
export default CustomMDXComponents;
