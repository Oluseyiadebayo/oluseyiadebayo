import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const roles = [
  {
    org: "PwC",
    role: "Strategy & Advisory",
    description:
      "Working on consulting engagements focused on strategy, business transformation, and operational improvement for organisations navigating complex market environments.",
  },
  {
    org: "Stanbic IBTC Bank",
    role: "Digital Transformation & Strategy",
    description:
      "Contributed to digital transformation strategy and execution within one of Nigeria's leading financial institutions, working on initiatives spanning institutional strategy, technology-driven process improvement, digital banking capabilities, and operational enhancement across the organisation.",
  },
  {
    org: "Living Soul Group",
    role: "Director",
    description:
      "Serving as a director within a diversified organisation committed to investing in job-creating and impact-oriented sectors of the Nigerian economy, with operating interests spanning hospitality, education, real estate, and agriculture. The Group operates with a long-term thesis centred on economic development and social value creation, deploying capital and operational capacity into sectors that drive employment, skills development, and community resilience. Responsibilities include contributing to strategic direction across business development, operational growth, and sustainability initiatives. Additionally, the Group's foundation arm undertakes philanthropic and developmental work aimed at expanding access to education, healthcare, and economic opportunity within underserved communities.",
  },
];

const ecosystemWork = [
  "Strategy discussions with founders",
  "Operational problem-solving",
  "Investment readiness preparation",
  "Exposure to venture capital thinking",
];

const areasOfInterest = [
  "Strategy and organisational development",
  "Venture ecosystems in emerging markets",
  "Capital allocation and investment decision-making",
  "Digital transformation",
  "Technology-enabled business models",
  "SME growth and economic development",
];

const Experience = () => {
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
            <span className="section-label mb-4 block text-white/60">CAREER</span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Professional Experience & Work
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Professional Roles */}
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
                <span className="section-label mb-4 block">ROLES</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Professional Roles
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              {roles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-8 border-b border-border first:pt-0"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                    <h3 className="text-xl font-serif text-foreground">{item.org}</h3>
                    <span className="text-sm text-gold uppercase tracking-wider font-medium">
                      {item.role}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Ecosystem Work */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">ECOSYSTEM</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Advisory & Ecosystem Work
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Oluseyi has worked with founders, incubators, accelerators, and venture ecosystems supporting early-stage businesses navigating growth, fundraising, and operational challenges. This work has involved:
                </p>
                <div className="space-y-4">
                  {ecosystemWork.map((item, i) => (
                    <div key={i} className="gold-line-left">
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
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
                <span className="section-label mb-4 block">PROJECTS</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Selected Projects
                </h2>
              </motion.div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-serif text-foreground mb-4">Refurnish</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A sustainability initiative focused on extending the lifecycle of products by changing user behaviour towards resale.
                  </p>
                  <p>
                    Responsibilities included business development, capital raise, executive leadership, operational coordination, and customer management.
                  </p>
                </div>

                <h3 className="text-xl font-serif text-foreground mb-4 mt-10">Open Banking</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Involvement in open banking initiatives aimed at enabling seamless financial data sharing and fostering innovation across financial services ecosystems.
                  </p>
                </div>

                <h3 className="text-xl font-serif text-foreground mb-4 mt-10">Propty</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A property tokenisation project exploring how digital assets and blockchain technology can democratise access to real estate investment opportunities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Areas of Interest
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfInterest.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 hover:border-gold transition-colors"
              >
                <p className="text-white/80 font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
