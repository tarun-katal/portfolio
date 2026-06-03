import projects1 from "../src/assets/projects1.webp";
import projects2 from "../src/assets/projects2.webp";
import projects3 from "../src/assets/projects3.webp";
import projects4 from "../src/assets/projects4.webp";
import projects5 from "../src/assets/projects5.webp";
import projects6 from "../src/assets/projects6.webp";

import person1 from "../src/assets/person1.webp";
import person2 from "../src/assets/person2.webp";
import person3 from "../src/assets/person3.webp";
import person4 from "../src/assets/person4.webp";
import person5 from "../src/assets/person5.webp";
import person6 from "../src/assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Skiils & Courses" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Namaskaram  🙏",
  introduction:
    "I do full stack development W/ Next.js & TS",
  description:
    "If u have a good cause, HMU",
  resumeLinkText: "Download Resume",
  resumeLink: "/outdated",
};

export const PROJECTS = [
  {
    name: "VIRTUAL STUDIO",
    description: "Virtual Studio build tools for developers",
    image: projects1,
    link: "https://virtual-studio.vercel.app/",
  },
  {
    name: "NutriTrack",
    description: "Track your meals and calories with smart AI suggestions",
    image: projects2,
    link: "https://virtual-studio.vercel.app/",
  },
  {
    name: "HairRevive",
    description: "A platform for hair regrowth solutions powered by science",
    image: projects3,
    link: "https://virtual-studio.vercel.app/",
  },
  {
    name: "DevDeck",
    description:
      "Interactive dashboard for developers to track coding activity",
    image: projects4,
    link: "https://virtual-studio.vercel.app/",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "https://virtual-studio.vercel.app/",
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "https://virtual-studio.vercel.app/",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "After completing my Graduation in Computer engg. from Thapar university, I ve built deep understanding of all major frontend, backend and devops concepts, currently Im looking for junior/intern roles to build up work profile"
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at TechCorp",
    location: "Paris, France",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Inc.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "London, UK",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/tho8less",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/tarunkatal",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/tarunkatal",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Tarun Katal. All rights reserved.`,
};
