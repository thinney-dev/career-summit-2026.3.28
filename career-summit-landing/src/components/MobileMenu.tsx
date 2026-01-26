import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ナビゲーション項目（Index.tsxと同じもの）
  const navItems = [
    { id: "top", label: "ページトップ", en: "TOP" },
    { id: "features", label: "イベントの特徴", en: "FEATURES" },
    { id: "companies", label: "出展企業", en: "COMPANIES" },
    { id: "timetable", label: "タイムテーブル", en: "TIMETABLE" },
    { id: "benefits", label: "参加者特典", en: "BENEFITS" },
    { id: "voice", label: "参加者の声", en: "VOICE" },
    { id: "participate", label: "参加方法", en: "HOW TO PARTICIPATE" },
    { id: "overview", label: "開催概要", en: "OVERVIEW" },
    { id: "faq", label: "よくある質問", en: "FAQ" },
  ];

  // スクロール処理
  const handleScroll = (id: string) => {
    setIsOpen(false); // メニューを閉じる
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <>
      {/* ▼ ハンバーガーボタン（常時右上に表示） */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100 text-[#0B1E46] lg:hidden hover:bg-slate-50 transition-colors"
        aria-label="メニューを開く"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* ▼ 開閉するメニューオーバーレイ */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm lg:hidden flex flex-col animate-in fade-in duration-200">
          
          {/* 閉じるボタンエリア */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 bg-slate-100 rounded-full text-[#0B1E46]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* メニューリスト */}
          <div className="flex-1 overflow-y-auto py-4 px-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="flex flex-col items-start border-b border-slate-100 pb-3"
                >
                  <span className="text-xl font-bold font-serif text-[#0B1E46]">
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-[#B8860B] tracking-widest mt-1">
                    {item.en}
                  </span>
                </button>
              ))}
            </nav>

            {/* CVボタンエリア */}
            <div className="mt-8 space-y-4 pb-8">
                <Button 
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold h-14 rounded-xl shadow-lg text-lg"
                    onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')}
                >
                    ENTRYはこちら
                    <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-center text-slate-400 font-bold">
                    簡単1分で完了！
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;