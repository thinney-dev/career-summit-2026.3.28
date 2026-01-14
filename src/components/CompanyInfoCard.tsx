import { ExternalLink, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyInfoCard = () => {
  return (
    <div className="w-full max-w-[280px] bg-white/90 backdrop-blur-sm rounded-xl border border-[#0B1E46]/10 shadow-lg overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-[#0B1E46] py-2 px-4 text-center">
            <h2 className="text-[10px] font-bold text-white tracking-widest uppercase opacity-80">
                Organizer
            </h2>
        </div>

        <div className="p-4 flex flex-col gap-4 items-center">
            
            {/* 運営会社リンク */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1 text-[#0B1E46] font-bold text-xs">
                    <Building2 className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>運営会社</span>
                </div>
                <a 
                    href="https://thinney.co.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#B8860B] transition-colors border-b border-dashed border-slate-300 hover:border-[#B8860B] pb-0.5 text-xs font-medium inline-flex items-center gap-1"
                >
                    THINNEY株式会社
                    <ExternalLink className="w-2.5 h-2.5" />
                </a>
            </div>

            {/* お問い合わせボタン */}
            <div className="w-full">
                <Button 
                    variant="outline"
                    size="sm"
                    className="w-full bg-slate-50 border-slate-200 text-[#0B1E46] hover:bg-[#0B1E46] hover:text-white transition-colors h-8 rounded-md font-bold text-[10px] gap-2"
                    onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')}
                >
                    <Mail className="w-3 h-3" />
                    お問い合わせはこちら
                </Button>
            </div>
        </div>
    </div>
  );
};

export default CompanyInfoCard;