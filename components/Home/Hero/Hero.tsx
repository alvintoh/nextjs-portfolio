import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.jpg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          {process.env.NEXT_PUBLIC_PORTFOLIO_NAME || "Alvin Toh"}
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          {process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION ||
            "Full Stack Developer • Creative Problem Solver • Lifelong Learner • Tech Enthusiast"}
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          {process.env.NEXT_PUBLIC_PORTFOLIO_INTRODUCTION ||
            "I'm a passionate software engineer with a knack for Python, Go, Java, and frontend technologies. Always learning, always adapting. I love sharing what I learn on my platform and helping others grow."}
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt={`${process.env.NEXT_PUBLIC_NAME || "Alvin Toh"}  Image`}
        />
      </div>
    </div>
  );
};

export default Hero;
