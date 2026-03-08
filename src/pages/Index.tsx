import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-foreground leading-tight mb-6">
              Strategy, Technology, Capital, and Systems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Understanding how organisations grow, and create long-term value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                View Experience
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/oluseyi-adebayo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <hr className="border-border" />
      </div>

      {/* Intro */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Oluseyi Adebayo is a strategy and advisory professional whose work sits at the intersection of business strategy, operations, and capital allocation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              He works across consulting, financial services, and venture ecosystems, with a focus on helping organisations and founders navigate complexity, growth, and long-term sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
              About
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Oluseyi Adebayo is a strategy and advisory professional with interests spanning financial services, technology, venture ecosystems, and institutional development across emerging markets.
              </p>
              <p>
                His work focuses on understanding how organisations deploy capital, structure operations, and build sustainable growth strategies.
              </p>
              <p>
                Oluseyi has worked across consulting, banking, and early-stage venture environments, including roles at PwC and Stanbic IBTC Bank, where he contributed to strategy development, digital transformation initiatives, and market expansion efforts.
              </p>
              <p>
                Beyond corporate engagements, he has worked closely with founders, accelerators, and venture ecosystems supporting early-stage businesses with strategic thinking, operational development, and investment readiness.
              </p>
              <p>
                He also serves as a Director at Living Soul Group, a diversified organisation with interests in hospitality, education, real estate, and agriculture.
              </p>
              <p>
                His broader interests include how capital, institutions, and market systems shape economic opportunity in emerging markets, particularly across Africa.
              </p>
              <p>
                Oluseyi holds a Bachelor's degree in Mechanical Engineering from Covenant University and an MBA focused on Finance and Investment from Ahmadu Bello University. He is also a VC Lab Fellow, part of a global community focused on developing the next generation of venture capital investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
            Areas of Focus
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
            {[
              "Strategy and organisational development",
              "Capital allocation and investment",
              "Venture ecosystems in emerging markets",
              "Financial services transformation",
              "Technology-enabled business models",
              "Institutional development",
            ].map((area) => (
              <p key={area} className="text-muted-foreground py-2 border-b border-border">
                {area}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm border-t border-border">
        <div className="container-wide">
          <div className="max-w-xl">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground mb-6">
              For professional conversations, collaborations, or speaking engagements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Contact
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
