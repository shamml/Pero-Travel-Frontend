import React from 'react';
import styles from './styles.module.css';
import img1 from '../../../../assets/gallery/1.png';
import img2 from '../../../../assets/gallery/2.png';
import img3 from '../../../../assets/gallery/3.png';
import img4 from '../../../../assets/gallery/4.png';
import img5 from '../../../../assets/gallery/5.png';
import img6 from '../../../../assets/gallery/6.png';
import img7 from '../../../../assets/gallery/7.png';
import img8 from '../../../../assets/gallery/8.png';

const Gallery = () => {
  return (
    <div className={styles.galleryBlock}>
      <div className={styles.first}>
        <div className={styles.img1}>
          <img src={img1} alt="img1" />
        </div>
        <div className={styles.firstDown}>
          <div className={styles.img2}>
            <img src={img2} alt="img2" />
          </div>
          <div className={styles.firstDownRight}>
            <div className={styles.img3}>
              <img src={img3} alt="img3" />
            </div>
            <div className={styles.img4}>
              <img src={img4} alt="img4" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.img5}>
          <img src={img5} alt="img5" />
        </div>
      </div>

      <div className={styles.third}>
        <div className={styles.thirdUp}>
          <div className={styles.img6}>
            <img src={img6} alt="img6" />
          </div>
          <div className={styles.img7}>
            <img src={img7} alt="img7" />
          </div>
        </div>
        <div className={styles.img8}>
          <img src={img8} alt="img8" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
