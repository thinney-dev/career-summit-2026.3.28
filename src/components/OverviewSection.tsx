import { MapPin } from "lucide-react";

const OverviewSection = () => {
  const overviewItems = [
    {
      label: "開催日時",
      content: "2026/03/28 (Sat) 14:15 ~ 17:45"
    },
    {
      label: "開催場所",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1">グランフロント大阪</p>
            <p className="text-sm text-slate-500">〒530-0011 大阪府大阪市北区大深町3-1</p>
            <p className="text-xs text-[#B8860B] mt-1 flex items-center gap-1 font-bold">
              <MapPin className="w-3 h-3" />
              大阪駅より徒歩7分（大阪駅直結）
            </p>
          </div>
          {/* Googleマップ埋め込み */}
          <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.012623477482!2d135.49424264422314!3d34.703516742779094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e68f07000001%3A0xa684e6b145ca9d5!2z44Kw44Op44Oz44OV44Ot44Oz44OI5aSn6Ziq!5e0!3m2!1sja!2sjp!4v1768380844397!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="グランフロント大阪 地図"
            ></iframe>
          </div>
        </div>
      )
    },
    {
      label: "参加対象",
      content: (
        <ul className="list-disc list-outside pl-4 space-y-2">
          <li>京都大学・大阪大学・神戸大学の学生、国公立大学院生</li>
          <li>2027年4月から2028年3月に大学・大学院を卒業または卒業見込みの方</li>
          <li>
            個別事前選考面談に参加できる方
            <span className="block text-xs text-[#B8860B] mt-1 font-bold">＊オンラインで15〜30分程度</span>
          </li>
        </ul>
      )
    },
    {
      label: "参加定員",
      content: "30名（選考面談あり）"
    },
    {
      label: "参加費",
      content: "無料"
    },
    {
      label: "締め切り",
      content: "前日まで（定員に達し次第終了）"
    },
    {
      label: "服装",
      content: "指定なし"
    },
    {
      label: "持ち物",
      content: "筆記用具、スマートフォン"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             開催概要
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">EVENT OVERVIEW</p>
        </div>

        {/* 概要カード */}
        <div className="bg-white rounded-xl border border-[#B8860B]/30 shadow-lg overflow-hidden">
          {/* 上部のゴールドライン装飾 */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0B1E46] via-[#B8860B] to-[#0B1E46]"></div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 gap-y-0">
              
              {overviewItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row py-6 border-b border-slate-100 last:border-0 ${index === 0 ? 'pt-0' : ''} ${index === overviewItems.length - 1 ? 'pb-0' : ''}`}
                >
                  {/* ラベルエリア */}
                  {/* ▼ whitespace-nowrap を追加して、幅が狭くても改行されないようにしました ▼ */}
                  <div className="w-full md:w-20 flex-shrink-0 mb-2 md:mb-0">
                    <h3 className="text-base font-bold text-[#0B1E46] flex items-start md:pt-0 h-full whitespace-nowrap">
                      {item.label}
                    </h3>
                  </div>

                  {/* コンテンツエリア */}
                  <div className="flex-1 text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 text-right mt-4 mr-2">
          ※内容は予告なく変更になる場合がございます。
        </p>

      </div>
    </section>
  );
};

export default OverviewSection;