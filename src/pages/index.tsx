import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents5 from '../components/custom-components/IndexSectionCustomComponents5';
import IndexSectionCustomComponents6 from '../components/custom-components/IndexSectionCustomComponents6';

const Index: React.FC = () => {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    let classes = document.body.classList;
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
        <title>Zalkhani Law Firm — Homepage</title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
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

