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
          "https://res.cloudinary.com/dvhl4ow8k/image/upload/f_auto,q_auto/v1/nextjs-portfolio/seo/t8xm8gvkxca9squxkfgr",
        width: 1200,
        height: 630,
        alt:
          process.env.NEXT_PUBLIC_SEO_IMAGE_ALT ||
          "https://res.cloudinary.com/dvhl4ow8k/image/upload/f_auto,q_auto/v1/nextjs-portfolio/seo/t8xm8gvkxca9squxkfgr",
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
