import {
  GitHubLogo,
  HashnodeLogo,
  LeetCodeLogo,
  LinkedInLogo,
  YouTubeLogo,
} from "@/components/Shared/Icons";
import { ReactNode } from "react";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/in/alvintohyz",
    icon: <LinkedInLogo />,
  },
  {
    id: "github",
    name: "GitHub",
    url: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/alvintoh",
    icon: <GitHubLogo />,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url:
      process.env.NEXT_PUBLIC_LEETCODE_URL || "https://leetcode.com/alvin_gman",
    icon: <LeetCodeLogo />,
  },
  {
    id: "hashnode",
    name: "HashNode",
    url:
      process.env.NEXT_PUBLIC_HASHNODE_URL || "https://alvin-dev.hashnode.dev",
    icon: <HashnodeLogo />,
  },
  {
    id: "youtube",
    name: "YouTube",
    url:
      process.env.NEXT_PUBLIC_YOUTUBE_URL ||
      "https://www.youtube.com/@alvin_gman",
    icon: <YouTubeLogo color="#ff0000" />,
  },
];

export default socials;
