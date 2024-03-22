import AboutMeCard from "@/components/AboutMe/AboutMeCard";
import { allAboutmes } from "contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { CleanedAboutMe } from "types/aboutme";

interface AboutMePageProps {
  aboutme: CleanedAboutMe;
}

const AchievementsPage: NextPage<AboutMePageProps> = ({ aboutme }) => {
  return (
    <>
      <NextSeo
        title={`About Me | ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME}`}
        description={`${process.env.NEXT_PUBLIC_PORTFOLIO_NAME} 's About Me`}
      />
      <h1 className="mb-8 text-2xl font-bold">About Me</h1>
      <div className="flex flex-col space-y-8">
        <AboutMeCard content={aboutme[0].content} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cleanedAboutMes = allAboutmes.map(aboutme => ({
    id: aboutme._id,
    title: aboutme.title,
    content: aboutme.body.code,
  }));

  return {
    props: { aboutme: cleanedAboutMes },
  };
};

export default AchievementsPage;
