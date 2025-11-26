import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Stellar Service Co.</h3>
            <p className="text-sm opacity-90">
              Data-driven digital transformation for mid-sized enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Digital Strategy</li>
              <li className="opacity-90">Process Optimization</li>
              <li className="opacity-90">Data Analytics</li>
              <li className="opacity-90">Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <a href="mailto:info@stellarservice.co" className="hover:text-accent transition-colors">
                  info@stellarservice.co
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} The Stellar Service Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
