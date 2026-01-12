import { Calendar, MapPin, Users, CircleDollarSign, ChevronRight } from "lucide-react";

const OverviewSection = () => {
  return (
    <section id="overview" className="py-20 px-4 bg-card/50 pb-32 lg:pb-20">
      <div className="container max-w-2xl mx-auto">
        <p className="section-subtitle">OVERVIEW</p>
        <h2 className="section-title">
          開催<span className="gradient-text">概要</span>
        </h2>

        <div className="card-premium mt-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">開催日時</p>
                <p className="font-bold">2026年2月15日（日）13:00〜18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">会場</p>
                <p className="font-bold">大阪市内（詳細は参加確定後にご案内）</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">対象</p>
                <p className="font-bold">
                  京都大学・大阪大学・神戸大学・国公立大学院に所属する28卒学生
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <CircleDollarSign className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">参加費</p>
                <p className="font-bold text-accent">無料</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg font-bold font-serif mb-4">
            あなたのキャリアを加速させる
            <br />
            <span className="gradient-text">特別な1日</span>が待っています
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <span className="text-xs bg-accent-foreground/20 px-2 py-0.5 rounded">
              簡単1分
            </span>
            <span>今すぐエントリーする</span>
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            ※定員に達し次第、受付終了となります
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
