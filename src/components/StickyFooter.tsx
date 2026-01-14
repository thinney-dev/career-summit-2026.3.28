import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const StickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 pb-6 md:pb-3 shadow-[0_-4px_10px_-2px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3 max-w-md mx-auto items-center">
        
        {/* ENTRYボタン（Googleフォームへ） */}
        <Button 
          className="flex-[2] bg-purple-600 hover:bg-purple-500 text-white font-bold h-14 rounded-lg shadow-md text-lg tracking-wide transition-transform active:scale-95"
          onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')} // ★ここにGoogleフォームのURLを入れてください
        >
          ENTRYはこちら
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* キャンペーンボタン（ページ内リンク） */}
        <Button 
          variant="outline" 
          className="flex-[1] bg-white hover:bg-amber-50 text-amber-600 border-2 border-amber-400 font-bold h-14 rounded-lg shadow-sm flex flex-col justify-center items-center gap-0 px-1 leading-tight"
          onClick={() => {
            // キャンペーンセクションへスクロール（id="campaign"の場所へ）
            const element = document.getElementById('campaign');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] text-amber-500 font-bold">キャンペーン</span>
          <span className="text-sm font-bold">実施中</span>
        </Button>

      </div>
    </div>
  );
};

export default StickyFooter;