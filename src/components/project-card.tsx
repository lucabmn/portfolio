import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl glass glass-hover h-full",
        className
      )}
    >
      {/* Image/Video Section */}
      <Link href={href || "#"} className="block relative overflow-hidden">
        <div className="relative h-44 overflow-hidden">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* View project indicator */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span>Ansehen</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        {/* Title and Date */}
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-base leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          <time className="text-xs text-muted-foreground/70">{dates}</time>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0.5 text-[10px] font-medium bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge
                variant="secondary"
                className="px-2 py-0.5 text-[10px] font-medium bg-secondary/50"
              >
                +{tags.length - 4}
              </Badge>
            )}
          </div>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.icon}
                <span>{link.type}</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
