import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyFooter = () => {
  
  // キャンペーンセクションへスクロールする関数
  const scrollToCampaign = () => {
    const element = document.getElementById("campaign");
    if (element) {
      const offset = 80; // ヘッダーの高さ分調整
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // z-indexを高くして最前面に固定
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 pb-6 md:pb-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto max-w-md flex items-center gap-3">
        
        {/* ENTRYボタン（左側・紫） */}
        <Button
          onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')}
          className="flex-1 bg-[#9333EA] hover:bg-[#7E22CE] text-white font-bold h-14 rounded-xl shadow-lg transition-transform active:scale-95 text-xl tracking-wide"
        >
          ENTRYはこちら
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>

        {/* キャンペーンボタン（右側・白地にオレンジ枠） */}
        {/* ▼▼▼ onClickイベントを追加し、デザインを画像に合わせて調整 ▼▼▼ */}
        <button
          onClick={scrollToCampaign}
          className="h-14 min-w-[100px] bg-white border-2 border-[#F59E0B] text-[#F59E0B] rounded-xl font-bold flex flex-col items-center justify-center shadow-sm active:bg-orange-50 transition-colors leading-tight"
        >
          <span className="text-[10px] font-bold">キャンペーン</span>
          <span className="text-base font-bold">実施中</span>
        </button>

      </div>
    </div>
  );
};

export default StickyFooter;