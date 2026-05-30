import { useEffect, useState } from 'react';
import Navbar from '../../components/navigation-bar/Navbar';
import MascotCycle from './MascotCycle';
import SheBuildsSplash from './SheBuildsSplash';
import styles from './SheBuilds.module.css';

const JOIN_URL = 'https://forms.gle/vfEcZzgwc1ugVaCTA';

// Load every people-image regardless of spaces / mixed extensions in the
// filename. Keys are the file paths; values are the resolved asset URLs.
const photoFiles = import.meta.glob(
  '../../assets/SheBuilds/people-images/*',
  { eager: true, query: '?url', import: 'default' }
);
const photoFor = (key) => {
  const hit = Object.entries(photoFiles).find(([path]) => path.includes(key));
  return hit ? hit[1] : null;
};

// `key` is a unique substring of the matching filename. Ordered by cohort year.
const members = [
  { name: 'Justine Nicolas Borbe', position: 'GDSC Lead & President', year: '2021–2022', key: 'Justine Nicolas Borbe' },
  { name: 'Angelicka Batalla', position: 'Chief Operations Officer', year: '2021–2022', key: 'Angelicka Batalla' },
  { name: 'Ma. Elaiza Ilagan', position: 'Executive Secretary', year: '2021–2022', key: 'Elaiza Ilagan' },
  { name: 'Reiny Lyn Matilac', position: 'Chief Human Resource Officer', year: '2021–2022', key: 'Reiny Lyn Matilac' },
  { name: 'Trisha Mae Loren', position: 'Chief Relations Officer', year: '2021–2022', key: 'Trisha Mae Loren' },
  { name: 'Kristine Nicole Carzon', position: 'Chief Operations Officer', year: '2022–2023', key: 'Carzon' },
  { name: 'Elma Justo', position: 'Chief Human Resource Officer', year: '2022–2023', key: 'Elma Justo' },
  { name: 'Sophia Mer Enriquez', position: 'Chief Human Resource Officer', year: '2022–2023', key: 'Sophia_Mer_Enriquez' },
  { name: 'Kyla Krisha Toliao', position: 'Chief Communications Officer', year: '2022–2023', key: 'Kyla Krisha Toliao' },
  { name: 'Loven Joy Velazquez', position: 'Chief Relations Officer — Local', year: '2022–2023', key: 'Loven Joy Velazquez' },
  { name: 'Mary Jane Calulang', position: 'GDSC Lead', year: '2023–2024', key: 'Mary Jane Calulang' },
  { name: 'Francesca Togonon', position: 'Chief Finance Officer', year: '2024–2025', key: 'Francesca Togonon' },
  { name: 'Jamie Jasmine Saño', position: 'Chief Relations Officer', year: '2024–2025', key: 'Jamie Jasmine' },
  { name: 'Joshia Marie Antolin', position: 'Chief Communications Officer — Events', year: '2024–2025', key: 'Joshia Marie Antolin' },
  { name: 'Maria Leonabelle Santos', position: 'Chief Communications Officer — Page', year: '2024–2025', key: 'Maria Leonabelle Santos' },
  { name: 'Juliet Balunsay', position: 'Executive Secretary', year: '2024–2025', key: 'Juliet Balunsay' },
  { name: 'Jeanne May Carolino', position: 'Core Team', year: '2024–2025', key: 'Jeanne May Carolino' },
];

const sponsors = [
  { name: 'Your Brand Here', tag: 'Become a sponsor', glyph: '✦' },
  { name: 'Your Brand Here', tag: 'Partner with us', glyph: '♥' },
  { name: 'Your Brand Here', tag: 'Support women in tech', glyph: '★' },
  { name: 'Your Brand Here', tag: 'Sponsor SheBuilds', glyph: '◆' },
  { name: 'Your Brand Here', tag: 'Get featured', glyph: '✿' },
];

