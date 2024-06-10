import React from 'react';
import styles from './Brand.module.css';

import brandLogo1 from '../assets/images/Brand-logos/b1.svg';
import brandLogo2 from '../assets/images/Brand-logos/b2.svg';
import brandLogo3 from '../assets/images/Brand-logos/b3.svg';
import brandLogo4 from '../assets/images/Brand-logos/b4.svg';
import brandLogo5 from '../assets/images/Brand-logos/b5.svg';

const Brand = () => {
  return (
    <section className={styles.brand}>
      <div className={styles.container}>
        <div className={styles.brandWrapper}>
          <img src={brandLogo1} alt="brand logo" className={styles.brandLogo} />
          <img src={brandLogo2} alt="brand logo" className={styles.brandLogo} />
          <img src={brandLogo3} alt="brand logo" className={styles.brandLogo} />
          <img src={brandLogo4} alt="brand logo" className={styles.brandLogo} />
          <img src={brandLogo5} alt="brand logo" className={styles.brandLogo} />
          <img src={brandLogo1} alt="brand logo" className={styles.brandLogo} />
        </div>
      </div>
    </section>
  );
};

export default Brand;