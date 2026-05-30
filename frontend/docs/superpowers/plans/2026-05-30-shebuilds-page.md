# SheBuilds Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the SheBuilds event page at `/shebuilds` — ported from the reference HTML into React, using the shared GDGoC navbar (route-themed pink), a mascot splash on entry, and a cycling mascot in the hero.

**Architecture:** One scoped CSS Module page (`SheBuilds.module.css`) holds all SheBuilds styles so the reference's generic class names cannot collide with global site CSS. The page (`SheBuilds.jsx`) composes two small local components — `MascotCycle` (cross-fade of 3 poses) and `SheBuildsSplash` (full-screen entry cover) — plus inline hero/sponsors/members sections and the reference's pink footer. The shared `<Navbar/>` self-themes via `useLocation()` when on `/shebuilds`; it reverts everywhere else.

**Tech Stack:** Vite 7, React 19, react-router-dom 7, CSS Modules. No test runner is installed, so verification is `npm run build` + `npm run lint` + manual `npm run dev` inspection.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `src/assets/mascot/pose1.png`, `pose2.png`, `pose3.png` | Renamed (spaces removed) mascot poses. |
| `index.html` | Add Fraunces + Plus Jakarta Sans fonts (Pacifico already present). |
| `src/pages/shebuilds/SheBuilds.module.css` | All scoped SheBuilds styles (ported from reference). |
| `src/pages/shebuilds/MascotCycle.jsx` | Cross-fade cycler for the 3 mascot poses. |
| `src/pages/shebuilds/SheBuildsSplash.jsx` | Full-screen pink splash shown on page entry. |
| `src/pages/shebuilds/SheBuilds.jsx` | The page: hero, sponsors marquee, members grid, pink footer. |
| `src/App.jsx` | Route `/shebuilds` → `<SheBuilds/>` (was `<UnderConstruction/>`). |
| `src/components/navigation-bar/Navbar.jsx` | Add route-aware `sheTheme` class via `useLocation()`. |
| `src/components/navigation-bar/Navbar.module.css` | Pink `.sheTheme` overrides. |

---

### Task 1: Rename mascot assets (remove spaces)

Import specifiers with spaces are fragile; rename to plain names.

**Files:**
- Rename: `src/assets/mascot/Pose 1.png` → `pose1.png`
- Rename: `src/assets/mascot/Pose 2.png` → `pose2.png`
- Rename: `src/assets/mascot/Pose 3.png` → `pose3.png`

- [ ] **Step 1: Rename via git (PowerShell)**

```powershell
git mv "src/assets/mascot/Pose 1.png" "src/assets/mascot/pose1.png"
git mv "src/assets/mascot/Pose 2.png" "src/assets/mascot/pose2.png"
git mv "src/assets/mascot/Pose 3.png" "src/assets/mascot/pose3.png"
```

- [ ] **Step 2: Verify**

Run: `git status --short src/assets/mascot`
Expected: three `R` (renamed) entries, no untracked spaces-named files remain.

- [ ] **Step 3: Commit**

```powershell
git add src/assets/mascot ; git commit -m "chore: rename mascot poses without spaces"
```

**Note (non-blocking):** the PNGs are ~2.2–2.8 MB each (4096×4096, ~7.7 MB total). Downscaling to ~700px would cut most of that payload. Optional follow-up, not required for the page to work. If desired later, re-export at ~700×700 and overwrite these files.

---

### Task 2: Add web fonts

`index.html` already loads Pacifico. Add Fraunces (display) and Plus Jakarta Sans (body).

**Files:**
- Modify: `index.html:9`

- [ ] **Step 1: Replace the Pacifico-only link**

Find:
```html
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
```

