import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "参加費用はかかりますか？",
      answer: "無料です。お気軽にご参加ください。"
    },
    {
      question: "オファーカードとは何ですか？",
      answer: "企業様が気になった学生に対して、特別ルートへ招待するオファーカードを渡す仕組みです。"
    },
    {
      question: "当日の服装に指定はありますか？",
      answer: "なんでもOKですが、オフィスカジュアル（綺麗め）な服装が好ましいです。"
    },
    {
      question: "途中参加・途中退席はできますか？",
      answer: "少人数で着座で深く話せるイベントですので、原則として不可です。どうしても途中参加・退出が必要な場合は、事前に運営スタッフまでご連絡ください。"
    },
    {
      question: "当日の持ち物は？",
      answer: "筆記用具、スマートフォンをお持ちください。"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             よくある質問
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">FAQ</p>
        </div>

        {/* アコーディオン（FAQリスト） */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-4 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#B8860B]/20 transition-all">
                    <AccordionTrigger className="py-4 hover:no-underline hover:text-[#B8860B] transition-colors text-left group">
                        <span className="text-sm md:text-base font-bold text-[#0B1E46] group-hover:text-[#B8860B] flex gap-3 items-center">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B1E46] text-white flex items-center justify-center text-[10px] font-serif group-hover:bg-[#B8860B] transition-colors">Q</span>
                            {faq.question}
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0 text-sm text-slate-600 font-medium leading-relaxed pl-9">
                        <span className="font-bold text-[#B8860B] mr-2">A.</span>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;