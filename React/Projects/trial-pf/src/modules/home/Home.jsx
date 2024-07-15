import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className={styles.banner}>
      <img src="/hero/bg.png" alt="Background" />

      <div className={styles.slider} style={{ '--quantity': 10 }}>
        <div className={styles.item} style={{ '--position': 1 }}>
          <img src="/hero/dragon_1.jpg" alt="Dragon 1" />
        </div>
        <div className={styles.item} style={{ '--position': 2 }}>
          <img src="/hero/dragon_2.jpg" alt="Dragon 2" />
        </div>
        <div className={styles.item} style={{ '--position': 3 }}>
          <img src="/hero/dragon_3.jpg" alt="Dragon 3" />
        </div>
        <div className={styles.item} style={{ '--position': 4 }}>
          <img src="/hero/dragon_4.jpg" alt="Dragon 4" />
        </div>
        <div className={styles.item} style={{ '--position': 5 }}>
          <img src="/hero/dragon_5.jpg" alt="Dragon 5" />
        </div>
        <div className={styles.item} style={{ '--position': 6 }}>
          <img src="/hero/dragon_6.jpg" alt="Dragon 6" />
        </div>
        <div className={styles.item} style={{ '--position': 7 }}>
          <img src="/hero/dragon_7.jpg" alt="Dragon 7" />
        </div>
        <div className={styles.item} style={{ '--position': 8 }}>
          <img src="/hero/dragon_8.jpg" alt="Dragon 8" />
        </div>
        <div className={styles.item} style={{ '--position': 9 }}>
          <img src="/hero/dragon_9.jpg" alt="Dragon 9" />
        </div>
        <div className={styles.item} style={{ '--position': 10 }}>
          <img src="/hero/dragon_10.jpg" alt="Dragon 10" />
        </div>
      </div>

      <div className={styles.content}>
        <h1 data-content="FOR HIRE">
          FOR HIRE
        </h1>
        <div className={styles.author}>
          <h2>KRISHNA</h2>
          <p><b>Web Devloper</b></p>
          <p>
            Hello, This is my portfolio
          </p>
        </div>
      <div className={styles.model}></div>
    </div>

    </div>
  );
}

export default Home;