Replace with:
```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,900&family=Pacifico&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Commit**

```powershell
git add index.html ; git commit -m "feat: load Fraunces and Plus Jakarta Sans fonts"
```

---

### Task 3: Create the scoped stylesheet

All reference CSS, ported to a module. Global resets are scoped under `.page` (the site already has its own resets). CSS variables live on `.page`.

**Files:**
- Create: `src/pages/shebuilds/SheBuilds.module.css`

- [ ] **Step 1: Write the file**

```css
/* SheBuilds — scoped page styles (ported from reference) */
.page {
  --rose-hot:#FF54B0; --rose-deep:#F4308F; --rose-soft:#FF84C5;
  --blush:#FDE4F9; --cotton:#FFE2F8; --petal:#FED5F5; --white:#FFFFFF;
  --blue-spark:#3B6EFF; --lilac:#C9A0E8; --ink:#1F1F1F; --ink-soft:#6B5566;
  --grad-rose:linear-gradient(135deg,#FF84C5 0%,#FF54B0 45%,#F4308F 100%);
  --grad-dream:linear-gradient(120deg,#FFE2F8 0%,#FED5F5 40%,#C9A0E8 100%);
  --grad-petal:linear-gradient(160deg,#FFFFFF 0%,#FFE2F8 100%);
  --r-sm:14px; --r-md:22px; --r-lg:34px; --r-pill:999px;
  --shadow-soft:0 10px 30px rgba(255,84,176,.16);
  --shadow-pop:0 18px 50px rgba(244,48,143,.28);
  --sticker:0 14px 40px rgba(255,84,176,.22);
  --font-script:'Pacifico',cursive;
  --font-display:'Fraunces','Georgia',serif;
  --font-body:'Plus Jakarta Sans',system-ui,sans-serif;

  font-family:var(--font-body); color:var(--ink); background:var(--blush);
  line-height:1.7; overflow-x:hidden; -webkit-font-smoothing:antialiased;
  position:relative; min-height:100vh;
}
.page *{box-sizing:border-box}
.page a{color:inherit;text-decoration:none}
.page img{display:block;max-width:100%}

/* atmosphere */
.bgAtmos{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.b1{width:520px;height:520px;background:var(--grad-dream);top:-160px;right:-120px}
.b2{width:460px;height:460px;background:radial-gradient(circle,#FF84C5,transparent 70%);bottom:-140px;left:-120px;opacity:.4}
.b3{width:380px;height:380px;background:radial-gradient(circle,#C9A0E8,transparent 70%);top:45%;right:-100px;opacity:.35}
.float{position:absolute;z-index:0;opacity:.5;animation:bob 7s ease-in-out infinite;pointer-events:none}
.f1{top:18%;left:5%;animation-delay:.2s}
.f2{top:60%;right:7%;animation-delay:1.4s}
.f3{top:80%;left:10%;animation-delay:2.6s}
@keyframes bob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-22px) rotate(8deg)}}

/* content sits above atmosphere */
.hero,.sponsors,.members,.footer{position:relative;z-index:1}

/* buttons */
.btn{
  display:inline-flex;align-items:center;gap:.45rem;
  font-family:var(--font-body);font-weight:700;font-size:.95rem;
  padding:.7rem 1.4rem;border-radius:var(--r-pill);border:none;cursor:pointer;
  background:var(--grad-rose);color:#fff;box-shadow:var(--shadow-pop);
  transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s;
}
.btn:hover{transform:translateY(-2px);box-shadow:0 22px 56px rgba(244,48,143,.36)}
.ghost{background:#fff;color:var(--rose-deep);box-shadow:var(--shadow-soft);border:2px solid var(--rose-soft)}

/* hero */
.hero{
  display:grid;grid-template-columns:1fr 1.05fr;gap:clamp(1.5rem,4vw,4rem);
  align-items:center;
  padding:clamp(2.5rem,6vw,5rem) clamp(1rem,5vw,3.5rem) clamp(2rem,5vw,4rem);
  max-width:1280px;margin-inline:auto;
}
.eyebrow{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-script);color:var(--rose-hot);font-size:1.4rem;margin-bottom:.4rem}
.spark{color:var(--blue-spark)}
.hero h1{font-family:var(--font-display);font-weight:900;line-height:1.02;font-size:clamp(2.75rem,7vw,5.25rem);letter-spacing:-.02em}
.grad{background:var(--grad-rose);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.lede{font-size:clamp(1rem,1.4vw,1.18rem);color:var(--ink-soft);margin:1.1rem 0 1.6rem;max-width:46ch}
.heroMeta{display:flex;flex-wrap:wrap;gap:.7rem;margin-bottom:1.8rem}
.chip{display:inline-flex;align-items:center;gap:.5rem;background:var(--petal);color:var(--rose-deep);font-weight:700;font-size:.88rem;padding:.5rem 1rem;border-radius:var(--r-pill);border:2px solid #fff;box-shadow:var(--shadow-soft)}
.heroCta{display:flex;flex-wrap:wrap;gap:.9rem}
.heroArt{position:relative}
.frame{border-radius:var(--r-lg);overflow:hidden;border:6px solid #fff;box-shadow:var(--sticker);transform:rotate(1.5deg);transition:transform .5s cubic-bezier(.34,1.56,.64,1);background:var(--grad-petal)}
.frame:hover{transform:rotate(0deg) scale(1.01)}
.dateBadge{position:absolute;top:-18px;right:-14px;z-index:3;width:104px;height:104px;display:grid;place-items:center;text-align:center;background:#fff;color:var(--rose-hot);border-radius:50%;box-shadow:var(--shadow-pop);font-family:var(--font-display);font-weight:900;border:3px solid var(--rose-soft);animation:wobble 5s ease-in-out infinite}
.dateBadge small{display:block;font-size:.62rem;letter-spacing:.18em;color:var(--rose-deep)}
.dateBadge b{font-size:1.9rem;line-height:.9}
@keyframes wobble{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
.stickerHeart{position:absolute;bottom:-16px;left:-14px;font-size:2rem;filter:drop-shadow(0 6px 12px rgba(255,84,176,.4));animation:bob 5s ease-in-out infinite}

/* mascot cycler */
.mascotCycle{position:relative;width:100%;aspect-ratio:1}
.mascotImg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity .6s ease}
.mascotActive{opacity:1}

/* sponsors */
.sponsors{background:var(--cotton);padding:clamp(2.5rem,5vw,4rem) 0;border-block:1px solid rgba(255,84,176,.15);overflow:hidden}
.sectionHead{text-align:center;max-width:760px;margin:0 auto clamp(1.6rem,4vw,2.6rem);padding-inline:1rem}
.kicker{font-family:var(--font-script);color:var(--rose-hot);font-size:1.3rem}
.sectionHead h2{font-family:var(--font-display);font-weight:800;letter-spacing:-.02em;font-size:clamp(2rem,4.5vw,3.25rem);margin-top:.2rem}
.sectionHead p{color:var(--ink-soft);margin-top:.6rem}
.marqueeWrap{-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.marquee{display:flex;gap:1.4rem;width:max-content;animation:scroll 26s linear infinite}
.marqueeWrap:hover .marquee{animation-play-state:paused}
@keyframes scroll{to{transform:translateX(-50%)}}
.sponsorCard{flex:0 0 auto;min-width:230px;height:120px;display:flex;align-items:center;justify-content:center;gap:.7rem;background:#fff;border-radius:var(--r-md);border:3px solid #fff;box-shadow:var(--shadow-soft);padding:1rem 1.6rem}
.sponsorLogo{display:flex;align-items:center;gap:.6rem;font-weight:800;color:var(--ink)}
.ic{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;color:#fff;font-weight:900;flex:0 0 auto;background:var(--grad-rose)}
.txt{line-height:1.1;font-size:.95rem}
.txt small{display:block;font-weight:500;color:var(--ink-soft);font-size:.68rem}

/* members */
.members{padding:clamp(3rem,6vw,5.5rem) clamp(1rem,5vw,3.5rem);max-width:1280px;margin-inline:auto}
.members .sectionHead h2{font-size:clamp(2.6rem,7vw,5rem)}
.script{font-family:var(--font-script);font-weight:400;background:var(--grad-rose);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.grid{display:grid;gap:clamp(1.1rem,2.5vw,1.8rem);grid-template-columns:repeat(auto-fill,minmax(190px,1fr))}
.member{text-align:center;background:var(--grad-petal);border-radius:var(--r-lg);padding:1.1rem 1rem 1.4rem;border:3px solid #fff;box-shadow:var(--shadow-soft);transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s,opacity .5s,translate .5s;position:relative;opacity:0;translate:0 26px}
.in{opacity:1;translate:0 0}
.member:hover{transform:translateY(-8px);box-shadow:var(--shadow-pop)}
.photo{width:100%;aspect-ratio:1;border-radius:var(--r-md);overflow:hidden;border:3px solid #fff;box-shadow:var(--shadow-soft);margin-bottom:.9rem}
.photo img,.photo svg{width:100%;height:100%;object-fit:cover;display:block}
.member h3{font-family:var(--font-display);font-weight:700;font-size:1.18rem;line-height:1.2}
.role{margin-top:.35rem;font-size:.82rem;font-weight:700;color:var(--rose-deep);letter-spacing:.01em;text-transform:uppercase}
.twinkle{position:absolute;top:14px;right:16px;color:var(--blue-spark);font-size:1.1rem;opacity:0;transition:opacity .3s,transform .3s}
.member:hover .twinkle{opacity:1;transform:rotate(20deg) scale(1.2)}

/* footer (reference pink footer, this page only) */
.footer{background:var(--grad-dream);margin-top:clamp(2rem,5vw,4rem);padding:clamp(2.5rem,5vw,4rem) clamp(1rem,5vw,3.5rem) 2rem;text-align:center;overflow:hidden}
.forHer{font-family:var(--font-script);font-size:2.4rem;color:var(--rose-deep);margin-bottom:.4rem}
.footer p{color:var(--ink-soft);max-width:50ch;margin:.4rem auto 1.4rem}
.socials{display:flex;justify-content:center;gap:.8rem;margin-bottom:1.6rem}
.socials a{width:44px;height:44px;border-radius:50%;background:#fff;display:grid;place-items:center;color:var(--rose-deep);box-shadow:var(--shadow-soft);transition:transform .25s,background .25s,color .25s;font-weight:800}
.socials a:hover{transform:translateY(-3px);background:var(--grad-rose);color:#fff}
.copy{font-size:.82rem;color:var(--ink-soft)}

/* splash */
.splash{position:fixed;inset:0;z-index:3000;display:grid;place-items:center;background:var(--grad-dream,linear-gradient(120deg,#FFE2F8,#FED5F5 40%,#C9A0E8));opacity:1;transition:opacity .55s ease}
.splashLeaving{opacity:0;pointer-events:none}
.splashInner{display:flex;flex-direction:column;align-items:center;gap:1rem;animation:pop .5s cubic-bezier(.34,1.56,.64,1)}
.splashMascot{width:min(46vw,260px);aspect-ratio:1}
.splashLogo{width:min(60vw,320px);height:auto}
@keyframes pop{0%{transform:scale(.7);opacity:0}100%{transform:scale(1);opacity:1}}

/* responsive */
@media (max-width:880px){
  .hero{grid-template-columns:1fr;text-align:center}
  .eyebrow,.heroMeta,.heroCta{justify-content:center}
  .lede{margin-inline:auto}
  .heroArt{order:-1;max-width:460px;margin-inline:auto}
}
@media (prefers-reduced-motion:reduce){
  .page *{animation:none!important;transition:none!important}
  .member{opacity:1;translate:none}
}
```

- [ ] **Step 2: Commit**

```powershell
git add src/pages/shebuilds/SheBuilds.module.css ; git commit -m "feat: add scoped SheBuilds page styles"
```

---

### Task 4: MascotCycle component

**Files:**
- Create: `src/pages/shebuilds/MascotCycle.jsx`

- [ ] **Step 1: Write the component**

```jsx
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
```

- [ ] **Step 2: Commit**

```powershell
git add src/pages/shebuilds/MascotCycle.jsx ; git commit -m "feat: add cross-fading MascotCycle component"
```

---

### Task 5: SheBuildsSplash component

**Files:**
- Create: `src/pages/shebuilds/SheBuildsSplash.jsx`

- [ ] **Step 1: Write the component**

```jsx
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
```

- [ ] **Step 2: Commit**

```powershell
git add src/pages/shebuilds/SheBuildsSplash.jsx ; git commit -m "feat: add SheBuilds entry splash"
```

---

### Task 6: SheBuilds page

Composes navbar, splash, hero (with `MascotCycle`), sponsors marquee, members grid, pink footer. Data arrays + gradient avatar are ported from the reference JS.

**Files:**
- Create: `src/pages/shebuilds/SheBuilds.jsx`

- [ ] **Step 1: Write the page**

```jsx
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
```

- [ ] **Step 2: Commit**

```powershell
git add src/pages/shebuilds/SheBuilds.jsx ; git commit -m "feat: build SheBuilds page (hero, sponsors, women, footer)"
```

---

### Task 7: Wire the route

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add the import**

After line 11 (`import UnderConstruction ...`), add:
```jsx
import SheBuilds from './pages/shebuilds/SheBuilds.jsx';
```

- [ ] **Step 2: Repoint the `/shebuilds` route**

Find:
```jsx
          <Route path='/shebuilds' element={<UnderConstruction />} />
```
Replace with:
```jsx
          <Route path='/shebuilds' element={<SheBuilds />} />
```
(Leave the `/Under-Construction` route untouched.)

- [ ] **Step 3: Commit**

```powershell
git add src/App.jsx ; git commit -m "feat: route /shebuilds to SheBuilds page"
```

---

### Task 8: Route-aware pink navbar theme

Navbar self-themes on `/shebuilds` and reverts elsewhere — no changes to other pages.

**Files:**
- Modify: `src/components/navigation-bar/Navbar.jsx`
- Modify: `src/components/navigation-bar/Navbar.module.css`

- [ ] **Step 1: Import `useLocation` and compute the flag**

In `Navbar.jsx`, change the router import (line 1):
```jsx
import { Link, useLocation } from 'react-router-dom';
```

Inside the `Navbar` component, after the `useUser()` line, add:
```jsx
  const location = useLocation();
  const sheTheme = location.pathname === '/shebuilds';
```

- [ ] **Step 2: Apply the class to the nav bar wrapper**

Find:
```jsx
        <div
          className={`${styles.navBar} d-flex align-items-center justify-content-between`}
        >
```
Replace with:
```jsx
        <div
          className={`${styles.navBar} ${sheTheme ? styles.sheTheme : ''} d-flex align-items-center justify-content-between`}
        >
```

- [ ] **Step 3: Add the theme overrides to `Navbar.module.css`**

Append:
```css
/* SheBuilds page theme (route-scoped) */
.sheTheme {
  background: rgba(253, 228, 249, 0.85);
  backdrop-filter: blur(14px);
  border-radius: 0 0 18px 18px;
  border-bottom: 1px solid rgba(255, 84, 176, 0.18);
  padding-inline: clamp(0.5rem, 3vw, 1.5rem);
}
.sheTheme .home,
.sheTheme .events,
.sheTheme .project,
.sheTheme .team {
  color: #6b5566;
}
.sheTheme .home:hover,
.sheTheme .events:hover,
.sheTheme .project:hover,
.sheTheme .team:hover {
  color: #f4308f;
}
.sheTheme .joinButton {
  background: linear-gradient(135deg, #ff84c5 0%, #ff54b0 45%, #f4308f 100%);
}
.sheTheme .joinButton:hover {
  filter: brightness(1.04);
  background: linear-gradient(135deg, #ff84c5 0%, #ff54b0 45%, #f4308f 100%);
}
```

- [ ] **Step 4: Commit**

```powershell
git add src/components/navigation-bar/Navbar.jsx src/components/navigation-bar/Navbar.module.css ; git commit -m "feat: pink navbar theme on SheBuilds route"
```

---

### Task 9: Verify build, lint, and manual run

**Files:** none (verification only)

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: no new errors in the files created/modified above. (Pre-existing repo warnings unrelated to these files are acceptable — note them, don't fix here.)

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: build completes, no errors. The three mascot PNGs are emitted to the build assets.

- [ ] **Step 3: Manual check**

Run: `npm run dev`, open the printed URL, navigate to `/shebuilds`. Confirm:
- Pink mascot splash covers the screen, mascot cycles + SheBuilds logo shows, then fades (~1.5s).
- Navbar is the GDGoC navbar, restyled pink; navigating to `/` reverts it to normal.
- Hero shows the cycling mascot in the white tilted frame with the MAY 30 badge.
- Sponsors marquee scrolls and pauses on hover.
- Member cards fade up on scroll.
- Pink "For Her" footer renders; "Reserve your seat" opens the JOIN US form; "Meet the women" scrolls to the grid.
- Refresh on `/shebuilds` replays the splash.

- [ ] **Step 4: Final commit (only if Step 1/2 required code fixes)**

```powershell
git add -A ; git commit -m "fix: resolve lint/build issues for SheBuilds page"
```

---

## Self-Review

**Spec coverage:**
- Reference page → React: Tasks 3–6. ✓
- Drop reference nav, use GDGoC navbar: Task 6 (renders `<Navbar/>`), reference nav not ported. ✓
- Pink reference footer, this page only: Task 6 (scoped `.footer` in module). ✓
- Mascot splash every entry: Tasks 5–6 (`showSplash` state on mount, replays on refresh/route entry). ✓
- Cycling mascot in hero + splash: Tasks 4–6. ✓
- Full navbar pink theme, reverts off-page: Task 8 (`useLocation` + `.sheTheme`). ✓
- Sponsors placeholder cards, seamless marquee: Task 6. ✓
- Members placeholders + gradient avatars + scroll reveal: Task 6. ✓
- CTAs → JOIN US form; "Meet the women" anchor scroll: Task 6. ✓
- Fonts (Fraunces, Pacifico, Plus Jakarta Sans): Task 2. ✓
- Mascot asset size risk: Task 1 note. ✓
- prefers-reduced-motion: Task 3 CSS + Tasks 4/5 guards. ✓

**Placeholder scan:** No TBD/TODO/"add error handling" placeholders; all code is complete.

**Type/name consistency:** `MascotCycle` props (`className`, `interval`, `alt`) match usage in `SheBuilds.jsx` and `SheBuildsSplash.jsx`. `SheBuildsSplash` prop `onDone` matches usage. CSS class names referenced in JSX (`styles.page`, `styles.member`, `styles.in`, `styles.mascotCycle`, `styles.mascotActive`, `styles.splash`, `styles.splashLeaving`, `styles.splashMascot`, `styles.splashLogo`, `styles.sheTheme`, etc.) all exist in `SheBuilds.module.css` / `Navbar.module.css`. Section ids (`shebuilds-women`) match the `scrollToWomen` target. ✓
