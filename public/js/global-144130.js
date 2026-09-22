(function() {
  const init = () => {
    // Language Selector
    const langSelectors = document.querySelectorAll('.lang-selector');
    langSelectors.forEach(selector => {
      const toggleBtn = selector.querySelector('.lang-toggle-btn');
      const dropdown = selector.querySelector('.lang-dropdown');
      const options = selector.querySelectorAll('.lang-option');
      const currentLang = selector.querySelector('.current-lang');

      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });

      options.forEach(option => {
        option.addEventListener('click', () => {
          const lang = option.dataset.lang;
          currentLang.textContent = lang.toUpperCase();
          dropdown.classList.add('hidden');
          updateLanguage(lang);
        });
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.add('hidden'));
    });

    // Update Language Function
    function updateLanguage(lang) {
      const isRTL = lang === 'ar';
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;

      const elements = document.querySelectorAll('[data-' + lang + ']');
      elements.forEach(el => {
        const text = el.dataset[lang];
        if (text) {
          el.textContent = text;
        }
      });
    }

    // Theme Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    let isDark = false;

    themeToggles.forEach(toggle => {
      const sunIcon = toggle.querySelector('.sun-icon');
      const moonIcon = toggle.querySelector('.moon-icon');

      toggle.addEventListener('click', () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        sunIcon.classList.toggle('hidden', isDark);
        moonIcon.classList.toggle('hidden', !isDark);
      });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const toggle = item.querySelector('.faq-toggle');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      toggle.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        
        // Close all others
        faqItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector('.faq-content');
          const otherIcon = otherItem.querySelector('.faq-icon');
          otherContent.classList.add('hidden');
          otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current
        if (!isOpen) {
          content.classList.remove('hidden');
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(btn => {
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.98)';
      });
      btn.addEventListener('mouseup', () => {
        btn.style.transform = '';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();