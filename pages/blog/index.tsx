import BlogPostCard from "@/components/Blog/BlogPostCard";
import Link from "@/components/Shared/Link";
import hashnodeData from "@/data/hashnode.json";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title={`Blog Posts | ${process.env.NEXT_PUBLIC_HASHNODE_USERNAME}`}
        description={`Blog written on ${process.env.NEXT_PUBLIC_HASHNODE_USERNAME_BLOG} by ${process.env.NEXT_PUBLIC_HASHNODE_USERNAME}`}
      />
      <h1 className="mb-8 text-2xl font-bold">
        Blog Posts by{" "}
        <Link href={`${process.env.NEXT_PUBLIC_HASHNODE_USERNAME_BLOG}`}>
          <a>{process.env.NEXT_PUBLIC_HASHNODE_USERNAME}</a>
        </Link>
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            placeholderImage={post.placeholderImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            excerpt={post.brief}
            url={`${post.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = hashnodeData.posts;

  const allProjectsWithPlaceholerImages = [];

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage);
    allProjectsWithPlaceholerImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { posts: allProjectsWithPlaceholerImages },
  };
};

export default BlogPostsPage;
