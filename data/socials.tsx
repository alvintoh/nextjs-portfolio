import { ReactNode } from "react";

import {
  LinkedInLogo,
  GitHubLogo,
  LeetCodeLogo,
  YouTubeLogo,
  Twitterlogo,
} from "@/components/Shared/Icons";

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
    url: "https://www.linkedin.com/in/alvintohyz",
    icon: <LinkedInLogo />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/alvintoh",
    icon: <GitHubLogo />,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url: "https://leetcode.com/@alvin_gman",
    icon: <LeetCodeLogo />,
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@alvin_gman",
    icon: <YouTubeLogo color="#ff0000" />,
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/alvin_gman",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
];

export default socials;
