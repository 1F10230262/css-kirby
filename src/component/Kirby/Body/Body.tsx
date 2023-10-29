import styles from './Body.module.css';

export const Body = () => (
  <div className={styles.bodyBase}>
    <div className={styles.bodyshadow} />
    <div className={styles.body} />
    <div className={styles.bodyline} />
  </div>
);
