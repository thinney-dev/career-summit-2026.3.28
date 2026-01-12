import { ChevronRight } from "lucide-react";

const StickyFooter = () => {
  const scrollToCampaign = () => {
    const element = document.getElementById("campaign");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-3 lg:hidden">
      <div className="flex gap-2 max-w-md mx-auto">
        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-gold flex items-center justify-center gap-2 text-sm py-3"
        >
          <span className="text-xs bg-accent-foreground/20 px-2 py-0.5 rounded">
            簡単1分
          </span>
          <span>ENTRYはこちら</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        <button
          onClick={scrollToCampaign}
          className="btn-outline-gold text-xs py-3 px-4 whitespace-nowrap"
        >
          キャンペーン実施中
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;
