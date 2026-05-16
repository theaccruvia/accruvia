import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import AboutSection from "@/components/AboutSection";
import SoftwareSection from "@/components/SoftwareSection";
import TeamSection from "@/components/TeamSection";
import CallToActionSection from "@/components/CallToActionSection";

import { motion, Variants } from "framer-motion";

const Index = () => {
  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const heroVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <main>
        <motion.section
          id="top"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSection />
        </motion.section>

        <motion.section
          className="w-full flex justify-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <StatsSection />
        </motion.section>

        <motion.section
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ServicesSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <RecruitmentSection />
        </motion.section>

        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <SoftwareSection />
        </motion.section>

        <motion.section
          id="team"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <TeamSection />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <CallToActionSection />
        </motion.section>
      </main>
    </div>
  );
};

export default Index;