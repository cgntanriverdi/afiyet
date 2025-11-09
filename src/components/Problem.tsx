import { Card } from "@/components/ui/card";
import { X, Smartphone, TrendingDown, HelpCircle } from "lucide-react";

export const Problem = () => {
  const userProblems = [
    {
      icon: Smartphone,
      title: "20 farklı restoran = 20 farklı uygulama",
      description: "Her restoran için ayrı uygulama indirmek zorunda kalıyorsunuz"
    },
    {
      icon: X,
      title: "Küçük restoranların sadakat programı yok",
      description: "Sadece büyük zincirler müşteri sadakati oluşturabiliyor"
    },
    {
      icon: HelpCircle,
      title: "Puanları takip edemiyorum",
      description: "Hangi restoranda kaç puanınız olduğunu hatırlamak imkansız"
    },
    {
      icon: TrendingDown,
      title: "Yeni restoran keşfetmek için teşvik yok",
      description: "Farklı mekanları denemeniz için bir motivasyon sunulmuyor"
    }
  ];

  const restaurantProblems = [
    {
      title: "Uygulama geliştirmek çok pahalı",
      stat: "500K+ TL",
      description: "Kendi sadakat uygulaması geliştirmek küçük işletmeler için ulaşılmaz"
    },
    {
      title: "Müşteri verisi toplayamıyorlar",
      stat: "0 Data",
      description: "Müşterilerinizi tanımak ve analiz etmek mümkün değil"
    },
    {
      title: "Devlerle rekabet edemiyorlar",
      stat: "McDonald's",
      description: "Starbucks, McDonald's gibi zincirlerle teknolojide yarışamıyorlar"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="section-title mb-6">
            Sorun <span className="gradient-text">Büyük</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hem kullanıcılar hem de restoranlar için dijital sadakat ekosistemi parçalanmış durumda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6 animate-slide-right">
            <h3 className="text-3xl font-bold mb-8">Kullanıcılar İçin</h3>
            {userProblems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6 animate-slide-left">
            <h3 className="text-3xl font-bold mb-8">Restoranlar İçin</h3>
            {restaurantProblems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">{problem.stat}</div>
                  <h4 className="text-xl font-semibold mb-3">{problem.title}</h4>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
