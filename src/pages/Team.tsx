import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Jason Su",
      role: "Director",
      linkedin: "https://www.linkedin.com/in/jason-su-wx/",
      image: "/Jason.jpg",
      bio: "Jason oversees cross-border corporate restructuring and strategic deployment of Investment SPVs. With extensive experience in top-tier financial architecture, he ensures rigorous compliance and strategic foresight for our institutional partners across the APAC region."
    },
    {
      name: "Koh Zhee San",
      role: "Head of Corporate Secretary",
      linkedin: "https://www.linkedin.com/in/kon-zhee-san-6529631b6/",
      image: "/Koh_Zhee_San.jpg",
      bio: "Connie leads our VCC and Fund Administration division. Her expertise lies in optimizing operational workflows, rigorous NAV calculations, and managing complex regulatory reporting for multi-jurisdictional family offices and private equity funds."
    },
    {
      name: "Richard Tai",
      role: "Director",
      linkedin: "https://www.linkedin.com/in/peroedy/",
      image: "/Richard.jpg",
      bio: "Richard architects bespoke due diligence frameworks. His deep background in commercial and financial analytics allows him to navigate volatile market data, delivering secure, optimized, and objective M&A insights for our high-net-worth clientele."
    },
    {
      name: "Mervin Lee",
      role: "Director",
      linkedin: "https://www.linkedin.com/in/mervinleezy/",
      image: "/Mervin.jpg",
      bio: "Mervin directs our core BPO operations, encompassing corporate secretarial compliance, enterprise accounting, and state grant applications. He has helped businesses receive more than $S4M in government grants throughout his career, ensuring that our clients' foundational corporate mechanics operate with flawless precision."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Meet Our Experts')}</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            {t('Our leadership team brings together decades of institutional experience across corporate law, structured finance, and complex fund administration.')}
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[3/4] overflow-hidden relative bg-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-gold font-medium text-sm mb-4">{t(member.role)}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {t(member.bio)}
                </p>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-4 mt-auto">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
