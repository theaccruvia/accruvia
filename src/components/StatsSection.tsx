import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const stats = [
    {
      number: 5,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      number: 15,
      suffix: "+",
      label: "Industry Served",
    },
    {
      number: 200,
      suffix: "+",
      label: "Satisfied Clients",
    },
    {
      number: 95,
      suffix: "%",
      label: "Clients Retention Rate",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  const CounterAnimation = ({
    end,
    suffix,
    duration = 2,
  }: {
    end: number;
    suffix: string;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }, [isVisible, end]);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <motion.div
        id={`counter-${end}`}
        className="text-4xl lg:text-5xl font-bold text-white mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {count}
        {suffix}
      </motion.div>
    );
  };

  return (
    <motion.section
      className="py-10 rounded-[25px] w-11/12 overflow-hidden "
      style={{
        background:
          "linear-gradient(to right, hsl(25, 95%, 20%) 0%, hsl(25, 95%, 53%) 50%, hsl(25, 95%, 20%) 100%)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className={`w-1 h-20 absolute bg-transparent ${index==0?"lg:bg-transparent":"lg:bg-white "}  rounded-sm animate-none `}
              ></div>
              <CounterAnimation
                end={stat.number}
                suffix={stat.suffix}
                duration={2 + index * 0.2}
              />
              <motion.div
                className="text-white/90 font-medium text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
