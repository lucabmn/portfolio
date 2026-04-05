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
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col h-full",
        className
      )}
    >
      {/* Image */}
      <Link href={href || "#"} className="block relative overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-[16/10] overflow-hidden bg-accent">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
          {image && !video && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 pt-3 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-sm leading-tight">
            {title}
          </h3>
          <time className="text-xs text-muted-foreground/60 whitespace-nowrap shrink-0">
            {dates.split(" - ")[0]}
          </time>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-muted-foreground/70"
              >
                {tag}{tags.indexOf(tag) < Math.min(tags.length, 3) - 1 ? " /" : ""}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[11px] text-muted-foreground/50">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
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
