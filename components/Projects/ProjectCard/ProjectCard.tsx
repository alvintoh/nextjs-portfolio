import GitHubLogo from "@/components/Shared/Icons/github";
import Link from "@/components/Shared/Link";
import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { CloudinaryImage } from "contentlayer/generated";
import NextImage from "next/image";
import { forwardRef } from "react";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
  placeholderImage: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectProps>(
  (
    {
      slug,
      name,
      description,
      image,
      link,
      githubLink,
      placeholderImage,
    }: ProjectProps,
    ref
  ): JSX.Element => {
    return (
      <div
        className="flex flex-col space-y-8 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 hover:border-accent md:h-[220px] md:flex-row md:space-x-8 md:space-y-0"
        ref={ref}
      >
        <div className="aspect-[16/9] overflow-hidden rounded-2xl drop-shadow-md">
          <Link href={`/projects/${slug}`}>
            <div className="rounded-lg transition duration-200 hover:opacity-60">
              <NextImage
                src={image.url}
                className="rounded-lg transition duration-200 hover:opacity-60"
                height={270}
                width={480}
                alt={name}
                placeholder="blur"
                blurDataURL={placeholderImage}
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <Link
              href={`/projects/${slug}`}
              className="transition duration-200 hover:opacity-60"
            >
              <h2 className="text-2xl font-bold">{name}</h2>
            </Link>
            <p className="text-base text-gray-300">{description}</p>
            <div className="flex flex-col space-y-2 text-sm md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {link && (
                <Link href={link} noHighlight>
                  {cleanLink(link)}
                </Link>
              )}
            </div>
            <div className="flex flex-col space-y-2 text-sm md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {githubLink && (
                <Link href={githubLink} icon={<GitHubLogo />} noHighlight>
                  {getGitHubOwnerAndRepoFromLink(githubLink)}
                </Link>
              )}
            </div>
          </div>
          <Link
            href={`/projects/${slug}`}
            className="mt-4 text-lg"
            gradientUnderline
          >
            <p className="sr-only">Learn more about {name}</p>
            Learn More
          </Link>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
