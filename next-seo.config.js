const defaultSEOConfig = {
  title:
    process.env.NEXT_PUBLIC_PORTFOLIO_TITLE ||
    "Alvin Toh | Full Stack Developer",
  description:
    process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION ||
    "Full Stack Developer • Creative Problem Solver • Lifelong Learner • Tech Enthusiast",
  cannonical:
    process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://alvin-dev.vercel.app",
  openGraph: {
    type: "website",
    url:
      process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://alvin-dev.vercel.app",
    site_name:
      process.env.NEXT_PUBLIC_PORTFOLIO_URL_SITE_NAME || "Alvin Toh Portfolio",
    title:
      process.env.NEXT_PUBLIC_PORTFOLIO_TITLE ||
      "Alvin Toh | Full Stack Developer",
    description:
      process.env.NEXT_PUBLIC_PORTFOLIO_DESCRIPTION ||
      "Full Stack Developer • Creative Problem Solver • Lifelong Learner • Tech Enthusiast",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_SEO_IMAGE_URL ||
          "https://media.licdn.com/dms/image/C4E03AQGS-P-MOeMFFQ/profile-displayphoto-shrink_200_200/0/1517406381662?e=1715817600&v=beta&t=mXGtnkWFS6QYc4vpkQPCR1erE3d8u56EDAfzuWsTqv0",
        width: 1200,
        height: 630,
        alt:
          process.env.NEXT_PUBLIC_SEO_IMAGE_ALT ||
          "https://media.licdn.com/dms/image/C4E03AQGS-P-MOeMFFQ/profile-displayphoto-shrink_200_200/0/1517406381662?e=1715817600&v=beta&t=mXGtnkWFS6QYc4vpkQPCR1erE3d8u56EDAfzuWsTqv0",
      },
    ],
    profile: {
      firstName: process.env.NEXT_PUBLIC_SEO_FIRST_NAME || "Alvin",
      lastName: process.env.NEXT_PUBLIC_SEO_LAST_NAME || "Toh",
      username: process.env.NEXT_PUBLIC_SEO_USERNAME || "alvin_gman",
      gender: process.env.NEXT_PUBLIC_SEO_GENDER || "male",
    },
  },
  twitter: {
    handle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@lvin_gman",
    site: process.env.NEXT_PUBLIC_TWITTER_SITE || "@alvin_gman",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
