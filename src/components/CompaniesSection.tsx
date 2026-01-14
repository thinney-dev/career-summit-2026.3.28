const CompaniesSection = () => {
  const companies = [
    { 
      id: 1, 
      name: "THINNEY 株式会社", 
      tags: ["金融・教育", "スタートアップ"], 
      logoImage: "/logo-1.png", 
    },
    { 
      id: 2, 
      name: "社名 2", 
      tags: ["業界", "タグ"], 
      logoText: "Logo 2" 
    },
    { 
      id: 3, 
      name: "社名 3", 
      tags: ["業界", "タグ"], 
      logoText: "Logo 3" 
    },
    { 
      id: 4, 
      name: "社名 4", 
      tags: ["業界", "タグ"], 
      logoText: "Logo 4" 
    },
    { 
      id: 5, 
      name: "社名 5", 
      tags: ["業界", "タグ"], 
      logoText: "Logo 5" 
    },
    { 
      id: 6, 
      name: "社名 6", 
      tags: ["業界", "タグ"], 
      logoText: "Logo 6" 
    },
  ];

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* ヘッダーエリア */}
        <div className="text-center mb-12">
           
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               出展企業
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               COMPANIES
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6">
             タップすると各企業HPへ遷移します
           </p>

           {/* ▼▼▼ 変更点：PCでのサイズを md:text-lg から md:text-base に下げ、whitespace-nowrap で改行を禁止しました ▼▼▼ */}
           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight">
             <span className="inline-block whitespace-nowrap">業界最大手から、超優良企業、スタートアップまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">幅広い企業が出展</span>
           </p>
        </div>

        {/* 企業ロゴカード一覧 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {companies.map((company: any) => (
            <div 
              key={company.id} 
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow aspect-square w-full cursor-pointer group"
            >
              <div className="flex-1 flex items-center justify-center w-full mb-3">
                {company.logoImage ? (
                  <img 
                    src={company.logoImage} 
                    alt={`${company.name} ロゴ`}
                    className="max-h-32 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                ) : (
                  <span className="font-black text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                    {company.logoText}
                  </span>
                )}
              </div>
              
              {/* 下部情報エリア */}
              <div className="w-full space-y-2 text-center">
                 <div className="flex justify-center gap-1 w-full px-2">
                    {company.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[150px]">
                            {tag}
                        </span>
                    ))}
                 </div>
                 <p className="text-xs font-bold text-slate-400 mt-1">
                    {company.name}
                 </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>

      </div>
    </section>
  );
};

export default CompaniesSection;