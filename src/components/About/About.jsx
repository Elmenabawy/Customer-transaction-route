import React from 'react';
import styles from './About.module.css'; // Import CSS file for custom styling
import image1 from '../../Assets/images/About1.jpg';
import image2 from '../../Assets/images/About2.jpg';
import image3 from '../../Assets/images/About3.jpg';

const About = () => {
  return (
        <>
          <div className="container">
        <div className={styles.aboutContainer}>
          <h2 className={styles.aboutTitle}>About Us</h2>

          <div className={styles.aboutRow}>
            {/* Image 1 */}
            <div className={styles.aboutCol}>
              <div className={styles.imageWrapper}>
                <img src={image1} alt="Image1" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    Solar power fuels homes, businesses, and a cleaner community.
                  </div>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className={styles.aboutCol}>
              <div className={styles.imageWrapper}>
                <img src={image2} alt="Image2" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    City thrives with clean, sustainable solar power.
                  </div>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className={styles.aboutCol}>
              <div className={styles.imageWrapper}>
                <img src={image3} alt="Image3" className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.text}>
                    Solar power cuts pollution, brightens our environmental future.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <p>Solar panels transform sunlight into clean electricity, powering homes and businesses. Reduce your energy bills and environmental footprint. Embrace a sustainable future - invest in solar for a cleaner, brighter tomorrow.</p>
          </div>
        </div>
          </div>
        </>
  );
};

export default About;
