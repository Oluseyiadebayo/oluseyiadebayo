import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime?: string;
  image?: string;
  slug?: string;
  featured?: boolean;
  index?: number;
  className?: string;
}

export function ResourceCard({
  title,
  excerpt,
  category,
  readTime,
  image,
  slug = "#",
  featured = false,
  index = 0,
  className,
}: ResourceCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "group relative grid lg:grid-cols-2 gap-8 items-center",
          className
        )}
      >
        {/* Image */}
        <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-card flex items-center justify-center">
              <span className="text-4xl font-serif text-primary/30">📄</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            {readTime && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={14} />
                <span>{readTime}</span>
              </div>
            )}
            <Link
              to={slug}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Read Article
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group flex flex-col h-full rounded-lg overflow-hidden bg-gradient-card border border-border/50 card-hover",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-3xl font-serif text-primary/30">📄</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
          {category}
        </span>
        <h4 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          {readTime && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={12} />
              <span>{readTime}</span>
            </div>
          )}
          <Link
            to={slug}
            className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
          >
            Read
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
