import { Card } from "@/components/ui/card";
import { QrCode } from "lucide-react";
import qrCodeWithPoints from "@/assets/IMG_5353.jpg";
import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Gamification = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background" id="features" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl" />
            <motion.img
              src={qrCodeWithPoints}
              alt="Afiyet QR Kod - Puan Sistemi"
              className="relative w-full h-auto rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <div className="space-y-6">
            <h2 className="section-title mb-6">
              QR Kod ile
              <span className="block mt-2">
                <span className="gradient-text">Puan Kazanın</span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Müşterileriniz restoranınızda QR kod okutarak otomatik olarak puan kazanır. Haftalık seri bonusları ile düzenli ziyaretlerde çift puan kazanımı sağlayın.
            </p>
            <Card className="p-6 glass-effect">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-3">QR Kod Okutma</h4>
                  <p className="text-muted-foreground">
                    Müşteriler uygulamadan QR kod oluşturur, restoranınızda okutarak anında puan kazanır. Her ziyarette otomatik puan kazanımı ile müşteri sadakatini artırın.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
