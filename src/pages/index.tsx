import React, { useEffect } from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents5 from '../components/custom-components/IndexSectionCustomComponents5';
import IndexSectionCustomComponents6 from '../components/custom-components/IndexSectionCustomComponents6';

const siteUrl = 'https://zalkhani-4.webeworx.com';
const title =
  'Zalkhani Law Firm | Zouheir Alkhani Law Firm - Foreign Investment & Corporate Legal Counsel';
const description =
  'Zalkhani Law Firm provides foreign investment, corporate, commercial, and cross-border legal counsel in Syria.';

const Index: React.FC = () => {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    const classes = Array.from(document.body.classList);
    document.body.classList.remove(...classes);
    document.body.classList.add(
      ...'antialiased font-body bg-body text-body'.split(' ')
    );
    // Load custom component scripts after React components are mounted
    const script1 = document.createElement('script');
    script1.src =
      'js/global-144130.js';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="WebeWorx" />
        <meta name="creator" content="WebeWorx" />
        <meta name="publisher" content="WebeWorx" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zalkhani Law Firm" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/social-card.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zalkhani Law Firm" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/social-card.png`} />
        <meta name="twitter:image:alt" content="Zalkhani Law Firm" />
      </Head>
      <IndexSectionCustomComponents1 />
      <IndexSectionCustomComponents2 />
      <IndexSectionCustomComponents3 />
      <IndexSectionCustomComponents4 />
      <IndexSectionCustomComponents5 />
      <IndexSectionCustomComponents6 />
    </>
  );
};

export default Index;

