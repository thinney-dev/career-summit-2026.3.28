import { useState, useEffect } from "react";

const navItems = [
  { id: "top", labelJa: "ページトップ", labelEn: "TOP" },
  { id: "features", labelJa: "イベントの特徴", labelEn: "FEATURES" },
  { id: "companies", labelJa: "出展企業", labelEn: "COMPANIES" },
  { id: "timetable", labelJa: "タイムテーブル", labelEn: "TIMETABLE" },
  { id: "participate", labelJa: "参加方法", labelEn: "HOW TO PARTICIPATE" },
  { id: "overview", labelJa: "開催概要", labelEn: "OVERVIEW" },
];

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="flex flex-col gap-1 bg-card/80 backdrop-blur-sm border-l border-border py-4 px-2 rounded-l-xl">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-3 px-4 py-2.5 transition-all duration-300 w-full text-left rounded-lg ${
                activeSection === item.id
                  ? "bg-accent/10"
                  : "hover:bg-muted/50"
              }`}
            >
              <span
                className={`w-1 h-6 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-accent"
                    : "bg-muted-foreground/30 group-hover:bg-accent/50"
                }`}
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-foreground/80 group-hover:text-foreground"
                  }`}
                >
                  {item.labelJa}
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  {item.labelEn}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
