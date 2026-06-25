import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const portfolioCompanies = [
    {
      name: "Equatorial Space Systems",
      description: "Equatorial Space Systems (ESS), is a pioneering deep-tech startup specialising in low-cost, eco-friendly rocket propulsion and launch services via an innovative hybrid-propulsion system. The global market for space launch services is on a robust growth trajectory, projected to expand from USD 23.9 billion in 2025 to USD 78.0 billion by 2033, at a CAGR of 15.9%.",
      logo: "/ess-logo.png",
      fallback: "ESS"
    },
    {
      name: "EMERGE",
      description: "EMERGE is a Singapore-based Marketing Technology (Martech) and Web3 commercialisation company operating two core business segments: Emplifive, a developing SaaS platform, and a cash-generative marketing and consultancy business focused primarily on Web3 clients. Following the structural decline of the esports sector, EMERGE exited its legacy B2C esports merchandising arm (Empower) and repositioned the group around marketing services in the near term, with Emplifive positioned as a longer-term SaaS growth initiative.",
      logo: "/emerge-logo.png",
      fallback: "EMERGE"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Proven Excellence')}</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            {t('A curated showcase of our successful institutional partnerships, SPV deployments, and corporate advisory engagements.')}
          </p>
        </div>
      </div>

      {/* Portfolio Companies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t('Highlighted Engagements')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioCompanies.map((company) => (
            <div key={company.name} className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="h-24 flex items-center justify-center mb-8 border-b border-gray-100 pb-8 gap-4">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className={`w-auto object-contain ${company.name === 'Equatorial Space Systems' ? 'h-24 max-w-[240px]' : 'h-16 max-w-[200px]'}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <div className="text-3xl font-black text-primary tracking-tighter text-center" style={{ display: 'none' }}>
                  {company.name}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {t(company.description)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Reviews */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">{t('Client Testimonials')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-6 left-6 text-gold opacity-20 w-12 h-12" />
              <p className="text-gray-700 italic relative z-10 text-lg leading-relaxed mb-6 pt-4">
                {t('"FVCIP\'s bespoke approach to our fund structuring was exceptional. Their precision and deep understanding of cross-border regulations ensured a seamless setup for our multi-family office umbrella VCC."')}
              </p>
              <div>
                <p className="font-bold text-primary">{t('Managing Director')}</p>
                <p className="text-sm text-gold">{t('Global Multi-Family Office')}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-6 left-6 text-gold opacity-20 w-12 h-12" />
              <p className="text-gray-700 italic relative z-10 text-lg leading-relaxed mb-6 pt-4">
                {t('"The team at FVCIP delivered unmatched precision in deploying our SPV network. Their bespoke service and proactive problem-solving made them an invaluable institutional partner during our recent acquisition."')}
              </p>
              <div>
                <p className="font-bold text-primary">{t('Partner')}</p>
                <p className="text-sm text-gold">{t('Leading Private Equity Firm')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
