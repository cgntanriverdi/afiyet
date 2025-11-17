import { motion, useScroll, useTransform } from "framer-motion";
import { easing, heroReveal, heroTextReveal } from "@/lib/animations";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects for different layers
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with scroll parallax */}
      <motion.div
        className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
        style={{
          backgroundSize: '200% 200%',
          opacity: orbOpacity,
        }}
      />

      {/* Animated gradient orbs with scroll-driven opacity */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full animate-gradient-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
          opacity: orbOpacity,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-gradient-pulse-delayed"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
          opacity: orbOpacity,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full animate-gradient-pulse-slow"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)',
          filter: 'blur(100px)',
          opacity: orbOpacity,
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto"
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
          }}
        >
          {/* Hero title with delayed reveal */}
          <motion.h1
            className="hero-text text-[hsl(14_88%_55%)]"
            initial="hidden"
            animate="visible"
            variants={heroReveal}
          >
            Afiyet
          </motion.h1>

          {/* Main headline with blur reveal effect */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
            transition={{ delay: 0.3 }}
          >
            Müşteriler Artık Sizin.
          </motion.p>

          {/* Description with staggered reveal */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance"
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
            transition={{ delay: 0.6 }}
          >
            Online sipariş platformlarına ödediğiniz yüksek komisyonları sonlandırın. QR kod ve kampanya sistemiyle müşterilerinizi doğrudan restoranınıza yönlendirin.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
