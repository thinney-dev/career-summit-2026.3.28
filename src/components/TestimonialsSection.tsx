import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "K.T.",
    university: "京都大学 経済学部",
    comment:
      "少人数だからこそ、社員の方と深い話ができました。ここでの出会いがきっかけで、志望企業が明確になりました。",
    rating: 5,
  },
  {
    name: "M.S.",
    university: "大阪大学 工学部",
    comment:
      "説明会では聞けないリアルな話を聞けて、企業研究が一気に進みました。参加者同士の交流も刺激になりました。",
    rating: 5,
  },
  {
    name: "Y.N.",
    university: "神戸大学 法学部",
    comment:
      "イベント後に特別選考の案内をいただき、早期内定につながりました。参加して本当に良かったです。",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="campaign" className="py-20 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">VOICE</p>
        <h2 className="section-title">
          参加者の<span className="gradient-text">声</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          過去の参加者からいただいた感想をご紹介します
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4 text-foreground/90">
                {testimonial.comment}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.university}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign banner */}
        <div className="mt-12 card-premium border-accent/30 bg-gradient-to-r from-card to-accent/5 text-center">
          <p className="text-accent text-sm font-bold mb-2">🎁 期間限定キャンペーン</p>
          <h3 className="text-xl font-bold font-serif mb-2">
            早期エントリーで特別特典をプレゼント
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            1月31日までにエントリーいただいた方には、
            <br className="hidden sm:block" />
            就活対策資料を無料でお送りします
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-sm"
          >
            今すぐエントリーする
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
