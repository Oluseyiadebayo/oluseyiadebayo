import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import ceoPortrait from "@/assets/ceo-portrait.png";
import techSaas from "@/assets/tech-saas.jpg";
import financialServices from "@/assets/financial-services.jpg";
import ecommerceRetail from "@/assets/ecommerce-retail.jpg";
import energyResources from "@/assets/energy-resources.jpg";

const stats = [
  { value: "$10M+", label: "Aggregate Capital Raised" },
  { value: "50+", label: "Clients Advised" },
  { value: "15+", label: "Years Experience" },
  { value: "6", label: "Industries Served" },
];

const services = [
  {
    title: "Financial Modeling & Structuring",
    description: "Build robust financial models, optimize capital structures, and develop frameworks that attract investors.",
  },
  {
    title: "Market Analysis & GTM Strategy",
    description: "Deep market research, competitive analysis, and go-to-market strategies for market leadership.",
  },
  {
    title: "Corporate Strategy & Advisory",
    description: "Strategic planning, business transformation, and executive advisory for complex challenges.",
  },
  {
    title: "Digital Transformation Strategy",
    description: "Leverage technology to streamline operations, enhance experience, and build advantages.",
  },
];

const practiceAreas = [
  { title: "Technology & SaaS", image: techSaas },
  { title: "Financial Services", image: financialServices },
  { title: "E-Commerce & Retail", image: ecommerceRetail },
  { title: "Energy & Resources", image: energyResources },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-wide pt-32 pb-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6"
            >
              Beyond the{" "}
              <span className="italic text-gold">Ordinary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 leading-relaxed mb-10"
            >
              Setting New Standards in Strategic Advisory
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/expertise" className="btn-line text-white hover:text-gold">
                LEARN MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Label & Heading */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">THE FIRM</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                  About Us
                </h2>
              </motion.div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  A strategic advisory firm with expertise across financial services, technology, e-commerce, and natural resources. We provide expert counsel and advisory services, delivering innovative solutions to our clients' most challenging business issues. At Oyinboade, our strength lies in a team of experienced advisors and operators, many of whom are recognized as leading practitioners in their fields.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strategic presence in Lagos, Nigeria, we are firmly rooted in the Nigerian and broader African economies. Through our robust network of partner firms, we journey with our clients across Africa, ensuring that wherever you go, from Nigeria to the rest of the continent, we are with you—delivering seamless, integrated solutions to navigate both local and international challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4">
                  A leading advisory firm in Africa
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  With a broad outlook, making us one of the few truly full-service advisory firms in Africa, we have developed mastery over a wide range of business matters that border the strategic and the transactional.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Stats */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center md:text-left"
                  >
                    <div className="stat-number text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                      {stat.value}
                    </div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-16">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4 block">OUR EXPERTISE</span>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                  Tailored Strategic Expertise for Your Success
                </h2>
                <Link to="/expertise" className="btn-line">
                  VIEW MORE
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
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

          {/* Practice Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-serif text-lg">{area.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CEO Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
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

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">LEADERSHIP</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Oluseyi Adebayo
              </h2>
              <p className="text-gold text-sm uppercase tracking-wider mb-6">
                Founder & Chief Executive Officer
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Oluseyi Adebayo is the Founder and CEO of Oyinboade Ltd, an advisory firm with global interests across financial services, technology, e-commerce, and natural resources. He leads a team of advisors and operators focused on helping individuals, businesses, and institutions raise capital, strengthen operations, and create sustainable long-term value.
              </p>
              <Link to="/our-people" className="btn-line">
                VIEW PROFILE
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 block">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Principal Consulting Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-border hover:border-gold transition-colors group"
              >
                <h3 className="text-xl font-serif text-foreground mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/expertise">
                View All Services
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Partner with Oyinboade and gain access to strategic insights, operational expertise, and a network that accelerates growth.
            </p>
            <Link to="/contact" className="btn-line text-white hover:text-gold">
              START THE CONVERSATION
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
