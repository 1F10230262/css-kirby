import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.body} />
        <div className={styles.eyeL} />
        <div className={styles.eyeR} />
        <div className={styles.lightL} />
        <div className={styles.lightR} />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <div className={styles.mouth} />
        <div className={styles.handL} />
        <div className={styles.handR} />
        <div className={styles.legL} />
        <div className={styles.legR} />
      </div>
    </div>
  );
};

export default Home;
