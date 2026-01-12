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
    <section id="timetable" className="py-20 px-4 bg-card/50">
      <div className="container max-w-2xl mx-auto">
        <p className="section-subtitle">TIMETABLE</p>
        <h2 className="section-title">
          タイム<span className="gradient-text">テーブル</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          充実した1日をお約束します
        </p>

        <div className="space-y-0">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 py-4 ${
                index !== schedule.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-2 min-w-[100px]">
                <Clock className="w-4 h-4 text-accent" />
                <span className="font-bold text-accent">{item.time}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.event}</p>
                {item.duration && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.duration}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          ※スケジュールは変更される場合がございます
        </p>
      </div>
    </section>
  );
};

export default TimetableSection;
