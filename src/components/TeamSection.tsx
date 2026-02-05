import React, { useState } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Lucky from "@/assets/Lucky.jpeg";
import Ritesh from "@/assets/Ritesh.jpeg";
import Labdhi from "@/assets/Labdhi.jpeg";

const TeamPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: "Dhruv Shah",
      role: "Founder",
      description:
        "A distinguished professional with extensive experience in accounting and auditing, Dhruv Shah is driven by a vision of excellence and integrity. His comprehensive expertise in financial reporting, regulatory compliance, and audit oversight enables organizations to achieve operational transparency and sustainable financial growth in an ever-evolving business landscape.",
      image: Lucky,
      social: {
        linkedin: "https://www.linkedin.com/in/dhruv-shah-245195bb",
        email: "theaccruvia@gmail.com",
      },
    },
    // {
    //   name: "Ritesh Patel",
    //   role: "Co-Founder",
    //   description:
    //     "Ritesh Patel is a global Talent Acquisition leader with over 15 years of experience across the UAE, India, Europe, Africa, and the U.S. He has worked in cybersecurity, engineering, software, finance, real estate, and hospitality -helping companies hire better and build stronger teams. He designs recruitment strategies that fit the business. Sometimes that means building from scratch. Other times, it is about scaling what is already working. From executive search to full-time placements, Mr. Ritesh Patel brings clarity and strategy to every hiring challenge.",
    //   image: Ritesh,
    //   social: {
    //     linkedin: "https://www.linkedin.com/in/tbbt-riteshpatel/",
    //     email: "theaccruvia@gmail.com",
    //   },
    // },
    {
      name: "Labdhi Shah",
      role: "Client Manager",
      description:
        "As a board member overseeing taxation, Labdhi Shah plays a key role in guiding clients through complex tax landscapes with clarity and precision. Her expertise spans tax planning, compliance management, and advisory services, helping businesses optimize their tax positions while maintaining full regulatory adherence.",
      image: Labdhi,
      social: {
        linkedin: "https://www.linkedin.com/in/ca-labdhi-shah-6aa874103",
        email: "theaccruvia@gmail.com",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <main className="min-h-screen bg-orange-50">
      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Meet Our <span className="text-orange-500">Team</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
          A team of experienced professionals dedicated to excellence,
          integrity, and long-term success.
        </p>
      </section>

      {/* Team Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            // className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto" for three people
            className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto"
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
              >
                <Card className="h-full flex flex-col p-8 shadow-lg bg-white relative overflow-hidden">
                  {/* Image */}
                  <div className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-orange-500 mt-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mt-4 px-2">
                      {member.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-24 sm:w-40 md:w-56 h-px bg-orange-400 mx-auto my-6" />

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4">
                    <a href={member.social.linkedin}>
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <a href={`mailto:${member.social.email}`}>
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>

                  {/* Hover Overlay */}
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
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
