import { Phone, Mail, Menu, X, Home, Briefcase, Info, Users as UsersIcon, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { StickyBanner } from "./ui/sticky-banner";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/#top", icon: Home },
    { name: "Services", href: "/#services", icon: Briefcase },
    { name: "About Us", href: "/#about", icon: Info },
    { name: "Our Team", href: "/#team", icon: UsersIcon },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Contact Bar */}

      {/* <div className="w-full flex  bg-gradient-to-br from-orange-50 to-orange-50  justify-center">
        <div
          className="bg-gradient-to-r from-[#ed2f0d] to-[#282b4e] text-white   py-2 rounded-b-2xl
         max-w-[86rem] w-full"
        >
          <div className="container  flex justify-start items-center text-xs sm:text-sm md:text-base lg:text-2xl  sm:gap-10 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3  ">
              <div className="p-2 rounded-sm border-2 border-white bg-cyan">
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6  "
                  color="white"
                  fill="white"
                />
              </div>
              <span className="font-bold text-lg">+91 9374437099</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 rounded-sm border-2 border-white bg-cyan">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <span className="font-bold text-lg">accruvia@gmail.com</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <StickyBanner>
        <header className="py-2 w-full bg-gradient-to-br from-orange-50 to-orange-50  shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 w-full">
              {/* Logo Area (Left) */}
              <div className="flex-shrink-0">
                <div 
                  className="flex items-center cursor-pointer" 
                  onClick={() => { navigate("/"); closeMenu(); }}
                >
                  <div className="w-[160px] sm:w-[240px] h-10 flex items-center justify-start">
                    <img src={logo} alt="Vertex Logo" className="h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation (Center/Right) */}
              <nav className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  <HashLink
                    key={item.name}
                    smooth
                    to={item.href}
                    className="text-foreground hover:text-primary font-medium transition-colors hover:underline hover:decoration-primary underline-offset-4"
                  >
                    {item.name}
                  </HashLink>
                ))}
                <Button
                  variant="accent"
                  size="sm"
                  className="bg-[#56b1b3]"
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </Button>
              </nav>

              {/* Mobile Menu Toggle (Right Box) */}
              <button 
                className="md:hidden flex items-center justify-center p-2.5 rounded-xl bg-white border border-gray-200 shadow-sm text-gray-700 hover:text-primary hover:border-orange-200 hover:bg-orange-50 transition-all z-50"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t overflow-hidden"
              >
                <div className="container mx-auto px-4 py-6 space-y-4">
                  {menuItems.map((item) => (
                    <HashLink
                      key={item.name}
                      smooth
                      to={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors p-2 rounded-lg hover:bg-orange-50"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      {item.name}
                    </HashLink>
                  ))}
                  <div className="pt-4 border-t">
                    <Button
                      variant="accent"
                      className="w-full bg-[#56b1b3] flex items-center justify-center gap-2 py-6 text-lg"
                      onClick={() => {
                        navigate("/contact-us");
                        closeMenu();
                      }}
                    >
                      <MessageSquare className="w-5 h-5" />
                      Contact Us
                    </Button>
                  </div>
                  
                  {/* Additional Mobile Info */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500 px-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 93744 37099</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500 px-2">
                      <Mail className="w-4 h-4" />
                      <span>info@theaccruvia.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </StickyBanner>
    </>
  );
};

export default Header;
