import Giscus from "@giscus/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const GuestBookPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Guestbook | Anish De"
        description="Leave messages on my portfolio site's guestbook :)"
      />
      <h1 className="text-3xl font-bold">GuestBook</h1>
      <p className="mt-4 text-gray-300">Leave a message :)</p>
      <div className="mt-16">
        <Giscus
          id="comments"
          repo="alvintoh/nextjs-portfolio"
          repoId="R_kgDOLeypdw"
          category="Comments"
          categoryId="DIC_kwDOLeypd84CeDcD"
          mapping="specific"
          term="GuestBook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default GuestBookPage;
