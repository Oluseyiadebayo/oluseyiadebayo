import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll respond shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            <span className="section-label mb-4 block text-white/60">CONNECT</span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Contact
            </h1>
            <p className="text-white/70 max-w-2xl">
              For professional conversations, collaborations, or speaking engagements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left — LinkedIn & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="section-label mb-4 block">CONNECT</span>
              <h2 className="text-2xl font-serif text-foreground mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The best way to reach me is via LinkedIn. I'm open to conversations around strategy, advisory work, venture ecosystems, and institutional development.
              </p>

              <a
                href="https://www.linkedin.com/in/oluseyi-adebayo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors mb-8"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>

              <div className="mt-8 p-6 border border-border bg-secondary/30">
                <h3 className="font-serif text-foreground mb-2">
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  I aim to respond to all messages within 48 hours. For time-sensitive matters, please indicate so in your subject line.
                </p>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-8 lg:p-12 border border-border bg-secondary/30">
                <h2 className="text-2xl font-serif text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Or use the form below and I'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        required
                        className="w-full px-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      required
                      className="w-full px-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
