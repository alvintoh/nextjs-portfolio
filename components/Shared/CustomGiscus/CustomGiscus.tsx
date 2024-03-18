import Giscus from "@giscus/react";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  return (
    <Giscus
      id="comments"
      repo="alvintoh/nextjs-portfolio"
      repoId="R_kgDOLeypdw"
      category="Comments"
      categoryId="DIC_kwDOLeypd84CeDcD"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
