import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    details: ["Victoria Island", "Lagos, Nigeria"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@oyinboade.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 (0) 800 000 0000"],
  },
];

const faqs = [
  {
    question: "What types of organisations do you work with?",
    answer:
      "We primarily work with early-to-growth stage organisations and startups across technology, e-commerce, financial services, energy, healthcare, and education sectors. However, we also engage with established enterprises seeking strategic transformation or expansion.",
  },
  {
    question: "How does your engagement process work?",
    answer:
      "We begin with a discovery conversation to understand your challenges and objectives. From there, we develop a tailored engagement scope, which may range from focused advisory on specific issues to comprehensive strategic partnerships. Our engagements typically span project-based work, retained advisory, or board-level support.",
  },
  {
    question: "What is your typical engagement duration?",
    answer:
      "Engagement duration varies based on scope and complexity. Project-based work typically runs 4-12 weeks, while retained advisory relationships are usually structured on a quarterly or annual basis. We're flexible and design engagements to match your specific needs.",
  },
  {
    question: "Do you take equity positions in client companies?",
    answer:
      "In select cases, we may consider equity-based arrangements, particularly with early-stage companies where cash resources are constrained. These arrangements are evaluated on a case-by-case basis and depend on strategic fit and mutual value creation potential.",
  },
  {
    question: "Can you help with fundraising?",
    answer:
      "Yes, fundraising support is a core part of our advisory services. We help with financial modeling, investor materials, pitch preparation, and can facilitate introductions to our network of investors. We've supported startups in raising over $10 million collectively.",
  },
  {
    question: "Do you work with companies outside Nigeria?",
    answer:
      "Absolutely. While we're based in Lagos, we work with organisations across Africa and globally. Many of our engagements involve companies expanding into new markets or seeking cross-border expertise.",
  },
  {
    question: "What makes Oyinboade different from other consulting firms?",
    answer:
      "We're not just advisors—we're operators who have been in your shoes. Our team has hands-on experience building and scaling businesses, which informs our practical, execution-focused approach. We don't just provide recommendations; we help you implement them.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the contact form on this page or send us an email at hello@oyinboade.com. We'll schedule an initial conversation to understand your needs and explore how we might work together.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24-48 business hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">CONTACT US</span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Whether you're raising capital, expanding into new markets, or seeking operational improvements—we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="p-8 lg:p-12 border border-border bg-secondary/30">
                <h2 className="text-2xl font-serif text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll respond within 24-48 business hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-border bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs uppercase tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs uppercase tracking-wider">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="border-border bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-xs uppercase tracking-wider">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-wider">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or challenge..."
                      rows={6}
                      required
                      className="border-border bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <h2 className="text-2xl font-serif text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border border-border flex items-center justify-center text-gold">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 border border-border bg-secondary/30">
                <h3 className="font-serif text-foreground mb-2">
                  Response Time
                </h3>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 business hours.
                  For urgent matters, please indicate so in your message subject.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about working with Oyinboade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Visit Our Office
            </h2>
            <p className="text-white/70 mb-4">
              Victoria Island, Lagos, Nigeria
            </p>
            <p className="text-white/50 text-sm">
              By appointment only
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
