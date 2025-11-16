import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "STFU and EAT",
  DESCRIPTION:
    "A no-nonsense recipe blog that optimizes for macros and flavor.",
  EMAIL: "ybotuil2211@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Macro-optimized recipes and practical cooking tips.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Facebook",
    HREF: "https://www.facebook.com/toby.liu.18/",
  },
];
