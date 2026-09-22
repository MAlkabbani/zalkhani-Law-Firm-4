import React from 'react';

const IndexSectionCustomComponents2: React.FC = () => {
    return (
        <section className="relative bg-slate-900 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
  <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
    <div className="absolute inset-0 bg-gradient-to-l from-amber-500/10 to-transparent" />
  </div>
  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-amber-500 text-sm tracking-wide hero-badge" data-en="Since 1968 — Damascus, Syria" data-ar="منذ 1968 — دمشق، سوريا" data-fr="Depuis 1968 — Damas, Syrie">Since 1968 — Damascus, Syria</span>
        </div>
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
          <span className="hero-title-1" data-en="Cross-Border Legal Advisory" data-ar="استشارات قانونية عابرة للحدود" data-fr="Conseil Juridique Transfrontalier">Cross-Border Legal Advisory</span>
          <span className="block text-amber-500 hero-title-2" data-en="& Enterprise Dispute Resolution" data-ar="وحل النزاعات المؤسسية" data-fr="& Résolution de Litiges">&amp; Enterprise Dispute Resolution</span>
        </h1>
        <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl hero-subtitle" data-en="Protecting global investments, commercial transactions, and multi-jurisdictional interests with uncompromised legal precision." data-ar="حماية الاستثمارات العالمية والمعاملات التجارية والمصالح متعددة الولايات القضائية بدقة قانونية لا تتنازل." data-fr="Protéger les investissements mondiaux et les transactions commerciales avec une précision juridique sans compromis.">Protecting global investments, commercial transactions, and multi-jurisdictional interests with uncompromised legal precision.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#" className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="cta-primary" data-en="Schedule Paid Strategy Session" data-ar="جدولة جلسة استراتيجية مدفوعة" data-fr="Planifier une Session Stratégique">Schedule Paid Strategy Session</span>
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-3 border border-slate-600 hover:border-amber-500 text-white hover:text-amber-500 font-medium px-8 py-4 rounded-lg transition-all">
            <span className="cta-secondary" data-en="Explore Practice Areas" data-ar="استكشف مجالات الممارسة" data-fr="Explorer les Domaines">Explore Practice Areas</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-heading text-white">120+</p>
                <p className="text-slate-400 text-sm stat-label" data-en="Cross-Border Transactions" data-ar="معاملات عابرة للحدود" data-fr="Transactions Transfrontalières">Cross-Border Transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-heading text-white">15+</p>
                <p className="text-slate-400 text-sm stat-label" data-en="Multi-Jurisdiction Coverage" data-ar="تغطية متعددة الولايات" data-fr="Couverture Multi-Juridictions">Multi-Jurisdiction Coverage</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-heading text-white">99.8%</p>
                <p className="text-slate-400 text-sm stat-label" data-en="Client Retention Rate" data-ar="معدل الاحتفاظ بالعملاء" data-fr="Taux de Rétention Client">Client Retention Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-3xl font-heading text-white">50+</p>
                <p className="text-slate-400 text-sm stat-label" data-en="Enterprise Corporate Clients" data-ar="عملاء مؤسسات" data-fr="Clients Entreprises">Enterprise Corporate Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;