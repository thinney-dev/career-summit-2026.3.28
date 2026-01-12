import { Clock } from "lucide-react";

const schedule = [
  { time: "13:00", event: "受付開始", duration: "30分" },
  { time: "13:30", event: "オープニング・イベント説明", duration: "15分" },
  { time: "13:45", event: "企業プレゼンテーション", duration: "60分" },
  { time: "14:45", event: "休憩", duration: "15分" },
  { time: "15:00", event: "座談会セッション①", duration: "45分" },
  { time: "15:45", event: "座談会セッション②", duration: "45分" },
  { time: "16:30", event: "座談会セッション③", duration: "45分" },
  { time: "17:15", event: "クロージング・懇親会", duration: "45分" },
  { time: "18:00", event: "終了", duration: "" },
];

const TimetableSection = () => {
  return (
    <section id="timetable" className="py-32 md:py-40 px-4 relative">
      {/* Subtle background variation */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 50%, hsl(220 45% 8%) 0%, transparent 70%)",
        }}
      />
      
      <div className="container max-w-2xl mx-auto relative z-10">
        <p className="section-subtitle">TIMETABLE</p>
        <h2 className="section-title">
          タイム<span className="gradient-text">テーブル</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-8" />
        
        <p className="text-center text-muted-foreground mb-16 leading-relaxed">
          充実した1日をお約束します
        </p>

        <div className="card-premium">
          <div className="space-y-0">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 py-5 ${
                  index !== schedule.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="flex items-center gap-3 min-w-[120px]">
                  <Clock className="w-4 h-4 gold-icon" />
                  <span 
                    className="font-bold text-lg"
                    style={{ color: "hsl(45 70% 60%)" }}
                  >
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{item.event}</p>
                  {item.duration && (
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {item.duration}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          ※スケジュールは変更される場合がございます
        </p>
      </div>
    </section>
  );
};

export default TimetableSection;
