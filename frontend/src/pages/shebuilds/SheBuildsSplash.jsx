import { useEffect, useState } from 'react';
import styles from './SheBuilds.module.css';
import MascotCycle from './MascotCycle';
import logo from '../../assets/SheBuilds/logo/SheBuilds.svg';

export default function SheBuildsSplash({ onDone, duration = 1500 }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hold = reduce ? 400 : duration;
    const t1 = setTimeout(() => setLeaving(true), hold);
    const t2 = setTimeout(() => onDone && onDone(), hold + 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [duration, onDone]);

  return (
    <div
      className={`${styles.splash} ${leaving ? styles.splashLeaving : ''}`}
      role="status"
      aria-label="Loading SheBuilds"
    >
      <div className={styles.splashInner}>
        <MascotCycle className={styles.splashMascot} interval={450} />
        <img src={logo} alt="SheBuilds" className={styles.splashLogo} />
      </div>
    </div>
  );
}
