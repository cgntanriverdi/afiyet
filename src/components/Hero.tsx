import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(14_88%_55%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(25_95%_53%_/_0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-accent">
                Dijital Sadakat Devrimi
              </span>
            </div>
            
            <h1 className="hero-text text-balance">
              Her Restoran İçin
              <span className="block gradient-text">Tek Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance">
              McDonald's'ın kendi uygulamasındaki puan sistemini TÜM restoranlar için 
              tek bir platformda toplayan evrensel sadakat uygulaması.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] hover:opacity-90 transition-all hover:scale-105"
              >
                Hemen İndir
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
              >
                Daha Fazla Bilgi
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">200K+</div>
                <div className="text-sm text-muted-foreground">Restoran</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">5M+</div>
                <div className="text-sm text-muted-foreground">Kullanıcı</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold">93.8%</div>
                <div className="text-sm text-muted-foreground">Mobil</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] to-[hsl(25_95%_53%)] blur-3xl opacity-20 animate-pulse" />
            <img 
              src={heroPhone} 
              alt="Afiyet App" 
              className="relative w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
