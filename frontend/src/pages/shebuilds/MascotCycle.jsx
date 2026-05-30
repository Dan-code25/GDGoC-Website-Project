import { useState, useEffect } from 'react';
import styles from './SheBuilds.module.css';
import pose1 from '../../assets/mascot/pose1.png';
import pose2 from '../../assets/mascot/pose2.png';
import pose3 from '../../assets/mascot/pose3.png';

const poses = [pose1, pose2, pose3];

export default function MascotCycle({
  className = '',
  interval = 1100,
  alt = 'Gigi, the GDGoC TUP Manila mascot',
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const id = setInterval(
      () => setActive((p) => (p + 1) % poses.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className={`${styles.mascotCycle} ${className}`}>
      {poses.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          aria-hidden={i !== 0}
          className={`${styles.mascotImg} ${i === active ? styles.mascotActive : ''}`}
        />
      ))}
    </div>
  );
}
