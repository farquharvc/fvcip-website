import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Blogs() {
  const { t } = useLanguage();
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Insights");

  const categories = ["All Insights", "Corporate Structuring", "VCC Regulations", "Market Trends", "Advisory"];

  const allArticles = [
    {
      id: 1,
      title: "Navigating the New VCC Regulatory Framework in 2025",
      category: "VCC Regulations",
      date: "Jun 24, 2026",
      description: "An in-depth analysis of the upcoming regulatory shifts affecting Variable Capital Companies, offering strategic foresight for fund managers and institutional investors preparing for compliance audits.",
      content: "Variable Capital Companies (VCCs) have become a cornerstone of Singapore's fund management ecosystem. As we approach 2025, regulatory bodies are introducing refined compliance measures designed to enhance transparency and mitigate systemic risks. Fund managers must prepare for more rigorous anti-money laundering (AML) checks, enhanced know-your-customer (KYC) protocols, and streamlined reporting requirements. This article explores the nuanced changes in the regulatory framework, providing actionable strategies to ensure your institutional vehicles remain compliant while optimizing operational efficiency.\n\nThe upcoming changes emphasize digital reporting and real-time data submission. Firms that proactively upgrade their compliance infrastructure will not only avoid penalties but will also gain a competitive edge in attracting institutional capital. Furthermore, the evolution of the VCC structure indicates a strong push towards making Singapore a truly global hub for sophisticated fund administration, opening doors to broader classes of institutional capital while strictly enforcing fiduciary duties.\n\nAnother critical aspect of the 2025 framework is the heightened scrutiny on the economic substance of these vehicles. Regulators are increasingly looking beyond the legal structure to ensure that core income-generating activities are genuinely conducted within the jurisdiction. For family offices and private equity funds utilizing the VCC model, this means a thorough review of their operational footprints, board compositions, and local staffing requirements. The alignment of a fund's strategic objectives with these substance requirements is no longer a mere compliance exercise; it is a fundamental business imperative.\n\nTo navigate this complex landscape, fund administrators must foster a culture of continuous compliance. Implementing advanced regulatory technology (RegTech) solutions can significantly ease the burden of manual reporting and provide real-time dashboards for monitoring compliance metrics. In conclusion, the 2025 VCC regulatory framework, while rigorous, presents an opportunity for forward-thinking fund managers to solidify their market standing through unparalleled transparency and operational excellence.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      author: "Advisory Team"
    },
    {
      id: 2,
      title: "Optimizing SPV Structures for Cross-Border Investment",
      category: "Corporate Structuring",
      date: "Jun 17, 2026",
      description: "Explore advanced strategies for utilizing Special Purpose Vehicles to mitigate risk and enhance tax efficiency in complex multi-jurisdictional investments.",
      content: "Special Purpose Vehicles (SPVs) remain a critical tool for isolating financial risk and structuring cross-border acquisitions. In today's volatile macroeconomic environment, optimizing these structures is more important than ever. This piece delves into jurisdictional selection, capital deployment strategies, and the tax implications of multi-tiered SPV architectures. By strategically aligning SPVs with bilateral tax treaties, institutional investors can significantly enhance their net yields while ensuring robust legal ring-fencing.\n\nRecent shifts in global minimum tax regulations have further complicated the structuring landscape. Advisors now must navigate the interplay between domestic tax regimes and international frameworks like BEPS 2.0. Our insights highlight how a properly engineered SPV structure can serve not just as a vehicle for tax deferral, but as a robust operational holding structure that facilitates seamless capital exits and asset protection.\n\nThe choice of jurisdiction is paramount. While traditional havens offer administrative simplicity, mid-shore jurisdictions like Singapore and Hong Kong provide a compelling blend of regulatory robustness, extensive tax treaty networks, and deep talent pools. Structuring an SPV through these financial hubs often grants investors greater credibility with international banks and co-investors, significantly streamlining the capital raising and deployment process.\n\nFurthermore, the operational governance of the SPV cannot be overlooked. A purely passive holding company may fail to satisfy the evolving substance requirements of modern tax authorities. It is imperative to establish genuine economic activity at the SPV level. This involves holding regular board meetings, maintaining meticulous financial records, and ensuring that key strategic decisions are demonstrably made within the jurisdiction of incorporation. By integrating robust corporate governance into the SPV architecture, investors can proactively defend against challenges from tax authorities and protect the long-term viability of their cross-border investments.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      author: "Advisory Team"
    },
    {
      id: 3,
      title: "Fund Administration: Best Practices for Audit Readiness",
      category: "Corporate Structuring",
      date: "Jun 10, 2026",
      description: "A comprehensive guide to maintaining robust documentation and internal controls to ensure seamless annual audits for mid-to-large tier investment funds.",
      content: "A seamless audit requires year-round preparation. Fund administrators must establish airtight internal controls, from accurate Net Asset Value (NAV) calculations to meticulous transaction logs. We outline the best practices for maintaining audit readiness, focusing on reconciliation processes, valuation methodologies for illiquid assets, and effective communication with external auditors. Proactive fund administration not only reduces audit friction but also builds trust with Limited Partners.\n\nThe digitalization of fund accounting offers new avenues for real-time compliance checking. From deploying automated bank reconciliations to utilizing blockchain-based ledger systems, forward-thinking fund administrators can significantly reduce human error. Implementing robust compliance platforms early in the fund's lifecycle ensures that by the time an annual audit commences, the required documentation is immediately accessible and accurate.\n\nValuation of illiquid assets remains one of the most challenging aspects of fund administration and a primary focus during the audit process. Best practices dictate the establishment of a robust valuation policy that outlines the methodologies for pricing hard-to-value assets, such as private equity stakes or bespoke credit instruments. This policy must be consistently applied and thoroughly documented. Engaging independent third-party valuation experts can provide an additional layer of assurance and significantly smooth the audit process.\n\nCommunication with auditors should not be a once-a-year event. Establishing a continuous dialogue allows for the early identification and resolution of complex accounting issues. Pre-audit planning sessions are critical for agreeing on the scope of the audit, timelines, and the specific documentation required. By treating the auditor as a partner in the compliance process, rather than an adversary, fund managers can transform the annual audit from a stressful hurdle into a valuable exercise in operational validation and risk management.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      author: "FVC CorpSec"
    },
    {
      id: 4,
      title: "Q4 Institutional Investment Outlook in Asia Pacific",
      category: "Market Trends",
      date: "Jun 03, 2026",
      description: "Analyzing macroeconomic indicators and sector-specific shifts shaping the investment landscape across key APAC financial hubs as we close out the year.",
      content: "As we enter the final quarter of the year, the Asia Pacific region presents a mixed landscape of opportunities and headwinds. Interest rate stabilizing measures are injecting liquidity back into the markets, while geopolitical tensions continue to prompt conservative capital allocation in certain sectors. Our research desk analyzes the performance of real assets, private credit, and deep-tech venture capital across Singapore, Hong Kong, and emerging Southeast Asian markets, providing a strategic roadmap for Q4 deployment.\n\nIn addition to traditional assets, we are witnessing a surge in alternative investment structures, notably in green technology and sustainable infrastructure. Institutional limited partners are increasingly mandating ESG integration within their portfolio companies. This report highlights key growth sectors and offers a strategic framework for risk-adjusted returns in a highly dynamic regulatory environment.\n\nPrivate credit continues to emerge as a dominant asset class within the APAC region. As traditional banking institutions face stricter capital requirements, private credit funds are stepping in to fill the financing gap, offering bespoke lending solutions to mid-market enterprises. This dynamic presents a lucrative opportunity for institutional investors seeking stable, yield-generating assets. However, rigorous credit analysis and robust downside protection mechanisms are essential to navigate the varying legal frameworks across Asian jurisdictions.\n\nThe technological landscape is also undergoing a rapid transformation, with artificial intelligence and advanced manufacturing driving significant venture capital activity. While valuations have recalibrated from their historic highs, the focus has shifted towards startups with sustainable business models and clear paths to profitability. Investors are adopting a more discerning approach, prioritizing rigorous due diligence and demanding greater operational transparency. In this environment, the ability to identify structural trends and execute with precision will be the defining characteristic of successful capital deployment in the APAC region.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      author: "Research Desk"
    },
    {
      id: 5,
      title: "Strategic M&A: Navigating Due Diligence in Tech Startups",
      category: "Advisory",
      date: "May 27, 2026",
      description: "Essential considerations for corporate acquirers when evaluating intellectual property and technical debt during the due diligence phase of tech acquisitions.",
      content: "Acquiring a technology startup involves unique risks that go beyond traditional financial due diligence. Acquirers must meticulously evaluate intellectual property ownership, open-source software compliance, and the scalability of the underlying tech stack. This article outlines a framework for assessing technical debt and cybersecurity vulnerabilities during the M&A process. By identifying these risks early, acquirers can better structure their earn-outs and post-merger integration plans, ensuring the long-term viability of the acquisition.\n\nFurthermore, culture integration presents a hidden challenge in many tech mergers. Beyond the code and the balance sheet, assessing the compatibility of engineering teams and ensuring the retention of key technical talent are paramount. Acquirers must approach technical due diligence not just as an audit, but as a roadmap for future collaborative growth.\n\nIntellectual property (IP) is often the crown jewel of a tech acquisition, yet it is fraught with complexities. Due diligence must verify that the target company unequivocally owns the core technology and that there are no latent claims from former employees or third-party contractors. Additionally, a comprehensive review of open-source software usage is critical. Failure to comply with certain open-source licenses can have devastating consequences, potentially requiring the acquirer to make proprietary source code publicly available. \n\nCybersecurity is another critical pillar of modern due diligence. A data breach can instantly erode the value of an acquisition and expose the acquiring company to significant legal and reputational risks. The due diligence process must include a thorough penetration test of the target's systems, a review of their data privacy protocols, and an assessment of their compliance with relevant regulations such as GDPR or PDPA. By adopting a holistic approach to due diligence that encompasses both technical and operational risks, acquirers can navigate the complexities of tech M&A and unlock the true value of their investments.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      author: "Corporate Advisory"
    }
  ];

  const articles = selectedCategory === "All Insights" 
    ? allArticles 
    : allArticles.filter(a => a.category === selectedCategory);

  const featured = selectedCategory === "All Insights" ? (articles.find(a => a.featured) || articles[0]) : null;
  const regular = selectedCategory === "All Insights" ? articles.filter(a => a.id !== featured?.id) : articles;

  const selectedArticle = allArticles.find(a => a.id === selectedArticleId);
  const otherArticles = allArticles.filter(a => a.id !== selectedArticleId).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Insights & Expertise')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            {t('Expert perspectives on corporate structuring, regulatory compliance, and market trends in the high-end financial services sector.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        
        {selectedArticle ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Expanded Article */}
            <div className="lg:w-2/3 bg-white rounded-xl shadow-md p-8 lg:p-12">
              <button 
                onClick={() => setSelectedArticleId(null)}
                className="flex items-center gap-2 text-primary hover:text-gold transition-colors font-medium mb-8"
              >
                <ArrowLeft className="w-5 h-5" /> {t('Back to Insights')}
              </button>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="font-semibold text-primary">{t(selectedArticle.category)}</span>
                <span>•</span>
                <span>{t(selectedArticle.date)}</span>
                <span>•</span>
                <span>{t('By')} {selectedArticle.author || 'FVCIP Team'}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-primary mb-8 leading-tight">
                {t(selectedArticle.title)}
              </h1>
              
              <div className="h-80 w-full mb-10 rounded-xl overflow-hidden">
                <img src={selectedArticle.image} alt={t(selectedArticle.title)} className="w-full h-full object-cover" />
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                {selectedArticle.content?.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">{t(paragraph)}</p>
                ))}
              </div>
            </div>

            {/* Sidebar of other articles */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-primary mb-2">{t('More Insights')}</h3>
              {otherArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer flex flex-col group"
                  onClick={() => setSelectedArticleId(article.id)}
                >
                  <div className="h-40 relative overflow-hidden">
                    <img src={article.image} alt={t(article.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                      {t(article.category)}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {t(article.title)}
                    </h4>
                    <div className="text-xs text-gray-500 mt-auto pt-4 flex justify-between items-center border-t border-gray-50">
                      <span>{t(article.date)}</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-gold transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featured && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 flex flex-col lg:flex-row cursor-pointer group" onClick={() => setSelectedArticleId(featured.id)}>
                <div className="lg:w-3/5 h-64 lg:h-auto relative overflow-hidden">
                  <img src={featured.image} alt={t(featured.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    {t('Featured')}
                  </div>
                </div>
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span className="font-semibold text-primary">{t(featured.category)}</span>
                    <span>•</span>
                    <span>{t(featured.date)}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4 leading-tight group-hover:text-gold transition-colors">
                    {t(featured.title)}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {t(featured.description)}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold group-hover:text-gold transition-colors w-fit">
                    {t('Read Full Article')} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat, idx) => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                >
                  {t(cat)}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {regular.map((article) => (
                <div key={article.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col cursor-pointer" onClick={() => setSelectedArticleId(article.id)}>
                  <div className="h-64 relative overflow-hidden">
                    <img src={article.image} alt={t(article.title)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                      {t(article.category)}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-sm text-gray-500 mb-3">{t(article.date)}</div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gold transition-colors">
                      {t(article.title)}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {t(article.description)}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                      <span className="text-sm font-medium text-gray-500">{t('By')} {article.author}</span>
                      <button className="text-primary group-hover:text-gold transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
