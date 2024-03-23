import MDXComponents from "@/components/Common/MDXComponents";
import { useMDXComponent } from "next-contentlayer/hooks";
import LazyLoad from "react-lazyload";
import { CleanedAboutMe } from "types/aboutme";

const AboutMeCard = ({ content }: Omit<CleanedAboutMe, "id">): JSX.Element => {
  const AboutMeMdx = useMDXComponent(content);

  return (
    <div className="b flex flex-col space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary/50 px-6 py-4">
      <div className="prose my-4 max-w-full leading-6">
        <LazyLoad offset={100} once>
          <AboutMeMdx components={{ ...MDXComponents }} />
        </LazyLoad>
      </div>
    </div>
  );
};

export default AboutMeCard;
