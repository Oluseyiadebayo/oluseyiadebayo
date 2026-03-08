import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import expertiseHero from "@/assets/expertise-hero.jpg";

const services = [
  {
    title: "Financial Modeling & Structuring",
    description:
      "We build comprehensive financial models that go beyond spreadsheets—creating frameworks that tell your business story, support fundraising efforts, and guide strategic decisions.",
    features: [
      "Three-statement financial models",
      "Scenario analysis & stress testing",
      "Capital structure optimization",
      "Investment memorandum development",
      "Due diligence support",
    ],
  },
  {
    title: "Market Analysis & GTM Strategy",
    description:
      "Deep market research and competitive intelligence that positions your business for market leadership. We develop go-to-market strategies that are both ambitious and executable.",
    features: [
      "Market sizing & opportunity analysis",
      "Competitive landscape mapping",
      "Customer segmentation",
      "Channel strategy development",
      "Pricing optimization",
    ],
  },
  {
    title: "Corporate Strategy & Advisory",
    description:
      "Strategic planning and executive advisory services that help leadership teams navigate complex business challenges and position organisations for sustainable growth.",
    features: [
      "Strategic planning & roadmapping",
      "M&A advisory & transaction support",
      "Organisational design",
      "Board advisory services",
      "Executive coaching & support",
    ],
  },
  {
    title: "Financial Modeling & Unit Economics",
    description:
      "Understanding your unit economics is critical to sustainable growth. We help you identify and optimize the metrics that matter most to your business.",
    features: [
      "Customer acquisition cost (CAC) analysis",
      "Lifetime value (LTV) optimization",
      "Cohort analysis & retention modeling",
      "Revenue forecasting",
      "Burn rate & runway planning",
    ],
  },
  {
    title: "Digital Transformation Strategy",
    description:
      "Leverage technology to streamline operations, enhance customer experience, and build competitive advantages that compound over time.",
    features: [
      "Technology stack assessment",
      "Process automation strategy",
      "Digital product development advisory",
      "Data & analytics strategy",
      "Change management support",
    ],
  },
  {
    title: "Operational Excellence",
    description:
      "We help organisations build robust operational frameworks that scale efficiently while maintaining quality and control.",
    features: [
      "Process optimization & redesign",
      "KPI framework development",
      "Quality management systems",
      "Supply chain optimization",
      "Performance management",
    ],
  },
];

const approach = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin with deep listening—understanding your business, challenges, aspirations, and the context in which you operate.",
  },
  {
    step: "02",
    title: "Analysis",
    description:
      "Rigorous analysis of your market, operations, and financial position to identify opportunities and challenges.",
  },
  {
    step: "03",
    title: "Strategy",
    description:
      "Development of tailored strategies and actionable recommendations aligned with your goals and resources.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Hands-on support in implementing recommendations, with ongoing advisory to ensure successful outcomes.",
  },
];

export default function Expertise() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={expertiseHero}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-transparent" />
        </div>

        <div className="relative container-wide pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
              Strategic Advisory for{" "}
              <span className="italic text-gold">Ambitious Organisations</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We partner with early-to-growth stage organisations across industries to solve complex business challenges, raise capital, and build sustainable competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">OUR EXPERTISE</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  Tailored Strategic Expertise for Your Success
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
                At Oyinboade, we work closely with you to provide strategic guidance, drawing on years of experience in Africa's growing economy. Our team's deep understanding of key industries ensures we can navigate the complexities of your business challenges, offering practical, actionable solutions aligned with your objectives.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 block">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              How We Help
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-10 p-8 lg:p-12 bg-background border border-border"
              >
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-[0.15em] mb-4">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-gold mt-0.5 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 block">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-serif text-gold/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-serif text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you overcome challenges and achieve your strategic objectives.
            </p>
            <Link to="/contact" className="btn-line text-white hover:text-gold">
              SCHEDULE A CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
