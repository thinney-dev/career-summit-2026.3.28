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
    <section id="participate" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">HOW TO PARTICIPATE</p>
        <h2 className="section-title">
          参加<span className="gradient-text">方法</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          簡単3ステップでエントリー完了
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-premium text-center h-full">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-xs text-accent font-bold mb-2">{step.step}</p>
                <h3 className="font-bold font-serif mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
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
