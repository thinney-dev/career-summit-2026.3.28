import { ChevronRight, Users, Award, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-40 lg:pb-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse, hsl(220 50% 20%) 0%, transparent 70%)",
          }}
        />
        {/* Gold accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(ellipse, hsl(45 80% 50%) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container max-w-2xl mx-auto px-4 text-center">
        {/* Target badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
          <span className="tag-badge text-xs">京都大学</span>
          <span className="tag-badge text-xs">大阪大学</span>
          <span className="tag-badge text-xs">神戸大学</span>
          <span className="tag-badge text-xs">国公立大学院生</span>
        </div>

        <p className="text-sm tracking-[0.3em] mb-6 animate-fade-in animate-delay-100"
          style={{
            background: "linear-gradient(135deg, hsl(43 80% 55%) 0%, hsl(48 90% 70%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          28卒限定
        </p>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slide-up animate-delay-200 leading-tight text-foreground">
          上位大学生のための
          <br />
          特別座談会
        </h1>

        <div className="mb-8 animate-slide-up animate-delay-300">
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text tracking-tight">
            キャリアサミット
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground ml-2">
            2026
          </span>
        </div>

        {/* Divider */}
        <div className="divider-gold w-48 mx-auto mb-8 animate-fade-in animate-delay-300" />

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted-foreground mb-12 animate-fade-in animate-delay-400 max-w-md mx-auto leading-loose">
          超優良企業の新卒採用責任者や現場社員と
          <br className="hidden sm:block" />
          対面で直接話せる早期就活イベント
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animate-delay-400">
          <div className="glass-container flex items-center gap-3 px-5 py-3">
            <Users className="w-5 h-5 gold-icon" />
            <span className="text-sm font-medium">30名限定</span>
          </div>
          <div className="glass-container flex items-center gap-3 px-5 py-3">
            <Award className="w-5 h-5 gold-icon" />
            <span className="text-sm font-medium">京阪神大</span>
          </div>
          <div className="glass-container flex items-center gap-3 px-5 py-3">
            <Lock className="w-5 h-5 gold-icon" />
            <span className="text-sm font-medium">完全招待制</span>
          </div>
        </div>

        {/* CTA section */}
        <div className="card-premium glow-gold animate-slide-up animate-delay-500">
          <p className="text-xl sm:text-2xl font-bold mb-6 font-serif leading-relaxed">
            超優良企業から選考直結の
            <br />
            <span className="gradient-text">早期特別ルート</span>を勝ち取ろう！
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
            <span>ENTRYはこちら</span>
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-5">
            ※参加人数には定員がございます。お早めにお申し込みください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
