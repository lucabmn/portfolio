import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight, MailIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20">
      {/* Hero */}
      <section id="hero" className="pt-4">
        <div className="space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-16 border border-border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-lg">{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>

          <div className="space-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {DATA.name}
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                {DATA.description}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-sm text-muted-foreground/70">
                {DATA.location}
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Info
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Markdown className="prose prose-sm max-w-full text-pretty text-foreground/80 dark:prose-invert leading-relaxed [&>p]:mb-0">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Skills */}
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Skills
          </h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.04}>
              <span className="inline-flex items-center rounded-md border border-border px-2.5 py-1 text-sm text-foreground/80">
                {skill}
              </span>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
            Projekte
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Kontakt
          </h2>
          <p className="text-foreground/80 mb-6">
            Interesse an einer Zusammenarbeit? Schreib mir gerne.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="mailto:mail@lucabmn.de"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
            >
              <MailIcon className="w-4 h-4" />
              E-Mail
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="https://github.com/lucabmn"
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-accent transition-colors"
            >
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border text-sm text-muted-foreground">
              <DiscordLogoIcon className="w-4 h-4" />
              @luca.sync
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Footer */}
      <footer id="footer" className="pb-8 pt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="border-t border-border pt-6 flex items-center justify-between text-xs text-muted-foreground">
            <span>&copy; 2025 Luca</span>
            <a
              className="hover:text-foreground transition-colors"
              href="https://github.com/dillionverma/portfolio"
              target="_blank"
            >
              Inspired by Dillion Verma
            </a>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
