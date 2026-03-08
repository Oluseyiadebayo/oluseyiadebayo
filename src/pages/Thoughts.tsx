import { Layout } from "@/components/layout/Layout";

const essays = [
  {
    title: "Venture Capital Realities in Africa",
    summary:
      "The narrative around venture capital in Africa often outpaces the structural realities. Understanding the gap between capital availability and deployment is critical for founders and investors alike.",
  },
  {
    title: "Why Startups Fail After Raising Capital",
    summary:
      "Capital solves certain problems. It creates others. Many early-stage companies collapse not from lack of funding, but from premature scaling, misaligned incentives, and weak operational foundations.",
  },
  {
    title: "Capital Allocation in Emerging Markets",
    summary:
      "How capital flows through emerging economies — through institutions, markets, and informal networks — shapes what gets built and who benefits. The structures matter as much as the amounts.",
  },
  {
    title: "Fintechs Becoming Banks",
    summary:
      "As fintech companies mature, many find themselves pulled toward becoming the institutions they once sought to disrupt. The regulatory, operational, and strategic implications are profound.",
  },
  {
    title: "Strategy Versus Execution in Startups",
    summary:
      "In early-stage environments, the line between strategy and execution blurs. The best founders don't separate thinking from doing — they iterate between both with discipline.",
  },
  {
    title: "SME Growth Constraints in Emerging Economies",
    summary:
      "Small and medium enterprises face structural barriers that extend beyond access to finance — including regulatory complexity, talent gaps, and market fragmentation.",
  },
];

const Thoughts = () => {
  return (
    <Layout>
      <section className="pt-32 md:pt-40 pb-8 md:pb-12">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
              Thoughts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Occasional reflections on strategy, capital, and markets in emerging economies.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            {essays.map((essay, i) => (
              <article
                key={i}
                className="py-8 border-t border-border last:border-b"
              >
                <h2 className="text-xl font-serif text-foreground mb-3">
                  {essay.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {essay.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Thoughts;
