import { MapPin, Users, Ticket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-20 px-4 md:px-8 overflow-hidden">
      
      {/* 背景装飾 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0B1E46]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* ターゲット年度表示 */}
        <div className="mb-6 animate-fade-in-up">
            <span className="inline-block border-b border-[#B8860B] pb-1 px-4">
                <span className="text-lg md:text-xl font-serif italic text-[#0B1E46] tracking-widest">
                    Class of <span className="text-[#B8860B] font-bold">2028</span>
                </span>
            </span>
            <p className="text-[10px] md:text-xs text-slate-500 mt-2 font-sans tracking-wider uppercase">
                28卒・大学3年生対象
            </p>
        </div>

        {/* イベントロゴ/タイトル */}
        <div className="mb-10 animate-fade-in-up delay-100 w-full">
           {/* ▼ 修正：フォントサイズを少し下げ、改行(<br/>)を入れました */}
           <h1 className="text-3xl md:text-5xl font-serif font-medium text-[#0B1E46] leading-tight tracking-wide">
             Career Summit<br/>
             <span className="text-4xl md:text-6xl font-bold inline-block mt-2">2026</span>
           </h1>
           
           {/* ▼ 修正：サブタイトルのフォントサイズを調整し、スマホ等で自然に改行されるように戻しました */}
           <p className="mt-4 text-xs md:text-sm text-[#0B1E46] font-bold tracking-widest leading-relaxed">
             京阪神のトップ層が集う、完全招待制キャリアイベント
           </p>
        </div>

        {/* キーワードタグ群（サイズ微調整） */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 animate-fade-in-up delay-200">
            
            {/* Tag 1: 30名限定 */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B8860B]/40 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-7 h-7 rounded-full bg-[#0B1E46] text-[#B8860B] flex items-center justify-center group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                    <Users className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                    <p className="text-[9px] text-slate-500 font-sans tracking-wider uppercase leading-none mb-0.5">LIMIT</p>
                    <p className="text-base md:text-lg font-serif font-bold text-[#0B1E46] leading-none">
                        30名限定
                    </p>
                </div>
            </div>

            {/* Tag 2: 京阪神大 */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B8860B]/40 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-7 h-7 rounded-full bg-[#0B1E46] text-[#B8860B] flex items-center justify-center group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                    <p className="text-[9px] text-slate-500 font-sans tracking-wider uppercase leading-none mb-0.5">TARGET</p>
                    <p className="text-base md:text-lg font-serif font-bold text-[#0B1E46] leading-none">
                        京阪神大
                    </p>
                </div>
            </div>

            {/* Tag 3: 招待制 */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B8860B]/40 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-7 h-7 rounded-full bg-[#0B1E46] text-[#B8860B] flex items-center justify-center group-hover:bg-[#B8860B] group-hover:text-white transition-colors">
                    <Ticket className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                    <p className="text-[9px] text-slate-500 font-sans tracking-wider uppercase leading-none mb-0.5">STYLE</p>
                    <p className="text-base md:text-lg font-serif font-bold text-[#0B1E46] leading-none">
                        招待制
                    </p>
                </div>
            </div>

        </div>

        {/* キャッチコピー */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up delay-300">
            <p className="text-sm md:text-base leading-loose font-medium text-slate-700">
                本気で就活に向き合うあなたへ。<br/>
                選ばれた<span className="text-[#B8860B] font-bold mx-1">30名</span>だけの特別な空間で、最高のキャリアスタートを切りませんか？
            </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;