const Header = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(180deg, hsl(220 40% 6% / 0.95) 0%, hsl(220 40% 6% / 0.8) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid hsl(45 40% 50% / 0.08)",
      }}
    >
      <div className="container max-w-4xl mx-auto px-4 py-5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold font-serif">
            <span className="gradient-text">キャリアサミット</span>
            <span className="text-foreground ml-2">2026</span>
          </h1>
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] mt-1">
            Creating Career Possibilities
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
