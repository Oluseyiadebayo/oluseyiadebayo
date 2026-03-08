import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  featured?: boolean;
  index?: number;
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  image,
  bio,
  linkedin,
  twitter,
  featured = false,
  index = 0,
  className,
}: TeamMemberCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "grid lg:grid-cols-2 gap-12 items-center",
          className
        )}
      >
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/50">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                <span className="text-6xl font-serif text-primary/30">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Leadership
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
            {name}
          </h3>
          <p className="text-lg text-primary mb-6">{role}</p>
          {bio && (
            <p className="text-muted-foreground leading-relaxed mb-6">{bio}</p>
          )}
          <div className="flex items-center gap-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group text-center p-6 rounded-lg bg-gradient-card border border-border/50 card-hover",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-card flex items-center justify-center">
            <span className="text-3xl font-serif text-primary/30">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <h4 className="text-xl font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {name}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">{role}</p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        )}
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
