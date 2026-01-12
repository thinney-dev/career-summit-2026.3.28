import { Building2, Route, MessageCircle, Star } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "超一流企業と直接対話",
    description:
      "日本を代表する超優良企業の採用担当者や現場社員と、少人数で直接対話できる貴重な機会です。",
  },
  {
    icon: Route,
    title: "選考直結ルートを獲得",
    description:
      "イベント参加者限定の早期選考ルートへ案内される可能性があります。通常ルートでは得られない特別なチャンスです。",
  },
  {
    icon: MessageCircle,
    title: "リアルな情報を入手",
    description:
      "説明会では聞けない、社員のリアルな声や実際の仕事内容について深く知ることができます。",
  },
  {
    icon: Star,
    title: "厳選されたメンバー",
    description:
      "完全招待制・選考制により、志の高い仲間と切磋琢磨しながら就活を進められます。",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">FEATURES</p>
        <h2 className="section-title">
          イベントの<span className="gradient-text">特徴</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          キャリアサミット2026は、上位大学生だけが参加できる
          プレミアムな就活イベントです
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium group hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-serif">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
