import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import ceoPortrait from "@/assets/ceo-portrait.png";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

const insights = [
  {
    date: "Jan 2026",
    title: "Building Wealth with Strategic Advisory",
    description: "Our CEO Oluseyi Adebayo sat down to share strategies on building wealth through strategic business advisory.",
    image: insight1,
  },
  {
    date: "Dec 2025",
    title: "Navigating Capital Raising in Emerging Markets",
    description: "Insights on the pressing challenges of capital raising for African startups and growth-stage companies.",
    image: insight2,
  },
  {
    date: "Nov 2025",
    title: "Digital Transformation for African Enterprises",
    description: "A comprehensive look at how African enterprises can leverage technology for sustainable growth.",
    image: insight3,
  },
];

export default function OurPeople() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="h-16 bg-navy" />

      {/* CEO Profile Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={ceoPortrait}
                  alt="Oluseyi Adebayo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2">
                Oluseyi Adebayo
              </h1>
              <p className="text-muted-foreground mb-8">
                Founder & Chief Executive Officer
              </p>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Oluseyi Adebayo is the Founder and CEO of Oyinboade Ltd, an advisory firm with global interests in financial services, technology, e-commerce, and natural resources. He leads a team of advisors and operators focused on helping individuals, businesses, and institutions raise capital, strengthen operations, and create sustainable long-term value.
                </p>
                <p>
                  Before establishing Oyinboade, Oluseyi held senior coverage roles at ETAP and Stanbic IBTC Bank in Nigeria, where he led market expansion initiatives and delivered digital transformation, operational improvement, and technology-enabled solutions to private and institutional clients.
                </p>
                <p>
                  He serves as a Director at Living Soul Group, a diversified organisation with interests in hospitality, education, real estate, and agriculture. He has also served on the boards of organisations involved in healthcare, insurance, technology, and education, including as a strategic advisor to various venture-backed startups.
                </p>
                <p>
                  Through his work with founders, incubators, accelerators, and venture capital firms, he has supported startups that have collectively raised over $10 million in funding.
                </p>
                <p>
                  His academic background includes a Bachelor's degree in Mechanical Engineering from Covenant University, Nigeria, and a Master of Business Administration (MBA) with a focus on Finance and Investment from Ahmadu Bello University.
                </p>
                <p>
                  He is a VC Lab Fellow (United States) and a published author, with a particular interest in expanding access to opportunity for underrepresented and overlooked communities.
                </p>
              </div>

              <div className="mt-10">
                <p className="text-sm font-medium text-foreground mb-4">
                  Connect with Oluseyi
                </p>
                <a
                  href="https://www.linkedin.com/in/oluseyi-adebayo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">
              Insights from Oluseyi
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold transition-colors">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-border hover:border-gold transition-colors">
                →
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-video overflow-hidden mb-4">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2">{insight.date}</p>
                <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-gold transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Ready to leverage our experience and network for your growth? Reach out to start a conversation.
            </p>
            <Link to="/contact" className="btn-line text-white hover:text-gold">
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
