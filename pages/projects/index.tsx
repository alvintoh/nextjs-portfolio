import ProjectCard from "@/components/Projects/ProjectCard";
import Link from "@/components/Shared/Link";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { allProjects, Project } from "contentlayer/generated";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ArrowRight } from "react-feather";

export interface ProjectWithPlaceholderImage extends Project {
  placeholderImage: string;
}

interface ProjectsPageProps {
  allProjectsWithPlaceholderImages: ProjectWithPlaceholderImage[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({
  allProjectsWithPlaceholderImages,
}) => {
  return (
    <>
      <NextSeo
        title={`Projects | ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME}`}
        description={`Projects worked upon by ${process.env.NEXT_PUBLIC_AUTHOR_NAME}`}
      />
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      <div className="flex-col space-y-8">
        {allProjectsWithPlaceholderImages.map((project, index) => (
          <ProjectCard
            key={project._id}
            name={project.name}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            slug={project.slug}
            image={project.image}
            placeholderImage={project.placeholderImage}
          />
        ))}
      </div>
      <Link
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        className="group mt-8 flex flex-row items-center justify-start space-x-2 text-xl font-medium"
        noExternalLinkIcon
      >
        <span>View more on GitHub</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsWithPlaceholderImages = [];

  for (const project of allProjects) {
    const previewUrl = await getPreviewImageUrl(project.image.url);

    allProjectsWithPlaceholderImages.push({
      ...project,
      placeholderImage: previewUrl,
    });
  }
  // Sort projectsData in descending order based on publishedDate
  allProjectsWithPlaceholderImages.sort((a, b) =>
    a.publishedDate < b.publishedDate ? 1 : -1
  );

  return {
    props: { allProjectsWithPlaceholderImages },
  };
};

export default ProjectsPage;
