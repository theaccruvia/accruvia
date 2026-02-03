import React, { useState } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: "Dhruv Shah",
      role: "Chief Executive Officer",
      description:
        "A distinguished professional with extensive experience in accounting and auditing, Dhruv Shah is driven by a vision of excellence and integrity. His comprehensive expertise in financial reporting, regulatory compliance, and audit oversight enables organizations to achieve operational transparency and sustainable financial growth in an ever-evolving business landscape.",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      image: "./src/assets/Lucky.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@company.com",
      },
      stats: { projects: "500+", experience: "15 Years", clients: "200+" },
    },
    {
      name: "Ritesh Patel",
      role: "Chief Financial Officer",
      description:
        "Ritesh Patel is a global Talent Acquisition leader with over 15 years of experience across the UAE, India, Europe, Africa, and the U.S. He has worked in cybersecurity, engineering, software, finance, real estate, and hospitality -helping companies hire better and build stronger teams. He designs recruitment strategies that fit the business. Sometimes that means building from scratch. Other times, it is about scaling what is already working.<br/>From executive search to full-time placements, Mr. Ritesh Patel brings clarity and strategy to every hiring challenge.",
      expertise: ["Financial Planning", "Risk Management", "M&A Strategy"],
      image: "./src/assets/Ritesh.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@company.com",
      },
      stats: { managed: "$2B+", experience: "12 Years", deals: "50+" },
    },
    {
      name: "Labdhi Shah",
      role: "Client Manager",
      description:
        "As a board member overseeing taxation, Labdhi Shah plays a key role in guiding clients through complex tax landscapes with clarity and precision. Her expertise spans tax planning, compliance management, and advisory services, helping businesses optimize their tax positions while maintaining full regulatory adherence.",
      expertise: ["Digital Innovation", "AI & ML", "Cloud Architecture"],
      image: "./src/assets/Labdhi.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@company.com",
      },
      stats: { products: "30+", experience: "10 Years", team: "100+" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="relative py-2 overflow-hidden mb-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative h-full"
            >
              <Card className="relative h-full flex flex-col overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm">
                <div className="relative p-8 flex flex-col h-full">
                  <div className="mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center mb-4 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-orange-500 mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-orange-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t">
                    {Object.entries(member.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <p className="font-bold text-orange-500">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 mt-auto">
                    <a href={member.social.linkedin}>
                      <Linkedin />
                    </a>
                    <a href={member.social.twitter}>
                      <Twitter />
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <Mail />
                    </a>
                  </div>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-orange-100/20 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
