import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
const iconMap = {
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
import heroImage from "@/assets/1.svg";

import Carousel from "./Carosel";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MoreData, Offering } from "@/const";
import { useEffect } from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  image:string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description,image }) => {
  return (
    <section className="bg-hero-bg pt-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ">
          <div className="space-y-6 md:space-y-8 lg:space-y-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-gray max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            <div className="mt-4 md:mt-6 flex justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src={image}
              alt="Professional accountant working with documents and calculator"
              className="w-full h-full rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = ({ services }: { services: Offering[] }) => {
  return (
    <section className="py-16 lg:py-2 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 mb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            //@ts-ignore
            const Icon = iconMap[service.icon]  ;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group transition-all duration-300 border border-primary/30 shadow-sm hover:shadow-xl rounded-xl bg-white">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="w-8 h-8 text-orange-500" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {service.service}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text:lg leading-relaxed flex-grow">
                      {service.what_it_covers}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ServicePage = () => {
  const location = useLocation();
  const serviceData: MoreData = JSON.parse(location.state.service);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceData]);
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <HeroSection
        title={serviceData.title}
        description={serviceData.description}
        image={serviceData.image}
      />
      <ServicesGrid services={serviceData.offerings} />

      <div className=" xl:flex items-center justify-center hidden flex-col  bg-gradient-to-br from-orange-50 via-white to-orange-100  p-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why AccRuvia
          </h2>
          <h2 className="text-sm  text-primary  rounded-full p-2  ">
            More than services — we are the team that keeps your back office
            moving. Behind every smooth operation of your business is a partner
            like us.
          </h2>
        </div>
        <div className="container w-[90%] h-[60vh] overflow-hidden  ">
          <Carousel />
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default ServicePage;
