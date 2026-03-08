import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import ceoPortrait from "@/assets/ceo-portrait.png";

const focusAreas = [
  "Strategy & Organisational Development",
  "Capital Allocation & Investment",
  "Venture Ecosystems in Emerging Markets",
  "Financial Services Transformation",
  "Technology-Enabled Business Models",
  "Institutional Development",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-transparent" />
        </div>

        <div className="relative container-wide pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
            >
              Strategy, Technology,{" "}
              <span className="italic text-gold">Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 leading-relaxed mb-10"
            >
              Helping organisations grow, and create long-term value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/experience" className="btn-line text-white hover:text-gold">
                VIEW EXPERIENCE
              </Link>
              <a
                href="https://www.linkedin.com/in/oluseyi-adebayo/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line text-white hover:text-gold"
              >
                CONNECT ON LINKEDIN
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">ABOUT</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Oluseyi Adebayo
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  Oluseyi Adebayo is a strategy and advisory professional whose work sits at the intersection of business strategy, operations, and capital allocation. He works across consulting, financial services, and venture ecosystems, with a focus on helping organisations and founders navigate complexity, growth, and long-term sustainability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His interests span financial services, technology, venture ecosystems, and institutional development across emerging markets — with a focus on understanding how organisations deploy capital, structure operations, and build sustainable growth strategies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profile Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={ceoPortrait}
                alt="Oluseyi Adebayo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">BACKGROUND</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Professional Background
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Oluseyi has worked across consulting, banking, and early-stage venture environments, including roles at PwC and Stanbic IBTC Bank, where he contributed to strategy development, digital transformation initiatives, and market expansion efforts.
                </p>
                <p>
                  Beyond corporate engagements, he has worked closely with founders, accelerators, and venture ecosystems supporting early-stage businesses with strategic thinking, operational development, and investment readiness.
                </p>
                <p>
                  He also serves as a Director at Living Soul Group, a diversified organisation with interests in hospitality, education, real estate, and agriculture.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/experience" className="btn-line">
                  VIEW FULL EXPERIENCE
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-16">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">FOCUS AREAS</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  Core Areas of Interest
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                His broader interests include how capital, institutions, and market systems shape economic opportunity in emerging markets, particularly across Africa.
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-border hover:border-gold transition-colors group"
              >
                <h3 className="text-lg font-serif text-foreground group-hover:text-gold transition-colors">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4">
                  Education & Affiliations
                </h3>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border-l-2 border-gold pl-6"
                >
                  <p className="text-white font-medium">MBA — Finance & Investment</p>
                  <p className="text-white/60 text-sm">Ahmadu Bello University</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="border-l-2 border-gold pl-6"
                >
                  <p className="text-white font-medium">B.Eng — Mechanical Engineering</p>
                  <p className="text-white/60 text-sm">Covenant University</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-2 border-gold pl-6"
                >
                  <p className="text-white font-medium">VC Lab Fellow</p>
                  <p className="text-white/60 text-sm">Global community developing the next generation of venture capital investors</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              For professional conversations, collaborations, or speaking engagements.
            </p>
            <Link to="/contact" className="btn-line">
              GET IN TOUCH
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
