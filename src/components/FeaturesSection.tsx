import { Users, Building2, Handshake } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "京阪神の学生限定",
      description: "参加者を京都大学・大阪大学・神戸大学の学生に限定。同じような志を持つ、レベルの高い仲間と出会える貴重な機会です。",
      icon: Users
    },
    {
      id: 2,
      title: "厳選された超優良企業",
      description: "業界をリードするトップ企業のみを厳選して招待。一度に複数の優良企業と深く接点を持てる効率的なイベントです。",
      icon: Building2
    },
    {
      id: 3,
      title: "少人数制・対話型",
      description: "30名限定の少人数制で、企業の方と着座でじっくり話せます。一方的な説明会ではなく、双方向の対話を通じて深い企業理解につながります。",
      icon: Handshake
    }
  ];

  return (
    // ▼ 変更1：上下の余白を py-20 から py-12 に削減しました ▼
    <section className="py-12 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* セクションタイトル */}
        <div className="text-center mb-10">
           <h2 className="text-2xl md:text-3xl font-bold text-[#0B1E46] mb-3 leading-tight">
             本イベントが選ばれる<br />
             <span className="inline-block mt-1">3つの理由</span>
           </h2>
           <p className="text-purple-600 font-bold uppercase tracking-widest text-xs">WHY OUR EVENT</p>
        </div>

        {/* コンテンツエリア：画像（丸い枠）を削除し、テキスト中心のデザインに変更 */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            // ▼ 変更2：画像削除に伴い、シンプルなカード型レイアウトに変更 ▼
            <div key={feature.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              
              {/* 背景の薄い番号 */}
              <div className="absolute top-2 right-4 text-6xl font-black text-slate-100 opacity-50 select-none pointer-events-none font-serif z-0">
                0{feature.id}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4">
                 {/* アイコン */}
                 <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#0B1E46] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                 </div>

                 {/* テキスト */}
                 <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-[#0B1E46] mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                    </p>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;