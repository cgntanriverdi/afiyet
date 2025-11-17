import { motion } from "framer-motion";
import { easing } from "@/lib/animations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full animate-gradient-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(14 88% 55% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full animate-gradient-pulse-delayed"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.2), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full animate-gradient-pulse-slow"
        style={{
          background: 'radial-gradient(circle, hsl(35 90% 60% / 0.15), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="text-center space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easing.apple }}
        >
          <h1 className="hero-text text-[hsl(14_88%_55%)]">
            Afiyet
          </h1>

          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Müşteriler Artık Sizin.
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Online sipariş platformlarına ödediğiniz yüksek komisyonları sonlandırın. QR kod ve kampanya sistemiyle müşterilerinizi doğrudan restoranınıza yönlendirin.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
