import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7, 
      x: 100,
      rotateY: -15,
      filter: "blur(15px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };
const navigate=useNavigate()

  return (
    <section className=" py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6 text-center sm:text-left">
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground"
                variants={itemVariants}
              >
                Welcome to AccRuvia
              </motion.p>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
                variants={itemVariants}
              >
                Your Trusted Partner for
                <br />
                all your <span className="text-primary">Accounting &</span>
                <motion.span
                  className="text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <br />
                <motion.span
                  className="text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Recruitment Solutions
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg  leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                At AccRuvia, we helps businesses run better by managing the
                financial and administrative tasks that often slow them
                down—accounting, payroll, tax, and support services. With
                operations across India we provide reliable support
                so you can focus on growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
                variants={buttonVariants}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Button
                    size="lg"
                    className="text-primary border-2 border-primary hover:text-white sm:text-lg font-bold px-6 sm:px-8 py-4 sm:py-6  bg-transparent     hover:bg-primary "
                    onClick={() => navigate("/contact-us")}
                  >
                    Get Started
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <a href="#services">
                    <Button
                      size="lg"
                      className="text-base sm:text-lg px-6 sm:px-8 font-bold py-4 sm:py-6 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      Explore Our Services
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="relative " variants={imageVariants}>
            <motion.img
              src={heroIllustration}
              alt="AccRuvia - Professional accounting and recruitment services"
              className="w-full h-auto rounded-2xl  "
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 0.8, 1.2, 1],
                opacity: [0.3, 0.7, 0.2, 0.6, 0.3],
                x: [0, 10, -5, 8, 0],
                y: [0, -5, 10, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.4, 0.7, 1.3, 1],
                opacity: [0.2, 0.6, 0.1, 0.5, 0.2],
                x: [0, -8, 12, -6, 0],
                y: [0, 8, -10, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-400/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.5, 0.5, 1.2, 1],
                opacity: [0.1, 0.4, 0.05, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
