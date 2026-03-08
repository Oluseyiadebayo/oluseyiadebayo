import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Thoughts", path: "/thoughts" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="text-xl font-serif font-medium tracking-tight">
                OLUSEYI ADEBAYO
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Strategy and advisory professional working across consulting, financial services, and venture ecosystems.
            </p>
            <a
              href="https://www.linkedin.com/in/oluseyi-adebayo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-2 text-white/60 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
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

          {/* Connect Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/in/oluseyi-adebayo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-gold transition-colors block mb-3"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Oluseyi Adebayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
