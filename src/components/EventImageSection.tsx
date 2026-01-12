const EventImageSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">EVENT SCENE</p>
        <h2 className="section-title mb-12">
          開催<span className="gradient-text">イメージ</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder images */}
          <div className="aspect-[4/3] bg-gradient-to-br from-navy-medium to-navy-light rounded-xl flex items-center justify-center border border-border overflow-hidden group">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <p className="text-xs text-muted-foreground">座談会の様子</p>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-gradient-to-br from-navy-medium to-navy-light rounded-xl flex items-center justify-center border border-border overflow-hidden">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <p className="text-xs text-muted-foreground">企業ブース</p>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-gradient-to-br from-navy-medium to-navy-light rounded-xl flex items-center justify-center border border-border overflow-hidden col-span-2 md:col-span-1">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">🎤</span>
              </div>
              <p className="text-xs text-muted-foreground">プレゼンテーション</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventImageSection;
