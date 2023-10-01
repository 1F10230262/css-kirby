import { EyeL } from '../component/Kirby/Eyes/EyeL/EyeL';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.body} />
        <div className={styles.bodyline} />
        <div className={styles.bodylineE} />
        <EyeL />
        <div className={styles.eyeRt} />
        <div className={styles.eyeRr} />
        <div className={styles.eyeRu} />
        <div className={styles.eyeRl} />
        <div className={styles.eyeRm} />
        <div className={styles.highlightR} />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <div className={styles.mouth} />
        <div className={styles.mouthE} />
        <div className={styles.handL} />
        <div className={styles.handR} />
        <div className={styles.legL} />
        <div className={styles.legR} />
      </div>
    </div>
  );
};

export default Home;
