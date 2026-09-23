[ROLE & CONTEXT]
You are acting as an Lead Full-Stack TypeScript Architect and Senior UI/UX Engineer at WebeWorx ([https://webeworx.com/](https://webeworx.com/?utm_source=gemini)). You are working on the codebase of a prototype website exported from an external builder for our high-ticket prospective client, Zalkhani Law Firm (مكتب زهير الخاني للمحاماة - [https://zalkhani.com/](https://zalkhani.com/?utm_source=gemini)).

You must refer to the strategic document located at `@docs/Zalkhani_Law_Pitch_Strategy.md` for full background on the firm's history (established 1958), practice areas, leadership (Lawyer Omar Alkhani), contact details, and technical modernization requirements.

[PRIMARY OBJECTIVES]

1. Complete White-Labeling: Completely audit the entire codebase and eradicate all legacy builder branding, meta tags, comments, class attributes, script links, asset paths, or visual watermarks. Replace agency branding strictly with "WebeWorx" ([https://webeworx.com/](https://webeworx.com/?utm_source=gemini)).
2. Production Refactoring: Clean up exported HTML/JSX/Tailwind code into modular, production-ready TypeScript components (React / Next.js).
3. Localization & RTL/LTR Setup: Implement dual-language support for Arabic (AR, default RTL) and English (EN, LTR) using General Translation API framework standards (gt-next / gt-react).
4. Dark/Light Theme Switcher: Ensure the active theme switcher cleanly toggles Tailwind light and dark modes with smooth transitions.
5. Interactive Client Features: Integrate functional lead capture pathways, Cal.com scheduling placeholders, floating WhatsApp CTA, and LegalService JSON-LD schema.

---

[STEP 1: COMPLETE WHITE-LABELING & BRANDING TRANSFORMATION]

* Global Search & Replace: Perform a sweep across all `.html`, `.jsx`, `.tsx`, `.js`, `.json`, `.md`, and CSS files for any legacy builder references or watermarks.
* Footer & Attribution: In the footer, set the copyright to:
`© 2026 Zalkhani Law Firm. All rights reserved. Designed & Engineered by WebeWorx ([https://webeworx.com/](https://webeworx.com/))`
* HTML Meta Tags: Update `<head>` metadata:
* Title: `Zalkhani Law Firm | Zouheir Alkhani Law Firm - Foreign Investment & Corporate Legal Counsel`
* Author / Creator / Publisher: `WebeWorx ([https://webeworx.com/](https://webeworx.com/))`
* Open Graph & Twitter Card tags: Add structured meta tags pointing to Zalkhani Law Firm with agency branding credits where appropriate.
* Favicon & Icons: Replace default builder placeholders with clean SVG favicons for Zalkhani Law Firm (`ZL` monogram).

---

[STEP 2: LOCALIZATION, DUAL-LANGUAGE (AR/EN), AND RTL/LTR ENGINE]

* Read `@docs/Zalkhani_Law_Pitch_Strategy.md` for practice area terminology.
* Implement an active Language Switcher component in the sticky navigation bar (`العربية | EN`).
* Configure standard HTML/JSX `dir="rtl"` attribute when Arabic is selected and `dir="ltr"` when English is selected.
* Wire components to support string translation wrappers compliant with General Translation API conventions (`gt-react` / `gt-next` or a structured `dictionaries/` JSON setup). Ensure translations cover:
* Navigation links ("من نحن", "الخدمات", "القوانين والمراسيم", "اتصل بنا")
* Hero Headlines ("Cross-Border Legal Excellence in Syria Since 1958")
* Practice Area Cards (Foreign Investment, Commercial Trade, Real Estate, Intellectual Property, Arbitration)

---

[STEP 3: ACTIVE THEME KEY SWITCHER (LIGHT/DARK MODE)]

* Configure Tailwind CSS `darkMode: 'class'` in `tailwind.config.js` (or CSS modules).
* Build/Refactor a sticky Sun/Moon Toggle in the Header:
* Light Theme: Pearl White background (`#F8FAFC`), Deep Dark Blue text (`#0B192C`), Slate borders (`#E2E8F0`), Legal Gold accents (`#C5A059`).
* Dark Theme: Obsidian Navy background (`#0F172A`), Deep Navy cards (`#1E293B`), Off-White text (`#F8FAFC`), Champagne Gold accents (`#D4AF37`).

* Ensure state persists in `localStorage` and respects `prefers-color-scheme`.

---

[STEP 4: FUNCTIONAL INTEGRATIONS & UX FIXES]

* REMOVE LEGACY LOGIN: Eradicate any legacy account login forms, password reset links, or "Sign in to your account" fields from public page templates.
* CAL.COM SCHEDULING: Refactor the primary hero CTA ("Schedule Consultation") and navigation CTA ("Book Consultation") to open a clean modal overlay prepared for Cal.com embed integration.
* DIRECT WHATSAPP BUTTON: Add a sticky, floating WhatsApp button in the bottom corner linking directly to [https://wa.me/963933622670](https://wa.me/963933622670) with a pre-filled Arabic/English message template.
* DIRECT TELEPHONE & ADDRESS: Wire phone links to `tel:00963112222275` and ensure physical address (Damascus - Al-Hijaz - Al-A'sar Building) is properly structured in the footer.
* STRUCTURED SCHEMA: Add a `<script type="application/ld+json">` block containing `LegalService` schema detailing Zalkhani Law Firm's founding year (1958), managing partner (Omar Alkhani), location, and served practice areas.

---

[STEP 5: CODE CLEANUP, TYPESCRIPT REFACTORING, AND VERIFICATION]

* Break down monolithic generated HTML files into reusable React/Next.js components:
* `Header.tsx` (Logo, Nav, Theme Switcher, Language Toggle, CTA)
* `HeroSection.tsx` (Split layout, Trust Badges, CTAs)
* `PartnerCarousel.tsx` (Client showcase logos)
* `PracticeAreas.tsx` (6-card interactive grid)
* `ConsultationScheduler.tsx` (Cal.com intake UI)
* `LeadershipTimeline.tsx` (Zouheir Alkhani & Omar Alkhani profiles)
* `LegalRepository.tsx` (Laws, Decrees, Research downloads)
* `Footer.tsx` (Contact info, WebeWorx white-labeled credits, Map preview)

* Remove unused utility classes, clean up formatting, fix any broken accessibility (`aria-label`, image `alt` attributes), and verify that the build compiles cleanly with zero TypeScript or ESLint errors.

Begin by scanning the workspace files and summarizing the project structure, then execute Step 1 through Step 5 systematically.

---

### How to Execute in Your Workflow

1. **Place Context Document:** Put `Zalkhani_Law_Pitch_Strategy.md` in your project folder (`docs/Zalkhani_Law_Pitch_Strategy.md`).

2. **Open Agent/Composer Mode:**
* **In Cursor:** Press `Ctrl + I` (or `Cmd + I`) to open **Composer**, set it to **Agent** mode so it can edit across multiple files simultaneously.
* **In TRAE IDE:** Open the **Solo Agent / Builder** panel.

3. **Run the Prompt:** Paste the prompt block directly into the chat box. The agent will analyze your exported prototype, perform the search-and-replace, restructure code into clean React/TypeScript components, apply the dual-language switching structure (AR/EN), and white-label all branding to **WebeWorx**.
