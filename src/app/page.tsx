import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight, MapPin, MailIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      {/* Hero Section */}
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start">
            {/* Avatar with glow */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <Avatar className="relative size-32 sm:size-36 border-2 border-primary/20 ring-4 ring-background">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback className="text-3xl font-display">{DATA.initials}</AvatarFallback>
                </Avatar>
                {/* Status indicator */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 border border-primary/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">Verfügbar</span>
                </div>
              </div>
            </BlurFade>
            
            {/* Hero text */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                yOffset={8}
                text={`Hi, ich bin ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="inline-flex items-center gap-2 text-2xl sm:text-3xl">
                  <span className="gradient-text font-display font-semibold">Entwickler</span>
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </span>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-muted-foreground text-base sm:text-lg max-w-md">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{DATA.location}</span>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-display text-2xl font-bold gradient-text">Über mich</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="glass rounded-xl p-6">
            <Markdown className="prose prose-sm max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert leading-relaxed">
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-display text-2xl font-bold gradient-text">Skills</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Badge 
                  variant="outline" 
                  className="skill-badge px-3 py-1.5 text-sm font-medium border-primary/30 hover:border-primary/60 hover:bg-primary/10 cursor-default"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                  <Sparkles className="w-4 h-4" />
                  Meine Projekte
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                  Ausgewählte <span className="gradient-text">Arbeiten</span>
                </h2>
                <p className="text-muted-foreground text-base max-w-lg mx-auto">
                  Eine Sammlung meiner Projekte — von Web-Apps bis hin zu Mobile-Anwendungen.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="glass rounded-2xl p-8 sm:p-10 text-center space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary">
                  Kontakt
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                  Lass uns <span className="gradient-text">connecten</span>
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Hast du ein Projekt im Kopf oder möchtest einfach nur Hallo sagen? Ich freue mich von dir zu hören!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link
                  href="mailto:mail@lucabmn.de"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  <MailIcon className="w-4 h-4" />
                  E-Mail schreiben
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                
                <div className="flex items-center gap-3">
                  <Link
                    href="https://github.com/lucabmn"
                    target="_blank"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                  </Link>
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/50">
                    <DiscordLogoIcon className="w-5 h-5 text-[#5865F2]" />
                    <span className="text-sm font-medium">@luca.sync</span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="pb-8">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
            <p className="font-medium">© 2025 Luca</p>
            <p className="text-xs">
              Inspired by{" "}
              <a
                className="text-primary hover:underline underline-offset-4 transition-colors"
                href="https://github.com/dillionverma/portfolio"
                target="_blank"
              >
                Dillion Verma
              </a>
            </p>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
