import { FileText, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "STEP 1",
    title: "エントリーフォーム送信",
    description: "本ページ下部のボタンからフォームに必要事項を入力してください",
  },
  {
    icon: MessageCircle,
    step: "STEP 2",
    title: "公式LINE追加",
    description: "フォーム送信後、公式LINEを友だち追加してください",
  },
  {
    icon: CheckCircle,
    step: "STEP 3",
    title: "選考・参加確定",
    description: "選考通過者には、LINEで参加確定のご連絡をお送りします",
  },
];

const ParticipateSection = () => {
  return (
    <section id="participate" className="py-32 md:py-40 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">HOW TO PARTICIPATE</p>
        <h2 className="section-title">
          参加<span className="gradient-text">方法</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-8" />
        
        <p className="text-center text-muted-foreground mb-16 leading-relaxed">
          簡単3ステップでエントリー完了
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-premium text-center h-full group hover:glow-gold transition-all duration-500">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, hsl(220 40% 15% / 0.6) 0%, hsl(220 35% 10% / 0.4) 100%)",
                    border: "1px solid hsl(45 50% 50% / 0.2)",
                  }}
                >
                  <step.icon className="w-10 h-10 gold-icon" />
                </div>
                <p 
                  className="text-xs font-bold mb-3 tracking-wider"
                  style={{ color: "hsl(45 70% 60%)" }}
                >
                  {step.step}
                </p>
                <h3 className="font-bold font-serif text-lg mb-4 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight 
                    className="w-8 h-8" 
                    style={{ color: "hsl(45 70% 55%)" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipateSection;
