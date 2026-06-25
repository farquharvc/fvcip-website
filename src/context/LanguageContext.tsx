import React, { createContext, useContext, useState } from 'react';

export type Language = 'EN' | 'CN';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, string> = {
  // Navigation
  "Home": "首页",
  "Our Services": "我们的服务",
  "Our Team": "我们的团队",
  "Our Portfolio": "我们的投资组合",
  "Blogs": "博客",
  "Contact Us": "联系我们",
  
  // Services Categories
  "Speciality Services": "特色服务",
  "Corporate Advisory": "企业咨询",
  "Business Process Outsourcing": "业务流程外包",
  
  // Services Items
  "VCC Corporate Secretary": "VCC 公司秘书",
  "Investment SPVs": "投资特殊目的公司(SPV)",
  "Fund Administration": "基金行政管理",
  "Financial Due Diligence (FDD)": "财务尽职调查(FDD)",
  "Commercial Due Diligence (CDD)": "商业尽职调查(CDD)",
  "Legal Due Diligence (LDD)": "法律尽职调查(LDD)",
  "Corporate Secretarial Services": "企业秘书服务",
  "Bookkeeping Services": "簿记服务",
  "Tax Filing Services": "税务申报服务",
  "SMEs and Corporate Loan Application": "中小企业和企业贷款申请",
  "Payroll/workpass": "工资单/工作准证",
  "Application for Government Grant": "政府补助金申请",

  // Home Page
  "Redefining Corporate Excellence": "重新定义企业卓越",
  "Empowering visionary enterprises with institutional-grade corporate frameworks and bespoke strategic solutions.": "为有远见的企业提供机构级企业框架和定制化战略解决方案。",
  "Consult With Us": "与我们咨询",
  "Elevating Corporate Governance": "提升企业治理",
  "FVC Innovation Partners (FVCIP) provides bespoke corporate solutions designed to navigate complex regulatory landscapes. As a proud portfolio company of FVC, we combine deep institutional expertise with agile operational execution to accelerate your enterprise growth.": "FVC Innovation Partners (FVCIP) 提供定制的企业解决方案，旨在应对复杂的监管环境。作为 FVC 引以为豪的投资组合公司，我们将深厚的机构专业知识与敏捷的运营执行相结合，以加速您的企业发展。",
  "Our Insights": "我们的见解",
  "Expert perspectives on corporate structuring, regulatory changes, and market trends.": "关于企业重组、监管变化和市场趋势的专家观点。",
  "View All Insights": "查看所有见解",
  "Regulatory Update": "监管更新",
  "Navigating VCC Frameworks in 2024": "2024 年驾驭 VCC 框架",
  "A comprehensive guide to leveraging the Variable Capital Company structure for institutional wealth management.": "利用可变资本公司结构进行机构财富管理的综合指南。",
  "Market Strategy": "市场策略",
  "Strategic SPV Deployment for Cross-Border Assets": "跨境资产的战略性 SPV 部署",
  "Optimizing tax efficiency and liability management through sophisticated Special Purpose Vehicle architectures.": "通过复杂的特殊目的公司架构优化税务效率和债务管理。",
  "Corporate Finance": "企业融资",
  "SME Lending Dynamics in a High-Rate Environment": "高利率环境下的中小企业贷款动态",
  "Analyzing alternative credit solutions and structuring debt for mid-market corporate expansion.": "分析替代信贷解决方案并为中型企业扩张构建债务。",
  "Read More": "阅读更多",

  // Services Page
  "Comprehensive Corporate Architecture": "全面的企业架构",
  "End-to-end corporate solutions designed for rigorous compliance, operational efficiency, and sustained growth.": "专为严格合规、运营效率和持续增长而设计的端到端企业解决方案。",
  "Bespoke corporate architecture for advanced institutional structures.": "为高级机构结构量身定制的企业架构。",
  "Strategic guidance built on rigorous financial and legal analysis.": "建立在严格的财务和法律分析基础上的战略指导。",
  "Core operational functions handled with unmatched precision.": "以无与伦比的精度处理核心运营功能。",
  "Our specialized Variable Capital Company (VCC) corporate secretarial services ensure strict adherence to the Monetary Authority of Singapore (MAS) and Accounting and Corporate Regulatory Authority (ACRA) mandates. We manage the intricate statutory lifecycle of umbrella and standalone VCCs, overseeing sub-fund registrations, compliance with anti-money laundering (AML) regulations, and rigorous governance standards tailored for complex fund structures.": "我们专业的互变资本公司 (VCC) 企业秘书服务确保严格遵守新加坡金融管理局 (MAS) 和会计与企业管制局 (ACRA) 的要求。我们管理伞形和独立 VCC 复杂的法定生命周期，监督子基金注册、遵守反洗钱 (AML) 法规以及为复杂基金结构量身定制的严格治理标准。",
  "We facilitate the swift and compliant establishment and administration of Special Purpose Vehicles (SPVs). Our team provides the structural integrity required for isolated risk, distinct asset management, and streamlined cross-border investment operations, ensuring your holding companies are optimized for tax efficiency and legal protection.": "我们促进快速、合规地建立和管理特殊目的实体 (SPV)。我们的团队提供隔离风险、独特资产管理和简化的跨境投资运营所需的结构完整性，确保您的控股公司优化税务效率和法律保护。",
  "Delivering comprehensive fund administration encompassing accurate Net Asset Value (NAV) calculation, detailed investor reporting, and meticulous unitholder registry management. We empower fund managers to focus on alpha generation by providing transparent, institutional-grade middle and back-office support that satisfies the rigorous demands of institutional investors and auditors.": "提供全面的基金行政管理，包括准确的资产净值 (NAV) 计算、详细的投资者报告和细致的单位持有人名册管理。我们通过提供透明的、机构级的中后台支持来满足机构投资者和审计师的严格要求，从而使基金经理能够专注于产生阿尔法收益。",
  "Our Financial Due Diligence practice provides deep-dive analysis into the financial health of target entities. We scrutinize historical earnings, evaluate cash flow sustainability, identify hidden liabilities, and assess working capital requirements, arming acquirers with the critical insights needed to accurately value transactions and mitigate financial risk.": "我们的财务尽职调查实践深入分析目标实体的财务状况。我们审查历史收益、评估现金流可持续性、识别隐藏债务并评估营运资金需求，为收购方提供准确定价交易和降低财务风险所需的关键见解。",
  "We deliver objective evaluations of a target company's market positioning and commercial viability. Our Commercial Due Diligence covers competitive landscape analysis, customer sentiment, revenue projection viability, and industry headwinds, ensuring your investment thesis is supported by robust, real-world market data.": "我们客观评估目标公司的市场定位和商业可行性。我们的商业尽职调查涵盖竞争格局分析、客户情绪、收入预测的可行性以及行业阻力，确保您的投资论点得到强有力的现实市场数据的支持。",
  "Our Legal Due Diligence services proactively identify regulatory exposure, contractual obligations, and potential litigation risks. We meticulously review intellectual property rights, employment contracts, material agreements, and corporate structures to safeguard your investments against unforeseen legal complications post-acquisition.": "我们的法律尽职调查服务主动识别监管风险、合同义务和潜在的诉讼风险。我们仔细审查知识产权、雇佣合同、重要协议和公司结构，以保护您的投资免受收购后不可预见的法律复杂性的影响。",
  "Ensure seamless ongoing compliance with our foundational corporate secretarial services. We handle routine statutory filings, maintain statutory registers, coordinate Annual General Meetings (AGMs), and manage board resolutions, guaranteeing that your entity remains in exemplary standing with local authorities.": "通过我们基础的企业秘书服务确保无缝的持续合规性。我们处理常规的法定文件、维护法定名册、协调年度股东大会 (AGM) 并管理董事会决议，保证您的实体在地方当局保持良好的信誉。",
  "Maintain immaculate financial records with our outsourced bookkeeping services. We provide accurate ledger management, bank reconciliations, accounts payable/receivable tracking, and timely management reporting, utilizing cloud-based accounting software to give you real-time visibility into your corporate finances.": "通过我们外包的簿记服务，保持无瑕的财务记录。我们提供准确的账本管理、银行对账、应付/应收账款跟踪以及及时的管理报告，利用基于云的会计软件，为您提供对公司财务的实时可见性。",
  "Navigate complex tax regimes with confidence. Our tax specialists manage your corporate tax computations, optimize allowable deductions, and ensure timely filing of Estimated Chargeable Income (ECI) and Form C-S/C, minimizing tax liabilities while strictly adhering to the Inland Revenue Authority of Singapore (IRAS) guidelines.": "自信地应对复杂的税收制度。我们的税务专家管理您的企业税计算，优化允许的扣除额，并确保及时申报预估应纳税收入 (ECI) 和表格 C-S/C，从而在严格遵守新加坡国内税务局 (IRAS) 指南的同时最大限度地减少税务责任。",
  "Accelerate your enterprise financing with expert loan application facilitation. We assist in structuring loan proposals, preparing comprehensive business plans and financial projections, and navigating the specific requirements of commercial banks and enterprise financing schemes to secure optimal funding terms.": "通过专业的贷款申请便利化，加速您的企业融资。我们协助构建贷款建议书、准备全面的商业计划和财务预测，并满足商业银行和企业融资计划的具体要求，以确保最佳的融资条件。",
  "Streamline your human capital management with our integrated payroll and work pass solutions. We execute secure wage calculations, manage CPF contributions, handle IR8A tax reporting, and facilitate the end-to-end application, renewal, and cancellation processes for Employment Passes (EP) and S Passes.": "通过我们综合的薪资和工作准证解决方案，简化您的人力资本管理。我们执行安全的工资计算、管理 CPF 缴款、处理 IR8A 税务报告，并协助处理就业准证 (EP) 和 S 准证的端到端申请、更新和取消流程。",
  "Capitalize on available state aid with our grant application services. We identify suitable government schemes (such as the Enterprise Development Grant), assist in drafting compelling project proposals, and ensure compliance with stringent audit requirements to successfully unlock funding for your innovation and expansion initiatives.": "利用我们的赠款申请服务，充分利用现有的国家援助。我们确定合适的政府计划（例如企业发展补助金），协助起草引人注目的项目提案，并确保符合严格的审计要求，以成功为您​​的创新和扩展计划解锁资金。",

  // Team Page
  "Meet Our Experts": "认识我们的专家",
  "Our leadership team brings together decades of institutional experience across corporate law, structured finance, and complex fund administration.": "我们的领导团队汇集了企业法、结构化融资和复杂基金管理领域数十年的机构经验。",
  "Managing Partner, Strategy": "管理合伙人，战略",
  "Head of Fund Administration": "基金行政管理主管",
  "Director, Corporate Advisory": "总监，企业咨询",
  "Head of Business Process Outsourcing": "业务流程外包主管",
  "Jason oversees cross-border corporate restructuring and strategic deployment of Investment SPVs. With extensive experience in top-tier financial architecture, he ensures rigorous compliance and strategic foresight for our institutional partners across the APAC region.": "Jason 负责跨境企业重组和投资特殊目的公司的战略部署。凭借在顶级金融架构方面的丰富经验，他确保我们亚太地区的机构合作伙伴严格遵守合规性并具有战略远见。",
  "Connie leads our VCC and Fund Administration division. Her expertise lies in optimizing operational workflows, rigorous NAV calculations, and managing complex regulatory reporting for multi-jurisdictional family offices and private equity funds.": "Connie 领导我们的 VCC 和基金行政管理部门。她的专长在于优化运营工作流程、严格计算资产净值以及管理涉及多个司法管辖区的家族办公室和私募股权基金的复杂监管报告。",
  "Richard architects bespoke due diligence frameworks. His deep background in commercial and financial analytics allows him to navigate volatile market data, delivering secure, optimized, and objective M&A insights for our high-net-worth clientele.": "Richard 构建定制的尽职调查框架。他在商业和金融分析方面的深厚背景使他能够应对波动的市场数据，为我们的高净值客户提供安全、优化和客观的并购洞察力。",
  "Mervin directs our core BPO operations, encompassing corporate secretarial compliance, enterprise accounting, and state grant applications. He ensures that our clients' foundational corporate mechanics operate with flawless precision.": "Mervin 指导我们的核心 BPO 运营，包括企业秘书合规、企业会计和国家补助金申请。他确保我们客户的基础企业机制以完美的精度运行。",

  // Portfolio Page
  "Proven Excellence": "卓越的证明",
  "A curated showcase of our successful institutional partnerships, SPV deployments, and corporate advisory engagements.": "我们成功的机构合作伙伴关系、特殊目的公司部署和企业咨询项目的精选展示。",
  "Highlighted Engagements": "重点项目",
  "Equatorial Space Systems (ESS), is a pioneering deep-tech startup specialising in low-cost, eco-friendly rocket propulsion and launch services via an innovative hybrid-propulsion system. The global market for space launch services is on a robust growth trajectory, projected to expand from USD 23.9 billion in 2025 to USD 78.0 billion by 2033, at a CAGR of 15.9%.": "赤道太空系统公司 (ESS) 是一家开创性的深科技初创公司，专门通过创新的混合动力推进系统提供低成本、环保的火箭推进和发射服务。全球太空发射服务市场正处于强劲的增长轨道上，预计将从 2025 年的 239 亿美元扩大到 2033 年的 780 亿美元，复合年增长率为 15.9%。",
  "EMERGE is a Singapore-based Marketing Technology (Martech) and Web3 commercialisation company operating two core business segments: (i) Emplifive, a developing SaaS platform, and (ii) a cash-generative marketing and consultancy business focused primarily on Web3 clients. Following the structural decline of the esports sector, EMERGE exited its legacy B2C esports merchandising arm (Empower) and repositioned the group around marketing services in the near term, with Emplifive positioned as a longer-term SaaS growth initiative.": "EMERGE 是一家总部位于新加坡的营销技术 (Martech) 和 Web3 商业化公司，经营两大核心业务板块：(i) Emplifive，一个发展中的 SaaS 平台；(ii) 主要专注于 Web3 客户的产生现金流的营销和咨询业务。随着电子竞技行业的结构性下滑，EMERGE 退出了其传统的 B2C 电子竞技商品销售部门 (Empower)，并在短期内将集团重新定位为以营销服务为核心，而 Emplifive 则定位为长期的 SaaS 增长计划。",
  "Client Testimonials": "客户评价",
  "\"FVCIP's bespoke approach to our fund structuring was exceptional. Their precision and deep understanding of cross-border regulations ensured a seamless setup for our multi-family office umbrella VCC.\"": "“FVCIP 对我们基金结构的定制化方法非常出色。他们对跨境法规的精准把握和深刻理解确保了我们的联合家族办公室保护伞 VCC 的无缝建立。”",
  "Managing Director": "董事总经理",
  "Global Multi-Family Office": "全球联合家族办公室",
  "\"The team at FVCIP delivered unmatched precision in deploying our SPV network. Their bespoke service and proactive problem-solving made them an invaluable institutional partner during our recent acquisition.\"": "“FVCIP 团队在部署我们的 SPV 网络方面展现了无与伦比的精准度。在最近的收购中，他们定制化的服务和积极主动解决问题的态度使他们成为了宝贵的机构合作伙伴。”",
  "Partner": "合伙人",
  "Leading Private Equity Firm": "领先私募股权公司",

  // Blogs Page
  "Insights & Expertise": "见解与专业知识",
  "Expert perspectives on corporate structuring, regulatory compliance, and market trends in the high-end financial services sector.": "关于高端金融服务领域的企业重组、监管合规和市场趋势的专家观点。",
  "Compliance": "合规",
  "Navigating the New VCC Regulatory Framework in 2025": "驾驭 2025 年新的 VCC 监管框架",
  "An in-depth analysis of the upcoming regulatory shifts affecting Variable Capital Companies, offering strategic foresight for fund managers and institutional investors preparing for compliance audits.": "深入分析即将影响可变资本公司的监管转变，为准备合规审计的基金经理和机构投资者提供战略远见。",
  "Structuring": "重组",
  "Optimizing SPV Structures for Cross-Border Investment": "优化跨境投资的 SPV 结构",
  "Explore advanced strategies for utilizing Special Purpose Vehicles to mitigate risk and enhance tax efficiency in complex multi-jurisdictional investments.": "探索在复杂的跨司法管辖区投资中利用特殊目的实体降低风险和提高税务效率的先进策略。",
  "Fund Administration: Best Practices for Audit Readiness": "基金行政管理：审计准备的最佳实践",
  "A comprehensive guide to maintaining robust documentation and internal controls to ensure seamless annual audits for mid-to-large tier investment funds.": "维护完善文档和内部控制以确保中大型投资基金顺利进行年度审计的综合指南。",
  "Market Trends": "市场趋势",
  "Q4 Institutional Investment Outlook in Asia Pacific": "亚太地区第四季度机构投资展望",
  "Analyzing macroeconomic indicators and sector-specific shifts shaping the investment landscape across key APAC financial hubs as we close out the year.": "在即将结束今年之际，分析塑造主要亚太金融中心投资格局的宏观经济指标和特定行业的转变。",
  "Advisory": "咨询",
  "Strategic M&A: Navigating Due Diligence in Tech Startups": "战略并购：驾驭科技初创公司的尽职调查",
  "Essential considerations for corporate acquirers when evaluating intellectual property and technical debt during the due diligence phase of tech acquisitions.": "企业收购方在科技并购尽职调查阶段评估知识产权和技术债务时的基本注意事项。",
  "Read Full Article": "阅读全文",
  "Featured": "精选",
  "All Insights": "所有见解",
  "VCC Regulations": "VCC 法规",
  "By ": "作者 ",
  "Advisory Team": "咨询团队",
  "FVC CorpSec": "FVC 企业秘书",
  "Research Desk": "研究部",
  "Corporate Advisory": "企业咨询团队",

  "By": "作者",
  "Please detail your structural requirements or advisory needs...": "请详细说明您的结构要求或咨询需求...",
  "Something went wrong. Please try again.": "发生错误。请重试。",
  "Network error occurred. Please try again.": "发生网络错误。请重试。",
  // Contact Page
  "Initiate a Conversation": "发起对话",
  "Connect with our executive team to discuss how FVC Innovation Partners can elevate your institutional framework. Precision and confidentiality are guaranteed.": "联系我们的执行团队，讨论 FVC Innovation Partners 如何提升您的机构框架。保证精确和保密。",
  "Send a Secure Message": "发送安全信息",
  "Message Sent Successfully": "信息已成功发送",
  "Thank you for reaching out. Our team will review your inquiry and respond promptly.": "感谢您的联系。我们的团队将审查您的询问并迅速回复。",
  "Send another message": "发送另一条信息",
  "Full Name": "全名",
  "Company / Organization": "公司 / 机构",
  "Corporate Email": "企业邮箱",
  "Inquiry Details": "查询详情",
  "Submitting...": "正在提交...",
  "Submit Inquiry": "提交查询",
  "Global Headquarters": "全球总部",
  "Company": "公司",
  "FVCIP": "FVCIP",
  "Redefining corporate excellence and bespoke solutions for modern institutions.": "重新定义现代机构的企业卓越和定制解决方案。",
  "Singapore": "新加坡"
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  toggleLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'CN' : 'EN'));
  };

  const t = (key: string) => {
    if (language === 'EN') return key;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
