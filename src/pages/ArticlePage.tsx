import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useArticleBySlug } from "@/hooks/useArticles";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticleBySlug(slug || "");

  if (isLoading) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container-wide">
            <p className="text-white/60">Loading...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container-wide text-center">
            <h1 className="text-3xl font-serif text-white mb-4">Article not found</h1>
            <Link to="/thoughts" className="btn-line text-white hover:text-gold">
              Back to Thoughts
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
            <Link
              to="/thoughts"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Thoughts
            </Link>
            <span className="block text-sm font-medium text-gold uppercase tracking-widest mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 max-w-3xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{formattedDate}</span>
              </div>
              {article.read_time && (
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{article.read_time}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      {article.image_url && (
        <section>
          <div className="container-wide">
            <div className="relative aspect-video overflow-hidden -mt-4">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
          >
            {article.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-serif text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-serif text-foreground mt-8 mb-3">{paragraph.replace("### ", "")}</h3>;
              }
              return <p key={i} className="mb-4">{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
