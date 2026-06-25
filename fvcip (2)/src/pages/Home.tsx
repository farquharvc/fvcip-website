import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const latestBlogs = [
    {
      id: 1,
      title: "Navigating VCC Frameworks in 2024",
      category: "Regulatory Update",
      description: "A comprehensive guide to leveraging the Variable Capital Company structure for institutional wealth management.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Strategic SPV Deployment for Cross-Border Assets",
      category: "Market Strategy",
      description: "Optimizing tax efficiency and liability management through sophisticated Special Purpose Vehicle architectures.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "SME Lending Dynamics in a High-Rate Environment",
      category: "Corporate Finance",
      description: "Analyzing alternative credit solutions and structuring debt for mid-market corporate expansion.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80" 
            alt="Singapore Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('Redefining Corporate Excellence')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              {t('Empowering visionary enterprises with institutional-grade corporate frameworks and bespoke strategic solutions.')}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary font-semibold px-8 py-4 rounded-sm transition-colors"
            >
              {t('Consult With Us')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('Elevating Corporate Governance')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('FVC Innovation Partners (FVCIP) provides bespoke corporate solutions designed to navigate complex regulatory landscapes. As a proud portfolio company of FVC, we combine deep institutional expertise with agile operational execution to accelerate your enterprise growth.')}
          </p>
        </div>
      </section>

      {/* Blogs Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">{t('Our Insights')}</h2>
              <p className="text-gray-600">{t('Expert perspectives on corporate structuring, regulatory changes, and market trends.')}</p>
            </div>
            <Link to="/blogs" className="hidden md:flex items-center gap-2 text-gold hover:text-primary font-medium transition-colors">
              {t('View All Insights')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map(blog => (
              <Link to="/blogs" key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={t(blog.title)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 block">{t(blog.category)}</span>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-colors">{t(blog.title)}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{t(blog.description)}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('Read More')} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-gold hover:text-primary font-medium transition-colors">
              {t('View All Insights')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
