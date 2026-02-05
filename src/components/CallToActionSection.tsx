import { Button } from "@/components/ui/button";
import laptopImage from "@/assets/laptop.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="lg:py-10 relative">
      <div className="container mx-auto px-4">
        <div
          className="relative  rounded-2xl sm:p-10 lg:pl-40 "
          style={{
            background:
              "linear-gradient(to right, hsl(25, 95%, 20%) 0%, hsl(25, 95%, 53%) 50%, hsl(25, 95%, 20%) 100%)",
          }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute -left-10 -top-40  w-[500px] xl:w-[650px] drop-shadow-2xl"
          >
            <img src={laptopImage} alt="Laptop" className="w-full h-auto" />
          </motion.div>

          {/* Text + Button */}
          <div className="text-white space-y-4 sm:space-y-6 lg:pl-[28rem]">
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              We are here to support you in every step.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Let&apos;s schedule a quick call.
            </h2>
            <Button
              size="lg"
              className="bg-white text-[#9e2f0d] font-semibold px-6 py-4 sm:px-8 sm:py-6 rounded-lg hover:bg-gray-100"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us Today!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
