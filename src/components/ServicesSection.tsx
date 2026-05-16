import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "@/const";

import {
  Calculator,
  Users,
  FileText,
  Headphones,
  Search,
  UserCheck,
  Globe,
  Briefcase,
  ClipboardList,
  UserCog,
  Landmark,
  SquareLibrary,
  DollarSign,
  Receipt,
  FileCheck,
  Building,
  Folder,
  Calendar,
  MessageSquare,
  FileBarChart,
  Settings,
  Heart,
  ShieldCheck,
  UserPlus,
  Cpu,
  Factory,
  Brain,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  Users,
  FileText,
  Headphones,
  Search,
  UserCheck,
  Globe,
  Briefcase,
  ClipboardList,
  UserCog,
  Landmark,
  SquareLibrary,
  DollarSign,
  Receipt,
  FileCheck,
  Building,
  Folder,
  Calendar,
  MessageSquare,
  FileBarChart,
  Settings,
  Heart,
  ShieldCheck,
  UserPlus,
  Cpu,
  Factory,
  Brain,
};

const ServicesSection = () => {
  const navigate = useNavigate();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getCardVariants = (index: number): Variants => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  });

  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Explore Our Services
          </span>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="text-primary">
              Professional Services
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={index}
                variants={getCardVariants(index)}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 2 : -2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                style={{ perspective: "1000px" }}
              >
                <Card className="group transition-all duration-500 border-0 shadow-md hover:bg-primary hover:shadow-2xl h-full overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#9e2f0d]/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <CardHeader className="pb-4 relative z-10">
                    <motion.div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white transition-all duration-500 relative overflow-hidden`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        },

                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.2 },
                        }}
                      />

                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Icon className="w-8 h-8 text-white group-hover:text-[#9e2f0d] relative z-10" />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="group-hover:text-white transition-all duration-300"
                    >
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    <motion.div
                      whileHover={{
                        x: 1,
                        transition: {
                          duration: 0.2,
                          delay: 0.1,
                        },
                      }}
                    >
                      <CardDescription className="group-hover:text-white leading-relaxed transition-all duration-300">
                        {service.description}
                      </CardDescription>
                    </motion.div>

                    {service.learnMore && (
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          x: 1,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          },

                        }}
                        whileTap={{
                          scale: 0.95,
                          transition: { duration: 0.1 },
                        }}
                      >
                        <Button
                          className="w-full py-6 bg-cyan flex justify-start items-center font-bold lg:text-xl border border-transparent group-hover:border-white group-hover:bg-white/40 text-start transition-all duration-500 text-white relative overflow-hidden"
                          onClick={() =>
                            navigate("/services", {
                              state: {
                                service: JSON.stringify(service.moreData),
                              },
                            })
                          }
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{
                              x: "0%",
                              transition: { duration: 0.3 },
                            }}
                          />
                          <span className="relative z-10">
                            Learn More {">>>"}
                          </span>
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;