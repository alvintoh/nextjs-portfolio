import BlogPosts from "@/components/Home/BlogPosts";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import hashnodeData from "@/data/hashnode.json";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { allProjects } from "contentlayer/generated";
import type { GetStaticProps, NextPage } from "next";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import { ProjectData } from "types/projectData";

interface HomePageProps {
  projects: ProjectData[];
  blogPosts: HashnodePostWithPlaceHolderImage[];
}

const HomePage: NextPage<HomePageProps> = ({ projects, blogPosts }) => {
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <BlogPosts posts={blogPosts} />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = allProjects;
  const posts = hashnodeData.posts;
  const projectsData = [];
  const postsWithPlaceholderImages = [];

  for (const project of projects) {
    projectsData.push({
      ...project,
    });
  }
  // Sort projectsData in descending order based on publishedDate
  projectsData.sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage);
    postsWithPlaceholderImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: {
      projects: projectsData,
      blogPosts: postsWithPlaceholderImages,
    },
  };
};

export default HomePage;
