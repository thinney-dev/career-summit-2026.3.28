import { Calendar, MapPin, Users, CircleDollarSign, ChevronRight } from "lucide-react";

const OverviewSection = () => {
  return (
    <section id="overview" className="py-32 md:py-40 px-4 pb-48 lg:pb-40 relative">
      {/* Subtle background variation */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 50%, hsl(220 45% 8%) 0%, transparent 70%)",
        }}
      />
      
      <div className="container max-w-2xl mx-auto relative z-10">
        <p className="section-subtitle">OVERVIEW</p>
        <h2 className="section-title">
          開催<span className="gradient-text">概要</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-16" />

        <div className="card-premium">
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <Calendar className="w-6 h-6 gold-icon" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">開催日時</p>
                <p className="font-bold text-lg text-foreground">2026年2月15日（日）13:00〜18:00</p>
              </div>
            </div>

            <div className="divider-gold" />

            <div className="flex items-start gap-5">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <MapPin className="w-6 h-6 gold-icon" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">会場</p>
                <p className="font-bold text-lg text-foreground">大阪市内（詳細は参加確定後にご案内）</p>
              </div>
            </div>

            <div className="divider-gold" />

            <div className="flex items-start gap-5">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <Users className="w-6 h-6 gold-icon" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">対象</p>
                <p className="font-bold text-lg text-foreground">
                  京都大学・大阪大学・神戸大学・国公立大学院に所属する28卒学生
                </p>
              </div>
            </div>

            <div className="divider-gold" />

            <div className="flex items-start gap-5">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                  border: "1px solid hsl(45 50% 50% / 0.15)",
                }}
              >
                <CircleDollarSign className="w-6 h-6 gold-icon" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">参加費</p>
                <p 
                  className="font-bold text-xl"
                  style={{ color: "hsl(45 80% 60%)" }}
                >
                  無料
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl font-bold font-serif mb-8 leading-relaxed text-foreground">
            あなたのキャリアを加速させる
            <br />
            <span className="gradient-text">特別な1日</span>が待っています
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 text-lg"
          >
            <span className="text-xs px-2 py-1 rounded bg-black/20">
              簡単1分
            </span>
            <span>今すぐエントリーする</span>
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-6">
            ※定員に達し次第、受付終了となります
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
