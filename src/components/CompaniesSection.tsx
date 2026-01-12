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
    <section id="companies" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="section-subtitle">COMPANIES</p>
        <h2 className="section-title">
          出展<span className="gradient-text">企業</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          日本を代表する超優良企業が参加予定です
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="aspect-[3/2] bg-card border border-border rounded-xl flex items-center justify-center hover:border-accent/50 transition-colors"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold">
                    {company.charAt(company.length - 1)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{company}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          ※出展企業は随時追加・変更される可能性がございます
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
