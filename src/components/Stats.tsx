import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Store, Smartphone } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Store,
      value: "200,000+",
      label: "Restoran",
      description: "Türkiye'de potansiyel partner",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      value: "5M+",
      label: "İndirme",
      description: "McDonald's uygulaması",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      value: "10M+",
      label: "Kullanıcı",
      description: "Yemeksepeti platformu",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      value: "93.8%",
      label: "Mobil",
      description: "Akıllı telefon penetrasyonu",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const timeline = [
    {
      period: "0-3 Ay",
      title: "Ankara Pilot",
      restaurants: "50",
      users: "5,000"
    },
    {
      period: "3-9 Ay",
      title: "Büyük Şehirler",
      restaurants: "500",
      users: "50,000"
    },
    {
      period: "9-12 Ay",
      title: "Türkiye Geneli",
      restaurants: "2,000",
      users: "200,000"
    }
  ];

  return (
    <section className="py-32 bg-background" id="stats">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-6">
            Pazar <span className="gradient-text">Hazır</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dijital restoran kültürü oturmuş, altyapı mevcut
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover-lift glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mx-auto mb-4 flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">İlk 12 Ay Hedefleri</h3>
          <p className="text-lg text-muted-foreground">Kontrollü büyüme stratejisi</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {timeline.map((phase, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift glass-effect relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(14_88%_55%_/_0.2)] to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="text-sm font-semibold text-accent mb-2">{phase.period}</div>
                <h4 className="text-2xl font-bold mb-6">{phase.title}</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold gradient-text">{phase.restaurants}</div>
                    <div className="text-sm text-muted-foreground">Partner Restoran</div>
                  </div>
                  
                  <div className="h-px bg-border" />
                  
                  <div>
                    <div className="text-3xl font-bold gradient-text">{phase.users}</div>
                    <div className="text-sm text-muted-foreground">Aktif Kullanıcı</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
