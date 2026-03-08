import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Our People", path: "/our-people" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-serif">Sign Up For Our Newsletter</h3>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 md:w-80 px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
              />
              <button className="px-6 py-3 bg-white/10 hover:bg-gold hover:text-navy-deep transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-serif font-medium tracking-tight">
                OYINBOADE
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              For more information, please contact us at:
            </p>
            <div className="flex items-center gap-4 mb-8">
              <a
                href="#"
                className="p-2 text-white/60 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/oluseyi-adebayo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/60 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Location Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Lagos
            </h4>
            <address className="text-white/60 text-sm not-italic leading-relaxed">
              Victoria Island<br />
              Lagos, Nigeria
            </address>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:hello@oyinboade.com"
                className="block text-white/60 hover:text-gold transition-colors"
              >
                hello@oyinboade.com
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Oyinboade Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/contact"
              className="text-sm text-white/40 hover:text-gold transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/40 hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/40 hover:text-gold transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
