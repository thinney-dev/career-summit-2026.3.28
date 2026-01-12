import { ChevronRight } from "lucide-react";

const StickyFooter = () => {
  const scrollToCampaign = () => {
    const element = document.getElementById("campaign");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 40% 6% / 0.9) 0%, hsl(220 45% 4% / 0.98) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid hsl(45 40% 50% / 0.1)",
      }}
    >
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-gold flex items-center justify-center gap-2 text-sm py-3.5"
        >
          <span className="text-xs px-2 py-0.5 rounded bg-black/20">
            簡単1分
          </span>
          <span>ENTRYはこちら</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToCampaign}
          className="btn-outline-gold text-xs py-3.5 px-5 whitespace-nowrap"
        >
          キャンペーン
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
