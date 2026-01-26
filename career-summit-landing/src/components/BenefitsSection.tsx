import * as React from "react";
// ▼▼▼ 変更点1: Usersアイコンを追加インポート ▼▼▼
import { UserCheck, Ticket, MessageCircle, Gift, Users } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BenefitsSection = () => {
  // ▼▼▼ 変更点2: 特典リストを修正（特典4のnoteを削除し、特典5を追加） ▼▼▼
  const benefits = [
    {
      id: 1,
      title: "不安を無くす事前個別面談",
      description: "本イベントは選考式になっているため、事前に選考面談をします。また、当日の超優良企業と効率的にお話しするためにキャリアアドバイザーがあなたとともに対策します。",
      icon: UserCheck
    },
    {
      id: 2,
      title: "あなただけの特別推薦カード",
      description: "超優良企業から選考直結の早期特別ルートを勝ち取ろう！（企業様が気になった学生に対して、特別ルートへ招待するオファーカードを渡す仕組みです）",
      icon: Ticket
    },
    {
      id: 3,
      title: "興味を持った企業様との１on１面談",
      description: "座談会でアピールできた学生に対して、企業様から個人面談申請をイベント中に送ります。",
      icon: MessageCircle
    },
    {
      id: 4,
      title: "Amazonギフト券",
      description: "イベント参加でアマギフ1,000円分を最後にお渡しします（アンケートと引き換え）。",
      // note プロパティを削除しました
      icon: Gift
    },
    {
      id: 5,
      title: "友人紹介特典",
      description: "ご友人の紹介で参加された場合、紹介した方とされた方「双方」にAmazonギフト券1,000円分を追加でプレゼントします！（上限なし！）",
      icon: Users // 新しいアイコン
    }
  ];

  const baseImages = ["/gift-1.png", "/gift-2.png", "/gift-3.png"];
  const benefitImages = [...baseImages, ...baseImages, ...baseImages]; 

  const plugin = React.useRef(
    AutoScroll({ 
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-10 px-4 md:px-8 bg-white relative">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#0B1E46] mb-2 tracking-wide">
             参加者特典
           </h2>
           <p className="text-[#B8860B] font-serif italic text-sm tracking-widest uppercase mb-6">BENEFITS</p>
           
           <p className="text-base md:text-lg font-bold text-[#0B1E46] mb-2">
             本気で就活に向き合うあなたを支援します。
           </p>
           
           <p className="text-xs md:text-sm font-bold text-slate-500 mb-6">
             クリックして詳細を確認できます
           </p>

           {/* 特典画像スライダー（回転寿司風） */}
           <div className="w-full mb-6 relative">
             <Carousel
               plugins={[plugin.current]}
               className="w-full"
               opts={{
                 align: "start",
                 loop: true,
                 dragFree: true,
               }}
             >
               <CarouselContent className="-ml-4">
                 {benefitImages.map((src, index) => (
                   <CarouselItem key={index} className="pl-4 basis-[80%] md:basis-1/2">
                     <div className="relative aspect-[16/9] w-full overflow-hidden">
                       <img
                         src={src}
                         alt={`特典イメージ`}
                         className="object-contain w-full h-full"
                       />
                     </div>
                   </CarouselItem>
                 ))}
               </CarouselContent>
             </Carousel>
           </div>

        </div>

        {/* アコーディオンリスト */}
        <Accordion type="single" collapsible className="space-y-4">
          {benefits.map((benefit: any) => (
            <AccordionItem 
                key={benefit.id} 
                value={`item-${benefit.id}`} 
                className="bg-slate-50 border-2 border-[#C5A059]/40 rounded-xl px-0 data-[state=open]:bg-amber-50/30 transition-colors"
            >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group text-left">
                    <div className="flex items-center gap-4 w-full">
                        
                        {/* アイコン */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0B1E46] flex items-center justify-center shadow-md group-hover:bg-[#C5A059] transition-colors duration-300">
                            <benefit.icon className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* タイトル＆ラベル */}
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-white bg-[#C5A059] px-2 py-0.5 rounded-full w-fit mb-1">
                                特典 {benefit.id}
                            </span>
                            <span className="text-base md:text-lg font-serif font-bold text-[#0B1E46]">
                                {benefit.title}
                            </span>
                        </div>
                    </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-4 pb-4 pt-0 text-slate-600 font-medium leading-relaxed pl-[4.5rem]">
                    <div className="border-t border-[#C5A059]/20 pt-3 mt-1">
                        <p>{benefit.description}</p>
                        
                        {/* noteが存在する場合のみ表示（現在は使用していませんが、コードとして残しておいても問題ありません） */}
                        {benefit.note && (
                            <div className="mt-3 bg-[#FFF9E5] border border-[#FFE082] rounded-lg p-2 text-[#B8860B] font-bold text-[10px] md:text-xs text-center">
                                {benefit.note}
                            </div>
                        )}
                    </div>
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default BenefitsSection;