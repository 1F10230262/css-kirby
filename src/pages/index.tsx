import { Body } from '../component/Kirby/Body/Body';
import { EyeL } from '../component/Kirby/Eyes/EyeL/EyeL';
import { EyeR } from '../component/Kirby/Eyes/EyeR/EyeR';
import { HandL } from '../component/Kirby/Hands/HandL/HandL';
import { HandR } from '../component/Kirby/Hands/HandR/HandR';
import { Mouth } from '../component/Kirby/Mouth/Mouth';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <Body />
        <div className={styles.bodylineEL} />
        <div className={styles.bodylineER} />
        <Mouth />
        <EyeL />
        <EyeR />
        <div className={styles.cheekL} />
        <div className={styles.cheekR} />
        <HandL />
        <HandR />
        <div className={styles.legL} />
        <div className={styles.legR} />
      </div>
    </div>
  );
};

export default Home;
