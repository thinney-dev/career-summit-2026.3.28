import { ChevronRight, Users, Award, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-8 pb-24 lg:pb-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-2xl mx-auto px-4 text-center">
        {/* Target badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in">
          <span className="tag-badge text-xs">京都大学</span>
          <span className="tag-badge text-xs">大阪大学</span>
          <span className="tag-badge text-xs">神戸大学</span>
          <span className="tag-badge text-xs">国公立大学院生</span>
        </div>

        <p className="text-accent text-sm tracking-widest mb-4 animate-fade-in animate-delay-100">
          28卒限定
        </p>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-slide-up animate-delay-200 leading-tight">
          上位大学生のための
          <br />
          特別座談会
        </h1>

        <div className="mb-6 animate-slide-up animate-delay-300">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text tracking-tight">
            キャリアサミット
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground ml-2">
            2026
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted-foreground mb-8 animate-fade-in animate-delay-400 max-w-md mx-auto leading-relaxed">
          超優良企業の新卒採用責任者や現場社員と
          <br className="hidden sm:block" />
          対面で直接話せる早期就活イベント
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in animate-delay-400">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">30名限定</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">京阪神大</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">完全招待制</span>
          </div>
        </div>

        {/* CTA section */}
        <div className="card-premium mb-6 animate-slide-up animate-delay-400">
          <p className="text-lg sm:text-xl font-bold mb-4 font-serif">
            超優良企業から選考直結の
            <br />
            <span className="gradient-text">早期特別ルート</span>を勝ち取ろう！
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
            <span>ENTRYはこちら</span>
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            ※参加人数には定員がございます。お早めにお申し込みください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
