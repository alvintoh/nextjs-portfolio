import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import { GitHubLogo } from "@/components/Shared/Icons";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "@/components/Shared/Link";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { allProjects, Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import NextImage from "next/image";

interface ProjectPageProps {
  project: Project;
  projectImagePreview: string;
}

const SkillPage: NextPage<ProjectPageProps> = ({
  project,
  projectImagePreview,
}) => {
  const ProjectMDX = useMDXComponent(project.body.code);

  return (
    <>
      <NextSeo
        title={`${project.name} | ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME}`}
        description={project.description}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects/${project.slug}`,
          title: `${project.name} | ${process.env.NEXT_PUBLIC_PORTFOLIO_NAME}`,
          description: project.description,
          images: [
            {
              url: project.image.url,
              width: project.image.width,
              height: project.image.height,
              alt: project.name,
            },
          ],
        }}
      />
      <div className="mt-8 flex space-x-8">
        <IconFactory
          name={project.iconName}
          className="h-16 w-16 rounded-xl bg-tertiary p-2 shadow-md"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="flex text-2xl font-bold">
            <span className="no whitespace-nowrap">{project.name} </span>
            <span className="m-2.5 min-w-[120px] text-xs text-gray-300">
              / {format(parseISO(project.publishedDate), "MMMM do, yyyy")}
            </span>
          </h1>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {project.link && (
          <Link href={project.link} noHighlight>
            {project.link}
          </Link>
        )}
      </div>
      <div className="mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {project.githubLink && (
          <Link href={project.githubLink} icon={<GitHubLogo />} noHighlight>
            {getGitHubOwnerAndRepoFromLink(project.githubLink)}
          </Link>
        )}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border-[1px] border-tertiary p-0 shadow-md">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          placeholder="blur"
          blurDataURL={projectImagePreview}
          alt={project.name}
        />
      </div>

      <article>
        <div className="prose my-12 max-w-full leading-8">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`project: ${project.name}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(project => project.slug === params.slug);

  const projectImagePreview = await getPreviewImageUrl(project.image.url);

  return {
    props: {
      project,
      projectImagePreview,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map(project => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
