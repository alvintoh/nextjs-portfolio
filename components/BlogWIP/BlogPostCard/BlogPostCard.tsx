import Link from "@/components/Shared/Link";
import { CloudinaryImage } from "contentlayer/generated";
import NextImage from "next/image";

interface BlogPostCardProps {
  slug: string;
  title: string;
  image: CloudinaryImage;
  date: string;
  readingTime: string;
}

const ProjectCard = ({
  slug,
  title,
  image,
  date,
  readingTime,
}: BlogPostCardProps): JSX.Element => {
  return (
    <article className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-secondary px-6 py-4 transition duration-200 hover:scale-105">
      <div>
        <Link href={`/blog-wip/${slug}`} className="flex-col space-y-4">
          <h2 className="text-lg font-semibold transition duration-200 hover:opacity-60">
            {title}
          </h2>
          <p className="text-gray-300 transition duration-200 hover:opacity-60">
            {date} / {readingTime}
          </p>
        </Link>
      </div>
      <Link href={`/blog-wip/${slug}`} className="aspect-[16/9]">
        <NextImage
          src={image.url}
          height={image.height}
          width={image.width}
          alt="Blog post alt image"
          className="rounded-lg drop-shadow-md transition duration-200 hover:opacity-60"
        />
      </Link>
    </article>
  );
};

export default ProjectCard;
