import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage } = useLanguage();

  const services = {
    'Signature Services': [
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
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 mt-2">
            <img 
              src="/logo.png" 
              alt="FVCIP Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="text-primary font-bold text-2xl tracking-tighter items-center gap-2 hidden">
              <span className="text-gold">FVC</span>
              <span className="hidden sm:inline">INNOVATION PARTNERS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mt-2">
            <Link to="/" className={cn("text-sm font-medium hover:text-gold transition-colors", location.pathname === '/' ? "text-gold" : "text-primary")}>
              {t('Home')}
            </Link>
            
            <div className="relative group h-20 flex items-center">
              <Link to="/services" className={cn("text-sm font-medium hover:text-gold transition-colors flex items-center gap-1", location.pathname === '/services' ? "text-gold" : "text-primary")}>
                {t('Our Services')} <ChevronDown className="w-4 h-4" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-8 grid grid-cols-3 gap-8 rounded-b-lg">
                {Object.entries(services).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="font-bold text-primary mb-4 border-b border-gray-100 pb-2 whitespace-nowrap">{t(category)}</h3>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link to={`/services#${item.id}`} className="text-sm text-gray-600 hover:text-gold transition-colors block">
                            {t(item.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/team" className={cn("text-sm font-medium hover:text-gold transition-colors", location.pathname === '/team' ? "text-gold" : "text-primary")}>
              {t('Our Team')}
            </Link>
            <Link to="/portfolio" className={cn("text-sm font-medium hover:text-gold transition-colors", location.pathname === '/portfolio' ? "text-gold" : "text-primary")}>
              {t('Our Portfolio')}
            </Link>
            <Link to="/blogs" className={cn("text-sm font-medium hover:text-gold transition-colors", location.pathname === '/blogs' ? "text-gold" : "text-primary")}>
              {t('Blogs')}
            </Link>
            <Link to="/contact" className={cn("text-sm font-medium hover:text-gold transition-colors", location.pathname === '/contact' ? "text-gold" : "text-primary")}>
              {t('Contact Us')}
            </Link>
          </div>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center gap-4 mt-2">
            <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors border border-gray-200 px-3 py-1.5 rounded-md cursor-pointer">
              <Globe className="w-4 h-4" />
              EN/CN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-gold">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Home')}</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Our Services')}</Link>
            <Link to="/team" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Our Team')}</Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Our Portfolio')}</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Blogs')}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary hover:bg-gray-50 rounded-md">{t('Contact Us')}</Link>
            <button onClick={toggleLanguage} className="w-full text-left px-3 py-2 text-primary hover:bg-gray-50 rounded-md flex items-center gap-2">
              <Globe className="w-4 h-4" />
              EN/CN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
