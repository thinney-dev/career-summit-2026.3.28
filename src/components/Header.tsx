const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-lg font-bold font-serif">
            <span className="gradient-text">キャリアサミット</span>
            <span className="text-foreground ml-1">2026</span>
          </h1>
          <p className="text-[10px] text-muted-foreground tracking-wider">
            Creating Career Possibilities
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
