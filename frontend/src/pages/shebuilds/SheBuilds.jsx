import { useEffect, useState } from 'react';
import Navbar from '../../components/navigation-bar/Navbar';
import MascotCycle from './MascotCycle';
import SheBuildsSplash from './SheBuildsSplash';
import styles from './SheBuilds.module.css';

const JOIN_URL = 'https://forms.gle/vfEcZzgwc1ugVaCTA';

const members = [
  { name: 'Andrea Reyes', role: 'Lead' },
  { name: 'Bianca Santos', role: 'Co-Lead' },
  { name: 'Camille Tan', role: 'Tech Lead' },
  { name: 'Denise Cruz', role: 'Web Dev Lead' },
  { name: 'Erika Villanueva', role: 'Design Lead' },
  { name: 'Faye Mendoza', role: 'Community Manager' },
  { name: 'Grace Domingo', role: 'AI/ML Lead' },
  { name: 'Hannah Lim', role: 'Events Lead' },
  { name: 'Isabel Garcia', role: 'Marketing Lead' },
  { name: 'Joyce Ramos', role: 'Partnerships Lead' },
  { name: 'Kara Aquino', role: 'Mobile Dev Lead' },
  { name: 'Liana Bautista', role: 'Cloud Lead' },
];

const palettes = [
  ['#FF84C5', '#FF54B0'], ['#FF54B0', '#F4308F'], ['#FFB3DD', '#FF84C5'],
  ['#C9A0E8', '#FF84C5'], ['#FF9ECF', '#C9A0E8'], ['#FF54B0', '#C9A0E8'],
];

const sponsors = [
  { name: 'Your Brand Here', tag: 'Become a sponsor', glyph: '✦' },
  { name: 'Your Brand Here', tag: 'Partner with us', glyph: '♥' },
  { name: 'Your Brand Here', tag: 'Support women in tech', glyph: '★' },
  { name: 'Your Brand Here', tag: 'Sponsor SheBuilds', glyph: '◆' },
  { name: 'Your Brand Here', tag: 'Get featured', glyph: '✿' },
];

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

function Avatar({ name, index }) {
  const [a, b] = palettes[index % palettes.length];
  const id = `she-grad-${index}`;
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={name}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#${id})`} />
      <circle cx="100" cy="78" r="34" fill="rgba(255,255,255,.9)" />
      <path d="M40 180c0-33 27-52 60-52s60 19 60 52z" fill="rgba(255,255,255,.9)" />
      <text x="100" y="120" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="700" fontSize="26" fill="#F4308F">{initials(name)}</text>
    </svg>
  );
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
          {members.map((m, i) => (
            <article className={styles.member} key={m.name} style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
              <span className={styles.twinkle} aria-hidden="true">✦</span>
              <div className={styles.photo}><Avatar name={m.name} index={i} /></div>
              <h3>{m.name}</h3>
              <div className={styles.role}>{m.role}</div>
            </article>
          ))}
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
