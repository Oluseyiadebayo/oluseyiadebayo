import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { usePublishedArticles } from "@/hooks/useArticles";

const Thoughts = () => {
  const { data: articles, isLoading } = usePublishedArticles();

  const featured = articles?.find((a) => a.featured) || articles?.[0];
  const rest = articles?.filter((a) => a.id !== featured?.id) || [];

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

      {isLoading ? (
        <section className="section-padding">
          <div className="container-wide">
            <p className="text-muted-foreground">Loading articles...</p>
          </div>
        </section>
      ) : !articles || articles.length === 0 ? (
        <section className="section-padding">
          <div className="container-wide text-center py-16">
            <p className="text-muted-foreground">No articles published yet. Check back soon.</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Article */}
          {featured && (
            <section className="section-padding">
              <div className="container-wide">
                <Link to={`/thoughts/${featured.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group grid lg:grid-cols-2 gap-8 items-center cursor-pointer"
                  >
                    {featured.image_url && (
                      <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                        <img
                          src={featured.image_url}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    )}
                    <div>
                      <span className="inline-block text-sm font-medium text-gold uppercase tracking-widest mb-4">
                        {featured.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        {featured.read_time && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock size={14} />
                            <span>{featured.read_time}</span>
                          </div>
                        )}
                        <span className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all text-sm">
                          Read Article
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </div>
            </section>
          )}

          {/* Article Grid */}
          {rest.length > 0 && (
            <section className="section-padding-sm bg-secondary">
              <div className="container-wide">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((article, index) => (
                    <Link key={article.id} to={`/thoughts/${article.slug}`}>
                      <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col h-full bg-background border border-border card-hover cursor-pointer"
                      >
                        {article.image_url && (
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={article.image_url}
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
                            {article.read_time && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock size={12} />
                                <span>{article.read_time}</span>
                              </div>
                            )}
                            <span className="inline-flex items-center gap-1 text-sm text-gold font-medium">
                              Read
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </Layout>
  );
};

export default Thoughts;
