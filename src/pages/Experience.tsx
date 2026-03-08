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
    role: "Financial Services",
    description:
      "Contributed to initiatives related to digital transformation, institutional strategy, and operational improvement within one of Nigeria's leading financial institutions.",
  },
  {
    org: "Living Soul Group",
    role: "Director",
    description:
      "Serving as a director within a diversified organisation with interests across hospitality, education, real estate, and agriculture. Responsibilities include contributing to strategic thinking around business development, operational growth, and long-term sustainability across its operating sectors.",
  },
];

const areasOfInterest = [
  "Strategy and organisational development",
  "Venture ecosystems in emerging markets",
  "Capital allocation and investment decision-making",
  "Financial services transformation",
  "Technology-enabled business models",
  "SME growth and economic development",
];

const Experience = () => {
  return (
    <Layout>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
              Professional Experience & Work
            </h1>
          </div>
        </div>
      </section>

      {/* Professional Roles */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl font-serif text-foreground mb-10">
            Professional Roles
          </h2>
          <div className="space-y-0">
            {roles.map((item, i) => (
              <div
                key={i}
                className="py-8 border-t border-border last:border-b"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12 mb-3">
                  <h3 className="text-lg font-serif text-foreground md:w-56 shrink-0">
                    {item.org}
                  </h3>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {item.role}
                  </span>
                </div>
                <div className="md:pl-[calc(14rem+3rem)]">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory & Ecosystem Work */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-serif text-foreground mb-6">
              Advisory & Ecosystem Work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Oluseyi has worked with founders, incubators, accelerators, and venture ecosystems supporting early-stage businesses navigating growth, fundraising, and operational challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This work has involved:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                Strategy discussions with founders
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                Operational problem-solving
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                Investment readiness preparation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 bg-muted-foreground rounded-full shrink-0" />
                Exposure to venture capital thinking
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-serif text-foreground mb-6">
              Selected Projects
            </h2>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-serif text-foreground mb-3">Refurnish</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A refurbishment initiative focused on extending the lifecycle of furniture through restoration and resale.
                </p>
                <p>
                  The project involved operational coordination, supplier relationships, service design, and customer management.
                </p>
                <p>
                  This experience strengthened leadership, execution discipline, and operational problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl font-serif text-foreground mb-8">
            Areas of Interest
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {areasOfInterest.map((area) => (
              <p
                key={area}
                className="text-muted-foreground py-3 border-b border-border"
              >
                {area}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
