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

      {/* Consulting Projects */}
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
                  Consulting Projects
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
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Circular Economy & Sustainable Consumer Behaviour</h3>
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-4 block">Refurnish</span>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A sustainability-oriented consulting engagement centred on extending the lifecycle of consumer products through behavioural interventions that incentivise resale and reuse. The project examined how platform design, pricing mechanisms, and user experience architecture could be leveraged to shift consumer behaviour away from linear consumption patterns towards circular economy participation. Responsibilities encompassed business development strategy, capital raise structuring, executive leadership coordination, operational planning, and customer lifecycle management.
                  </p>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-2 mt-10">Financial Infrastructure & Data Interoperability</h3>
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-4 block">Open Banking</span>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Involvement in consulting engagements around open banking frameworks aimed at enabling seamless, secure financial data sharing across institutional boundaries. This work explored the regulatory, technical, and commercial dimensions of building interoperable financial services ecosystems — examining how standardised APIs, consent-driven data portability, and collaborative infrastructure can foster innovation, deepen financial inclusion, and create new value propositions for consumers and institutions alike.
                  </p>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-2 mt-10">Real Estate Democratisation & Digital Asset Structuring</h3>
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-4 block">Propty</span>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A consulting project exploring the intersection of property tokenisation, blockchain-enabled fractional ownership, and digital asset structuring as mechanisms for democratising access to real estate investment. The engagement investigated how distributed ledger technology, smart contract automation, and regulatory-compliant token issuance frameworks could lower barriers to entry for retail investors while enhancing liquidity and transparency within traditionally illiquid property markets.
                  </p>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-2 mt-10">SME Capital Access & Funding Ecosystem Development</h3>
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-4 block">Incubator Advisory & Support</span>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Advisory and support work with incubators and accelerators including Startup Engine and AIBx (an Ibadan-based incubator), focused on strengthening the institutional capacity of early-stage support ecosystems across Nigeria. This work addressed a critical gap in the entrepreneurial landscape: the persistent challenge of capital access for small and medium-sized enterprises (SMEs) operating in emerging markets. Engagements involved developing investment readiness frameworks, refining pitch methodologies, facilitating connections between founders and capital providers, and contributing to programmatic design that equips entrepreneurs with the financial literacy, governance structures, and strategic planning capabilities necessary to attract and deploy growth capital effectively.
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
