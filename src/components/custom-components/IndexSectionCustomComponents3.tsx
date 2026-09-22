import React from 'react';

const IndexSectionCustomComponents3: React.FC = () => {
    return (
        <section className="bg-slate-50 dark:bg-slate-800 py-20 lg:py-28 transition-colors">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5">
        <span className="text-amber-600 dark:text-amber-500 text-sm font-semibold tracking-widest uppercase section-label" data-en="Instant Booking" data-ar="حجز فوري" data-fr="Réservation Instantanée">Instant Booking</span>
        <h2 className="font-heading text-3xl lg:text-4xl text-slate-900 dark:text-white mt-4 leading-tight section-title" data-en="Schedule Your Legal Consultation" data-ar="جدولة استشارتك القانونية" data-fr="Planifiez Votre Consultation">Schedule Your Legal Consultation</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed section-desc" data-en="Connect with our senior attorneys for a confidential strategy session. Available in Arabic, English, and French." data-ar="تواصل مع كبار محامينا لجلسة استراتيجية سرية. متوفر باللغات العربية والإنجليزية والفرنسية." data-fr="Connectez-vous avec nos avocats seniors pour une session stratégique confidentielle.">Connect with our senior attorneys for a confidential strategy session. Available in Arabic, English, and French.</p>
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <span className="text-slate-700 dark:text-slate-300 step-text" data-en="Select Practice Area" data-ar="اختر مجال الممارسة" data-fr="Sélectionnez le Domaine">Select Practice Area</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <span className="text-slate-700 dark:text-slate-300 step-text" data-en="Choose Attorney & Time" data-ar="اختر المحامي والوقت" data-fr="Choisissez l'Avocat & l'Heure">Choose Attorney &amp; Time</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <span className="text-slate-700 dark:text-slate-300 step-text" data-en="Secure Consultation Retainer" data-ar="تأمين مبلغ الاستشارة" data-fr="Sécurisez la Provision">Secure Consultation Retainer</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="bg-white dark:bg-slate-700 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-600 overflow-hidden">
          <div className="bg-slate-900 dark:bg-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-slate-400 text-sm">zalkhani.com/book</span>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 form-label" data-en="Practice Area" data-ar="مجال الممارسة" data-fr="Domaine de Pratique">Practice Area</label>
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Corporate &amp; M&amp;A</option>
                  <option>Commercial Arbitration</option>
                  <option>Banking &amp; Finance</option>
                  <option>Real Estate</option>
                  <option>Intellectual Property</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 form-label" data-en="Preferred Attorney" data-ar="المحامي المفضل" data-fr="Avocat Préféré">Preferred Attorney</label>
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Any Available</option>
                  <option>Senior Partner</option>
                  <option>Associate Partner</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 form-label" data-en="Select Date" data-ar="اختر التاريخ" data-fr="Sélectionner la Date">Select Date</label>
              <div className="grid grid-cols-7 gap-2">
                <div className="text-center py-2 text-slate-400 text-xs">Mon</div>
                <div className="text-center py-2 text-slate-400 text-xs">Tue</div>
                <div className="text-center py-2 text-slate-400 text-xs">Wed</div>
                <div className="text-center py-2 text-slate-400 text-xs">Thu</div>
                <div className="text-center py-2 text-slate-400 text-xs">Fri</div>
                <div className="text-center py-2 text-slate-400 text-xs">Sat</div>
                <div className="text-center py-2 text-slate-400 text-xs">Sun</div>
                <div className="text-center py-2 text-slate-400 text-sm">12</div>
                <div className="text-center py-2 text-slate-700 dark:text-slate-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-500/20 rounded cursor-pointer">13</div>
                <div className="text-center py-2 text-slate-700 dark:text-slate-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-500/20 rounded cursor-pointer">14</div>
                <div className="text-center py-2 bg-amber-500 text-slate-900 text-sm rounded font-semibold">15</div>
                <div className="text-center py-2 text-slate-700 dark:text-slate-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-500/20 rounded cursor-pointer">16</div>
                <div className="text-center py-2 text-slate-400 text-sm">17</div>
                <div className="text-center py-2 text-slate-400 text-sm">18</div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="trust-badge" data-en="Encrypted & Secure" data-ar="مشفر وآمن" data-fr="Crypté & Sécurisé">Encrypted &amp; Secure</span>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                <span className="confirm-btn" data-en="Confirm Booking" data-ar="تأكيد الحجز" data-fr="Confirmer">Confirm Booking</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents3;