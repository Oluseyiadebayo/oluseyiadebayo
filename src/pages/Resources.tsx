import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import resourcesHero from "@/assets/resources-hero.jpg";

const featuredArticle = {
  title: "Building Resilient Financial Models for Early-Stage Startups",
  excerpt:
    "A comprehensive guide to creating financial models that not only attract investors but also serve as strategic decision-making tools for founders navigating uncertainty.",
  category: "Financial Modeling",
  date: "January 15, 2026",
  image: resourcesHero,
};

const articles = [
  {
    title: "The Art of Unit Economics: Beyond CAC and LTV",
    excerpt:
      "Understanding the nuances of unit economics and how to use them to drive strategic decisions in your business.",
    categories: ["Strategy", "Finance"],
    date: "January 10, 2026",
    image: "/placeholder.svg",
  },
  {
    title: "Navigating Series A: What Investors Really Want to See",
    excerpt:
      "Insights from the other side of the table on what separates successful Series A raises from the rest.",
    categories: ["Fundraising", "Venture Capital"],
    date: "December 28, 2025",
    image: "/placeholder.svg",
  },
  {
    title: "Digital Transformation: A Framework for African Enterprises",
    excerpt:
      "Practical approaches to digital transformation that account for the unique challenges and opportunities in African markets.",
    categories: ["Digital Strategy", "Operations"],
    date: "December 15, 2025",
    image: "/placeholder.svg",
  },
];

const frameworks = [
  {
    title: "Financial Model Template",
    description: "A comprehensive three-statement financial model template for early-stage startups.",
  },
  {
    title: "GTM Strategy Canvas",
    description: "A strategic framework for developing and executing go-to-market strategies.",
  },
  {
    title: "Due Diligence Checklist",
    description: "Essential checklist for founders preparing for investor due diligence.",
  },
];

export default function Resources() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">THOUGHT LEADERSHIP</span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Stay Informed with the<br />latest publications
            </h1>
            <Link to="/resources" className="btn-line">
              VIEW MORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container-wide">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video overflow-hidden">
              <span className="absolute top-4 right-4 date-badge z-10">
                {featuredArticle.date}
              </span>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs text-gold uppercase tracking-wider mb-4 block">
                {featuredArticle.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <Link to="#" className="btn-line">
                READ MORE
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-background border border-border"
              >
                <div className="relative aspect-video overflow-hidden">
                  <span className="absolute top-4 right-4 date-badge z-10">
                    {article.date}
                  </span>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.categories.map((cat) => (
                      <span key={cat} className="text-xs text-gold">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link to="#" className="btn-line text-sm">
                    READ MORE
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Tools */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-label mb-4 block">TOOLS</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Frameworks & Templates
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-border hover:border-gold transition-colors text-center"
              >
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors">
                  {framework.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {framework.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download size={16} className="mr-2" />
                  Coming Soon
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-serif text-white"
            >
              Sign Up For Our Newsletter
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 md:w-80 px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <button className="px-6 py-3 bg-white/10 hover:bg-gold hover:text-navy-deep transition-colors text-white">
                →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Need Tailored Guidance?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our resources are just the beginning. For personalised strategic advisory, let's talk.
            </p>
            <Link to="/contact" className="btn-line">
              SCHEDULE A CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