function fallbackInitials(name) {
  return name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

export default function SheBuilds() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.title = 'SheBuilds | GDGoC TUPM';
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(`.${styles.member}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openJoin = () => window.open(JOIN_URL, '_blank');
  const scrollToWomen = () => {
    document.getElementById('shebuilds-women')?.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeCards = [...sponsors, ...sponsors];

  return (
    <div className={styles.page}>
      {showSplash && <SheBuildsSplash onDone={() => setShowSplash(false)} />}

      <Navbar />

      <div className={styles.bgAtmos} aria-hidden="true">
        <span className={`${styles.blob} ${styles.b1}`} />
        <span className={`${styles.blob} ${styles.b2}`} />
        <span className={`${styles.blob} ${styles.b3}`} />
      </div>

      <header className={styles.hero} id="shebuilds-about">
        <div>
          <span className={styles.eyebrow}>Hi! I&apos;m Gigi <span className={styles.spark}>✦</span></span>
          <h1>She codes.<br />She leads.<br /><span className={styles.grad}>SheBuilds.</span></h1>
          <p className={styles.lede}>
            An empowerment celebration for <strong>women in tech</strong> — a day of talks,
            mentorship, and community, hosted by Google Developer Groups on Campus,
            Technological University of the Philippines – Manila.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.chip}>📅 May 30, 2026</span>
            <span className={styles.chip}>📍 TUP Manila</span>
            <span className={styles.chip}>✦ Free &amp; open to all</span>
          </div>
          <div className={styles.heroCta}>
            <button type="button" className={styles.btn} onClick={openJoin}>Reserve your seat</button>
            <button type="button" className={`${styles.btn} ${styles.ghost}`} onClick={scrollToWomen}>Meet the women</button>
          </div>
        </div>

        <div className={styles.heroArt}>
          <div className={styles.dateBadge}><span><small>MAY</small><b>30</b></span></div>
          <div className={styles.frame}>
            <MascotCycle />
          </div>
          <span className={styles.stickerHeart} aria-hidden="true">💗</span>
        </div>
      </header>

      <section className={styles.sponsors} id="shebuilds-sponsors">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Powered by</span>
          <h2>Our Sponsors &amp; Partners</h2>
          <p>SheBuilds is made possible by the organizations championing women in tech.</p>
        </div>
        <div className={styles.marqueeWrap}>
          <div className={styles.marquee}>
            {marqueeCards.map((s, i) => (
              <div className={styles.sponsorCard} key={i}>
                <span className={styles.sponsorLogo}>
                  <span className={styles.ic}>{s.glyph}</span>
                  <span className={styles.txt}>{s.name}<small>{s.tag}</small></span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.members} id="shebuilds-women">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>The women of GDGoC TUPM</span>
          <h2><span className={styles.script}>She</span>Builds</h2>
          <p>The leaders, builders, and changemakers who&apos;ve shaped our community through the years.</p>
        </div>
        <div className={styles.grid}>
          {members.map((m, i) => {
            const img = photoFor(m.key);
            return (
              <article className={styles.member} key={m.key} style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                <span className={styles.twinkle} aria-hidden="true">✦</span>
                <div className={styles.photo}>
                  {img
                    ? <img src={img} alt={m.name} loading="lazy" />
                    : <div className={styles.photoFallback} aria-hidden="true">{fallbackInitials(m.name)}</div>}
                </div>
                <h3>{m.name}</h3>
                <div className={styles.role}>{m.position}</div>
                <div className={styles.year}>{m.year}</div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer} id="shebuilds-rsvp">
        <div className={styles.forHer}>For Her ✦</div>
        <p>Join us this <strong>May 30</strong> at TUP Manila and be part of a community where women build the future of technology.</p>
        <button type="button" className={styles.btn} style={{ marginBottom: '1.8rem' }} onClick={openJoin}>Reserve your seat ♥</button>
        <div className={styles.socials} aria-label="Social links">
          <a href="https://www.facebook.com/GDGonCampusTUPManila" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/gdgoctup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
          <a href="https://www.linkedin.com/company/gdgoctupmanila" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
        </div>
        <p className={styles.copy}>© 2026 Google Developer Groups on Campus — Technological University of the Philippines, Manila. Built with 💗 for SheBuilds.</p>
      </footer>
    </div>
  );
}
