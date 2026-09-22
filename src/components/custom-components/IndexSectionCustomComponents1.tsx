import React from 'react';

const IndexSectionCustomComponents1: React.FC = () => {
    return (
        <nav className="bg-slate-900 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/30">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l9-3 9 3v12l-9 3-9-3V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18" />
          </svg>
        </div>
        <div>
          <span className="font-heading text-xl text-white tracking-wide">Zalkhani</span>
          <span className="block text-xs text-slate-400 tracking-widest uppercase">Law Firm</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors text-sm tracking-wide nav-link" data-lang="en">Practice Areas</a>
        <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors text-sm tracking-wide nav-link" data-lang="en">International Advisory</a>
        <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors text-sm tracking-wide nav-link" data-lang="en">Attorneys</a>
        <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors text-sm tracking-wide nav-link" data-lang="en">Legal Insights</a>
        <a href="#" className="text-slate-300 hover:text-amber-500 transition-colors text-sm tracking-wide nav-link" data-lang="en">FAQ</a>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative lang-selector">
          <button className="flex items-center gap-2 text-slate-300 hover:text-white text-sm px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700 lang-toggle-btn">
            <span className="current-lang">EN</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl hidden lang-dropdown z-50">
            <button className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors lang-option" data-lang="en">English</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors lang-option" data-lang="ar">العربية</button>
            <button className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors lang-option" data-lang="fr">Français</button>
          </div>
        </div>
        <button className="theme-toggle-btn p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-amber-500 transition-colors">
          <svg className="w-5 h-5 sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg className="w-5 h-5 moon-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <a href="#" className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-5 py-2.5 rounded-lg transition-all transform hover:scale-105 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="cta-text" data-en="Book Consultation" data-ar="احجز استشارة" data-fr="Réserver">Book Consultation</span>
        </a>
      </div>
    </div>
  </div>
</nav>


    );
};

export default IndexSectionCustomComponents1;