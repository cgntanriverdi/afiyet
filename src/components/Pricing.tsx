import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Ücretsiz Başlangıç",
      price: "₺0",
      period: "Kalıcı Ücretsiz",
      features: [
        "Platformda listeleme",
        "Temel puan sistemi",
        "10 müşteriye kadar",
        "Temel raporlama"
      ],
      cta: "Başla",
      variant: "outline" as const
    },
    {
      name: "Standart",
      price: "₺2,000",
      period: "aylık",
      features: [
        "Sınırsız müşteri",
        "Detaylı analitikler",
        "Özel kampanyalar",
        "QR kod sistemi",
        "E-posta desteği",
        "Mobil uygulama entegrasyonu"
      ],
      cta: "Standart'ı Seç",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Premium",
      price: "₺5,000",
      period: "aylık",
      features: [
        "Standart'taki her şey",
        "AI destekli maskot",
        "Haritada öne çıkarılma",
        "A/B test araçları",
        "Rakip analizleri",
        "Öncelikli destek",
        "Özel entegrasyonlar"
      ],
      cta: "Premium'a Geç",
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-6">
            Restoranınız İçin <span className="gradient-text">Doğru Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            İşletmenizin büyüklüğüne göre esnek fiyatlandırma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 hover-lift relative ${
                plan.popular 
                  ? "border-2 border-accent shadow-2xl scale-105" 
                  : "glass-effect"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "₺0" && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                {plan.price === "₺0" && (
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] hover:opacity-90" 
                    : ""
                }`}
                variant={plan.variant}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
