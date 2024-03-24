import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "@/components/Shared/Link";
import { ArrowRight, ExternalLink } from "react-feather";
import { ProjectData } from "types/project";

interface ProjectProps {
  projects: ProjectData[];
}

const Projects = ({ projects }: ProjectProps): JSX.Element => {
  return (
    <>
      <div className="my-16 flex flex-col">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="flex flex-col space-y-8 ">
          {projects.slice(0, 3).map(project => (
            <div
              key={project._id}
              className="group relative rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-col space-y-8 px-2 md:flex-row md:space-x-4 md:space-y-0"
              >
                <IconFactory
                  name={project.iconName}
                  className="my-1.5 h-6 w-6 rounded-xl bg-tertiary shadow-md md:space-y-2"
                />
                <div className="flex-col space-y-1">
                  <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-base text-gray-300">
                    {project.description}
                  </p>
                </div>
              </Link>
              {(project.link || project.githubLink) && (
                <a
                  className="absolute -right-2 -top-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
                  href={project.link || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
        >
          <span>View All Projects</span>
          <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
};

export default Projects;
