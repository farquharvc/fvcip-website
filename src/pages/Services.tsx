import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Briefcase, Building2, Calculator, CheckSquare, FileText, Landmark, PieChart, Users, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { hash } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // slight timeout to ensure page layout is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const serviceCategories = [
    {
      title: "Speciality Services",
      description: "Bespoke corporate architecture for advanced institutional structures.",
      icon: <Network className="w-8 h-8 text-gold" />,
      items: [
        {
          id: "vcc-corporate-secretary",
          title: "VCC Corporate Secretary",
          icon: <Landmark className="w-6 h-6" />,
          content: "Our specialized Variable Capital Company (VCC) corporate secretarial services ensure strict adherence to the Monetary Authority of Singapore (MAS) and Accounting and Corporate Regulatory Authority (ACRA) mandates. We manage the intricate statutory lifecycle of umbrella and standalone VCCs, overseeing sub-fund registrations, compliance with anti-money laundering (AML) regulations, and rigorous governance standards tailored for complex fund structures."
        },
        {
          id: "investment-spvs",
          title: "Investment SPVs",
          icon: <Building2 className="w-6 h-6" />,
          content: "We facilitate the swift and compliant establishment and administration of Special Purpose Vehicles (SPVs). Our team provides the structural integrity required for isolated risk, distinct asset management, and streamlined cross-border investment operations, ensuring your holding companies are optimized for tax efficiency and legal protection."
        },
        {
          id: "fund-administration",
          title: "Fund Administration",
          icon: <PieChart className="w-6 h-6" />,
          content: "Delivering comprehensive fund administration encompassing accurate Net Asset Value (NAV) calculation, detailed investor reporting, and meticulous unitholder registry management. We empower fund managers to focus on alpha generation by providing transparent, institutional-grade middle and back-office support that satisfies the rigorous demands of institutional investors and auditors."
        }
      ]
    },
    {
      title: "Corporate Advisory",
      description: "Strategic guidance built on rigorous financial and legal analysis.",
      icon: <Briefcase className="w-8 h-8 text-gold" />,
      items: [
        {
          id: "financial-due-diligence",
          title: "Financial Due Diligence (FDD)",
          icon: <Calculator className="w-6 h-6" />,
          content: "Our Financial Due Diligence practice provides deep-dive analysis into the financial health of target entities. We scrutinize historical earnings, evaluate cash flow sustainability, identify hidden liabilities, and assess working capital requirements, arming acquirers with the critical insights needed to accurately value transactions and mitigate financial risk."
        },
        {
          id: "commercial-due-diligence",
          title: "Commercial Due Diligence (CDD)",
          icon: <PieChart className="w-6 h-6" />,
          content: "We deliver objective evaluations of a target company's market positioning and commercial viability. Our Commercial Due Diligence covers competitive landscape analysis, customer sentiment, revenue projection viability, and industry headwinds, ensuring your investment thesis is supported by robust, real-world market data."
        },
        {
          id: "legal-due-diligence",
          title: "Legal Due Diligence (LDD)",
          icon: <FileText className="w-6 h-6" />,
          content: "Our Legal Due Diligence services proactively identify regulatory exposure, contractual obligations, and potential litigation risks. We meticulously review intellectual property rights, employment contracts, material agreements, and corporate structures to safeguard your investments against unforeseen legal complications post-acquisition."
        }
      ]
    },
    {
      title: "Business Process Outsourcing",
      description: "Core operational functions handled with unmatched precision.",
      icon: <Users className="w-8 h-8 text-gold" />,
      items: [
        {
          id: "corporate-secretarial-services",
          title: "Corporate Secretarial Services",
          icon: <FileText className="w-6 h-6" />,
          content: "Ensure seamless ongoing compliance with our foundational corporate secretarial services. We handle routine statutory filings, maintain statutory registers, coordinate Annual General Meetings (AGMs), and manage board resolutions, guaranteeing that your entity remains in exemplary standing with local authorities."
        },
        {
          id: "bookkeeping-services",
          title: "Bookkeeping Services",
          icon: <CheckSquare className="w-6 h-6" />,
          content: "Maintain immaculate financial records with our outsourced bookkeeping services. We provide accurate ledger management, bank reconciliations, accounts payable/receivable tracking, and timely management reporting, utilizing cloud-based accounting software to give you real-time visibility into your corporate finances."
        },
        {
          id: "tax-filing-services",
          title: "Tax Filing Services",
          icon: <Calculator className="w-6 h-6" />,
          content: "Navigate complex tax regimes with confidence. Our tax specialists manage your corporate tax computations, optimize allowable deductions, and ensure timely filing of Estimated Chargeable Income (ECI) and Form C-S/C, minimizing tax liabilities while strictly adhering to the Inland Revenue Authority of Singapore (IRAS) guidelines."
        },
        {
          id: "smes-and-corporate-loan-application",
          title: "SMEs and Corporate Loan Application",
          icon: <Landmark className="w-6 h-6" />,
          content: "Accelerate your enterprise financing with expert loan application facilitation. We assist in structuring loan proposals, preparing comprehensive business plans and financial projections, and navigating the specific requirements of commercial banks and enterprise financing schemes to secure optimal funding terms."
        },
        {
          id: "payroll-workpass",
          title: "Payroll/workpass",
          icon: <Users className="w-6 h-6" />,
          content: "Streamline your human capital management with our integrated payroll and work pass solutions. We execute secure wage calculations, manage CPF contributions, handle IR8A tax reporting, and facilitate the end-to-end application, renewal, and cancellation processes for Employment Passes (EP) and S Passes."
        },
        {
          id: "application-for-government-grant",
          title: "Application for Government Grant",
          icon: <Briefcase className="w-6 h-6" />,
          content: "Capitalize on available state aid with our grant application services. We identify suitable government schemes (such as the Enterprise Development Grant), assist in drafting compelling project proposals, and ensure compliance with stringent audit requirements to successfully unlock funding for your innovation and expansion initiatives."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Comprehensive Corporate Architecture')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {t('End-to-end corporate solutions designed for rigorous compliance, operational efficiency, and sustained growth.')}
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-primary-light p-8 flex items-center gap-4">
                {category.icon}
                <div>
                  <h2 className="text-2xl font-bold text-white">{t(category.title)}</h2>
                  <p className="text-gray-300 mt-1">{t(category.description)}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {category.items.map((item) => (
                    <div id={item.id} key={item.id} className="scroll-mt-32">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gray-50 rounded-lg text-primary">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary">{t(item.title)}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {t(item.content)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
