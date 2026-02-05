import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Globe,
  Clock,
  Award,
  Users,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { RECRUITMENT, SERVICES } from "@/const";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/#about", icon: Users },
      { name: "Our Team", href: "/#team", icon: Award },
      { name: "Careers", href: "/#services", badge: "Hiring" },
      { name: "Contact", href: "/contact-us", icon: Mail },
    ],
    services: [
      {
        name: "Accounting & Bookkeeping",
        href: "services",
        data: SERVICES[0].moreData,
      },
      {
        name: "Payroll Services",
        href: "services",
        data: SERVICES[1].moreData,
      },
      { name: "Tax Services", href: "services", data: SERVICES[3].moreData },
      {
        name: "Administrative Support",
        href: "services",
        data: SERVICES[4].moreData,
      },
      { name: "Audit Support", href: "services", data: SERVICES[2].moreData },
      {
        name: "Outsourcing Services",
        href: "services",
        data: SERVICES[5].moreData,
      },
    ],
    hiring: [
      {
        name: "EOR - Employee on Record",
        href: "services",
        data: RECRUITMENT[0].moreData,
      },
      {
        name: "Permanent Hiring",
        href: "services",
        data: RECRUITMENT[1].moreData,
      },
      {
        name: "Contract Staffing",
        href: "services",
        data: RECRUITMENT[2].moreData,
      },
      {
        name: "Executive Search (CXOs)",
        href: "services",
        data: RECRUITMENT[3].moreData,
      },
    ],
    resources: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Sitemap", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      color: "from-blue-500 to-blue-600",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "#",
      color: "from-sky-400 to-sky-500",
      label: "Twitter",
    },
    {
      icon: Facebook,
      href: "#",
      color: "from-blue-600 to-blue-700",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-purple-600",
      label: "Instagram",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Team Members", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  return (
    <footer className="relative mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10  border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8  border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-3xl  font-bold bg-clip-text text-transparent  ">
              <img src={logo} alt="" className="bg-white rounded-lg px-2" />
            </div>
            <p className="text-sm text-gray-400">
              Professional Excellence, Delivered
            </p>
            <p className="text-gray-300">
              Empowering businesses with comprehensive accounting, bookkeeping,
              and recruitment solutions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold"
              >
                {subscribed ? "✓ Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((s, i) => (
                <li key={i} className="hover:text-orange-400 cursor-pointer ">
                  <Link to={s.href} state={{ service: JSON.stringify(s.data) }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hiring Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.hiring.map((s, i) => (
                <li key={i} className="hover:text-orange-400 cursor-pointer ">
                  <Link to={s.href} state={{ service: JSON.stringify(s.data) }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((c, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-center hover:text-orange-400 cursor-pointer "
                >
                  <a href={c.href}>
                    {c.name}
                    {c.badge && (
                      <span className="px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full cursor-pointer ">
                        {c.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3 cursor-pointer ">
                <Phone className="w-4 h-4 text-orange-400" /> +97 155 773 6808(Dubai)
              </li>
              <li className="flex items-center gap-3 cursor-pointer ">
                <Phone className="w-4 h-4 text-orange-400" /> +91 9374437099(India)
              </li>
              <li className="flex items-center gap-3 cursor-pointer ">
                <Mail className="w-4 h-4 text-orange-400" /> info@theaccruvia.com
              </li>
              <li className="flex items-center gap-3 cursor-pointer ">
                <MapPin className="w-4 h-4 text-orange-400" /> Dubai & India
                </li>

              <li className="flex items-center gap-3 cursor-pointer ">
                <Globe className="w-4 h-4 text-orange-400" />{" "}
                <a
                  href="https://www.theaccruvia.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.theaccruvia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t  border-gray-700/50 bg-gray-800/30 backdrop-blur-sm py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} AccRuvia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
