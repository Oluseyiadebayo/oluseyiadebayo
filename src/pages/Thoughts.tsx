import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const featuredArticle = {
  title: "Venture Capital Realities in Africa",
  excerpt:
    "The narrative around venture capital in Africa often outpaces the structural realities. Understanding the gap between capital availability and deployment is critical for founders and investors alike.",
  readTime: "8 min read",
  image: insight1,
  category: "Venture Capital",
};

const articles = [
  {
    title: "Why Startups Fail After Raising Capital",
    excerpt:
      "Capital solves certain problems. It creates others. Many early-stage companies collapse not from lack of funding, but from premature scaling, misaligned incentives, and weak operational foundations.",
    readTime: "6 min read",
    image: insight2,
    category: "Strategy",
  },
  {
    title: "Capital Allocation in Emerging Markets",
    excerpt:
      "How capital flows through emerging economies — through institutions, markets, and informal networks — shapes what gets built and who benefits.",
    readTime: "7 min read",
    image: insight3,
    category: "Markets",
  },
  {
    title: "Fintechs Becoming Banks",
    excerpt:
      "As fintech companies mature, many find themselves pulled toward becoming the institutions they once sought to disrupt. The regulatory, operational, and strategic implications are profound.",
    readTime: "5 min read",
    category: "Financial Services",
  },
  {
    title: "Strategy Versus Execution in Startups",
    excerpt:
      "In early-stage environments, the line between strategy and execution blurs. The best founders don't separate thinking from doing — they iterate between both with discipline.",
    readTime: "4 min read",
    category: "Strategy",
  },
  {
    title: "SME Growth Constraints in Emerging Economies",
    excerpt:
      "Small and medium enterprises face structural barriers that extend beyond access to finance — including regulatory complexity, talent gaps, and market fragmentation.",
    readTime: "6 min read",
    category: "Economic Development",
  },
];

const Thoughts = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block text-white/60">BLOG</span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Thoughts
            </h1>
            <p className="text-white/70 max-w-2xl">
              Occasional reflections on strategy, capital, and markets in emerging economies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid lg:grid-cols-2 gap-8 items-center cursor-pointer"
          >
            <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div>
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-widest mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} />
                  <span>{featuredArticle.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm">
                  Read Article
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-background border border-border card-hover cursor-pointer"
              >
                {article.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-medium text-gold uppercase tracking-widest mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-gold font-medium">
                      Read
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Thoughts;
