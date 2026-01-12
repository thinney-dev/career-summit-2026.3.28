const companies = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
  "Company G",
  "Company H",
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-32 md:py-40 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">COMPANIES</p>
        <h2 className="section-title">
          出展<span className="gradient-text">企業</span>
        </h2>
        
        <div className="divider-gold w-24 mx-auto mb-8" />
        
        <p className="text-center text-muted-foreground mb-16 leading-relaxed">
          日本を代表する超優良企業が参加予定です
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="glass-container aspect-[3/2] flex items-center justify-center group hover:glow-gold transition-all duration-500"
            >
              <div className="text-center">
                <div 
                  className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, hsl(220 30% 20%) 0%, hsl(220 35% 15%) 100%)",
                    border: "1px solid hsl(45 50% 50% / 0.1)",
                  }}
                >
                  <span 
                    className="font-bold text-lg transition-all duration-500"
                    style={{ color: "hsl(45 60% 60%)" }}
                  >
                    {company.charAt(company.length - 1)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{company}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12">
          ※出展企業は随時追加・変更される可能性がございます
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
