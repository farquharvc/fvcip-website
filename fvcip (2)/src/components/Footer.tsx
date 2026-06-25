import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const services = {
    'Speciality Services': [
      { name: 'VCC Corporate Secretary', id: 'vcc-corporate-secretary' },
      { name: 'Investment SPVs', id: 'investment-spvs' },
      { name: 'Fund Administration', id: 'fund-administration' },
    ],
    'Corporate Advisory': [
      { name: 'Financial Due Diligence (FDD)', id: 'financial-due-diligence' },
      { name: 'Commercial Due Diligence (CDD)', id: 'commercial-due-diligence' },
      { name: 'Legal Due Diligence (LDD)', id: 'legal-due-diligence' },
    ],
    'Business Process Outsourcing': [
      { name: 'Corporate Secretarial Services', id: 'corporate-secretarial-services' },
      { name: 'Bookkeeping Services', id: 'bookkeeping-services' },
      { name: 'Tax Filing Services', id: 'tax-filing-services' },
      { name: 'SMEs and Corporate Loan Application', id: 'smes-and-corporate-loan-application' },
      { name: 'Payroll/workpass', id: 'payroll-workpass' },
      { name: 'Application for Government Grant', id: 'application-for-government-grant' },
    ]
  };

  return (
    <footer className="bg-primary-light text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 border border-gray-600 rounded-lg p-6 flex flex-col justify-center">
            <Link to="/" className="inline-block mb-4">
              <div className="font-bold text-2xl tracking-tighter flex items-center">
                <span className="text-white">FVCIP</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('Redefining corporate excellence and bespoke solutions for modern institutions.')}
            </p>
          </div>

          {/* Services Cols */}
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 h-14">{t(category)}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link to={`/services#${item.id}`} className="text-gray-400 hover:text-gold text-sm transition-colors">
                      {t(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company Col */}
          <div>
            <h4 className="text-white font-semibold mb-4 h-14">{t('Company')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold text-sm transition-colors">{t('Home')}</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-gold text-sm transition-colors">{t('Our Team')}</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-gold text-sm transition-colors">{t('Our Portfolio')}</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-gold text-sm transition-colors">{t('Blogs')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold text-sm transition-colors">{t('Contact Us')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FVC Innovation Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
