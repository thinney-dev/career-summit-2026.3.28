import { useState, useEffect } from "react";
import { ChevronRight, Users, MapPin, Ticket } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// ▼▼▼ 修正箇所：ここが [4, 1, 2] の順になっているか確認してください ▼▼▼
const images = [
  "/Herosection-4.png",
  "/Herosection-1.png",
  "/Herosection-2.png"
];

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative w-full pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-white">
      
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* ヘッダーテキスト部分 */}
        <div className="mb-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
          
          <h2 className="text-base md:text-lg font-serif font-medium text-[#0B1E46] tracking-[0.2em] mb-3 uppercase">
            日本一
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0B1E46] leading-tight mb-5 drop-shadow-sm">
            質の高い就活を
          </h1>
          
          <div className="mt-1 w-full flex justify-center">
            <p className="text-[11px] sm:text-sm md:text-lg font-serif text-[#0B1E46] tracking-[0.1em] font-medium opacity-90 whitespace-nowrap">
              少人数だからこそ、優良企業と深く話せる座談会
            </p>
          </div>

        </div>


        {/* メインビジュアル */}
        <div className="relative w-full max-w-4xl mx-auto mb-10 shadow-2xl overflow-hidden">
          
          {/* カルーセル */}
          <div className="overflow-hidden bg-slate-100 aspect-[16/9]" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                  <img
                    src={src}
                    alt={`Career Summit Scene ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* 画像を暗くするフィルターは削除済みです */}
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* イベントの特徴（3つの丸） */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 mb-12 w-full max-w-4xl px-2">
          
          {/* Limit */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <Users size={14} />
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">LIMIT</p>
                <p className="text-sm font-bold text-[#0B1E46]">30名限定</p>
             </div>
          </div>

          {/* Target */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <MapPin size={14} />
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">TARGET</p>
                <p className="text-sm font-bold text-[#0B1E46]">京阪神大</p>
             </div>
          </div>

          {/* Style */}
          <div className="flex-1 min-w-[140px] max-w-[240px] flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
             <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                <Ticket size={14} />
             </div>
             <div className="text-left">
                <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">STYLE</p>
                <p className="text-sm font-bold text-[#0B1E46]">招待制</p>
             </div>
          </div>
        </div>


        {/* 3つの特権リスト */}
        <div className="w-full max-w-[480px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-2 md:px-0">
          
          {/* 見出し */}
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="h-[1px] w-8 md:w-12 bg-[#B8860B]/40"></div>
             <h3 className="text-lg md:text-xl font-serif font-bold text-[#B8860B] tracking-wider whitespace-nowrap">
               ▼ 参加者だけの「3つの特権」 ▼
             </h3>
             <div className="h-[1px] w-8 md:w-12 bg-[#B8860B]/40"></div>
          </div>

          {/* リスト部分 */}
          <div className="flex flex-col space-y-3 px-2 md:px-4">
               
               {/* Item 1 */}
               <div className="flex items-baseline border-b border-slate-200/60 pb-2">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0">1.</span>
                 <span className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left whitespace-nowrap">
                    早期選考
                 </span>
               </div>

               {/* Item 2 */}
               <div className="flex items-baseline border-b border-slate-200/60 pb-2">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0">2.</span>
                 <div className="flex items-center flex-nowrap gap-2 md:gap-3">
                    <span className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left whitespace-nowrap">
                        選ばれし学生は海外渡航インターン
                    </span>
                    <span className="text-[10px] md:text-[11px] font-bold text-white bg-[#B8860B] px-2 md:px-3 py-1 rounded-full shadow-sm tracking-wide whitespace-nowrap shrink-0">
                        無料
                    </span>
                 </div>
               </div>

               {/* Item 3 */}
               <div className="flex items-baseline pt-1">
                 <span className="font-serif italic text-2xl md:text-3xl text-slate-300 mr-3 md:mr-5 font-light w-6 md:w-8 text-right shrink-0">3.</span>
                 <span className="text-lg md:text-xl font-bold text-[#0B1E46] tracking-wide font-sans text-left whitespace-nowrap">
                    幹部候補生として入社確約
                 </span>
               </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;