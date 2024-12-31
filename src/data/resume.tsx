import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Luca",
  initials: "L",
  url: "https://lucabmn.de",
  location: "Baden-Württemberg, DE",
  locationLink: "https://www.google.com/maps/place/baden-wuerttemberg",
  description: "Entwickler und Fachinformatiker für Systemintegration.",
  summary:
    "Im alter von 13 Jahren, habe ich angefangen mich für die IT zu interessieren. Seitdem habe ich viele Projekte umgesetzt und Erfahrungen gesammelt. Ich bin ein leidenschaftlicher Entwickler und Fachinformatiker für Systemintegration. Ich liebe es, neue Technologien zu lernen und zu verstehen. Ich bin immer auf der Suche nach neuen Herausforderungen und Projekten, an denen ich arbeiten kann.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@lucasync.de",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lucabmn",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:hello@lucasync.de",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "Nexuscraft",
      href: "https://magicui.design",
      dates: "December 2024 - Present",
      active: true,
      description: "Soon.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nexuscraft.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/nexuscraft.png",
      video: "",
    },
    {
      title: "Pitlane (Discontinued)",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: false,
      description:
        "Pitlane is a mobile app for Formula 1 fans. It provides live timing, news, and more.",
      technologies: [
        "React Native",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Expo",
      ],
      links: [
        {
          type: "Website",
          href: "https://pitlane.lucabmn.de/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "AppStore",
          href: "https://pitlane.lucabmn.de/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/pitlane.png",
      video: "",
    },
    {
      title: "Saturn Bot (Discontinued)",
      href: "https://saturnbot.app",
      dates: "March 2022 - March 2024",
      active: false,
      description: "A simple Discord Bot for your community.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://saturnbot.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/saturnbot.png",
      video: "",
    },
  ],
} as const;
