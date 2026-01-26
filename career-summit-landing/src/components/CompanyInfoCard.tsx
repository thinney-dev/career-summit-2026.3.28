import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyInfoCard = () => {
  return (
    // カード全体: 横幅を約1.2倍(max-w-[320px])に広げ、高さを抑える設計に変更
    <div className="w-full max-w-[320px] bg-white/95 backdrop-blur-sm rounded-xl border border-[#B8860B]/30 shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
        
        {/* ▼▼▼ 修正点：ヘッダー部分を削除して高さを削減 ▼▼▼ */}
        {/* <div className="py-2 px-3 text-center bg-[#fafafa] border-b border-slate-100">...</div> */}
        {/* ▲▲▲ 修正ここまで ▲▲▲ */}

        {/* メインコンテンツ: 上下のパディング(py)と要素間の間隔(gap)を詰める */}
        <div className="py-3 px-4 flex flex-col gap-2 items-center bg-white">
            
            {/* 運営会社名称エリア */}
            <div className="text-center w-full">
                {/* 下のマージン(mb)を詰める */}
                <div className="mb-1">
                    <span className="text-[9px] font-bold text-slate-400 tracking-widest font-sans">OPERATED BY</span>
                </div>
                
                {/* 会社名リンク */}
                <a 
                    href="https://thinney.co.jp/TOP_thinney" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group/link transition-opacity hover:opacity-70 duration-300"
                >
                    <h3 className="text-lg font-serif font-black text-[#0B1E46] leading-tight">
                        THINNEY株式会社
                    </h3>
                    {/* 上のマージン(mt)を詰める */}
                    <div className="flex items-center justify-center gap-1 mt-0.5 text-[#B8860B] text-[9px] font-bold">
                        <span className="tracking-wider">コーポレートサイト</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                    </div>
                </a>
            </div>

            {/* お問い合わせボタン: ボタンの高さ(h)を小さくし、アイコンサイズも調整 */}
            <div className="w-full">
                <Button 
                    className="w-full bg-[#0B1E46] text-white hover:bg-[#152c5c] shadow-sm border border-transparent transition-all duration-300 h-8 rounded-md"
                    onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')}
                >
                    <span className="flex items-center gap-1.5 font-bold text-[10px] tracking-wider">
                        <Mail className="w-3 h-3 text-[#B8860B]" />
                        お問い合わせはこちら
                    </span>
                </Button>
            </div>
        </div>
    </div>
  );
};

export default CompanyInfoCard;