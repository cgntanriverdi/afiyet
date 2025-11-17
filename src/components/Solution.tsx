import { QrCode, Search } from "lucide-react";
import qrCodeScreen from "@/assets/IMG_5353.jpg";
import restaurantList from "@/assets/IMG_5355.jpg";
import restaurantPanel from "@/assets/IMG_5354.jpg";
import couponVerification from "@/assets/IMG_5356.jpg";
import { motion } from "framer-motion";

export const Solution = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="how-it-works">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 via-orange-50/30 to-red-50/50" />

      {/* Static gradient orb */}
      <div
        className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(25 95% 53% / 0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">
            Nasıl Çalışır?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Müşteriler uygulamayı kullanarak restoranlarınızı keşfeder ve kampanyalarınızdan faydalanır
          </p>
        </div>

        {/* Kullanıcı Akışı - 1. Keşfet */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl" />
            <img
              src={qrCodeScreen}
              alt="Afiyet Restoran Listesi - Müşteri Uygulaması"
              className="relative w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02] will-change-transform"
            />
          </motion.div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 1</div>
            </div>
            <h3 className="text-4xl font-bold">Yakındaki Restoranları Keşfedin</h3>
            <p className="text-xl text-muted-foreground">
              Müşteriler telefon numarası ile ücretsiz kayıt olur. Uygulamadan yakınlarındaki restoranları keşfedebilir, kampanyaları görüntüleyebilir ve favori restoranlarını takip edebilir. Konum bazlı filtreleme ile en yakın fırsatları bulun.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Ücretsiz telefon numarası ile kayıt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Konum bazlı restoran listesi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Popülerlik ve mesafe filtreleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Canlı kampanya görüntüleme</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Kullanıcı Akışı - 2. QR Kod ile Kullanım */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 2</div>
            </div>
            <h3 className="text-4xl font-bold">Fırsat Kullanımı</h3>
            <p className="text-xl text-muted-foreground">
              Müşteriler seçtikleri kampanyaya göre uygulamadan QR kod oluşturur. Restoranınızda QR kodu okutarak anında doğrulayın. 5 dakikalık zamanlayıcı ile güvenli ve hızlı işlem. Her kullanımda otomatik puan kazanımı.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Kampanyaya göre QR kod oluşturma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>5 dakikalık zamanlayıcı ile güvenli kullanım</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Restoran panelinden tek tıkla doğrulama</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Otomatik puan kazanımı</span>
              </li>
            </ul>
          </div>
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl" />
            <img
              src={restaurantList}
              alt="Afiyet QR Kod - Fırsat Kullanımı"
              className="relative w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02] will-change-transform"
            />
          </motion.div>
        </div>

        {/* Kullanıcı Akışı - 3. Kupon Doğrulama */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl" />
            <img
              src={couponVerification}
              alt="Afiyet Kupon Doğrulama - Restoran Paneli"
              className="relative w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02] will-change-transform"
            />
          </motion.div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">ADIM 3</div>
            </div>
            <h3 className="text-4xl font-bold">Kupon Doğrulama</h3>
            <p className="text-xl text-muted-foreground">
              Restoran panelinizden "Tara" özelliğini kullanarak müşterinin QR kodunu okutun. Anında doğrulama yapılır ve kupon güvenilir bir şekilde kullanılmış olur. Ekstra cihaz gerektirmez.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Restoran panelinden QR kod okutma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Anında doğrulama ve onay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Güvenilir kupon kullanımı takibi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Restoran Paneli - Kampanya Yönetimi */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] blur-3xl opacity-20 rounded-3xl" />
            <img
              src={restaurantPanel}
              alt="Afiyet Restoran Paneli - Kampanya Yönetimi"
              className="relative w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02] will-change-transform"
            />
          </motion.div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(14_88%_55%)] via-[hsl(25_95%_53%)] to-[hsl(35_90%_60%)] flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-accent">RESTORAN PANELİ</div>
            </div>
            <h3 className="text-4xl font-bold">Kampanya Yönetimi Paneli</h3>
            <p className="text-xl text-muted-foreground">
              Kart tabanlı basit arayüzle kampanyalarınızı kolayca oluşturun ve yönetin. Ürün görselleri, fiyatlar ve geçerlilik kurallarını tek bir ekrandan belirleyin. Teknik bilgi gerektirmez.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Kampanya başlığı ve açıklama ekleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>İndirimli fiyat belirleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Ürün fotoğrafı yükleme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Anında yayınlama</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
