import MDXComponents from "@/components/Common/MDXComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import { CleanedAboutMe } from "types/aboutme";

const AboutMeCard = ({ content }: Omit<CleanedAboutMe, "id">): JSX.Element => {
  const AboutMeMdx = useMDXComponent(content);

  return (
    <div className="b flex flex-col space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary/50 px-6 py-4">
      <div className="prose my-4 max-w-full leading-6">
        <AboutMeMdx components={{ ...MDXComponents }} />
      </div>
    </div>
  );
};

export default AboutMeCard;
