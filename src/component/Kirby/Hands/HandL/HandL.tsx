import styles from './HandL.module.css';
import animeStyles from '../Handsanime.module.css';

export const HandL = () => (
  <div className={styles.handLBase}>
    <div className={`${styles.handLshadow} ${animeStyles.animeL}`} />
    <div className={`${styles.handL} ${animeStyles.animeL}`} />
  </div>
);
