# SheBuilds Page — Design Spec

**Date:** 2026-05-30
**Status:** Approved (design), pending implementation plan

## Goal

Convert the self-contained reference page `src/assets/SheBuilds/Referencehtml/shebuilds.html`
into a real React page in the GDGoC TUP Manila site, served at route `/shebuilds`
(currently a placeholder `UnderConstruction`). Replace the reference's own header with the
shared GDGoC `<Navbar/>`. Keep the reference's pink footer for this page only. Add a mascot
splash screen on entry and flip the whole page (navbar included) to the SheBuilds pink theme.

## Scope

In scope:
- New SheBuilds page + scoped styles ported from the reference HTML/CSS/JS.
- Route swap in `App.jsx`.
- Route-aware pink theming of the shared `<Navbar/>`.
- Mascot splash overlay on every entry to `/shebuilds`.
- Cycling mascot animation (Pose 1 → 2 → 3) in splash and hero.
- Web fonts for the page (Fraunces, Pacifico, Plus Jakarta Sans).

Out of scope:
- Real member data (placeholders shipped; swapped later).
- Real sponsor logos (placeholder cards shipped; swapped later).
- Backend / API endpoints.
- SheBuilds-specific RSVP form (reuses existing JOIN US form).

## Files

| File | Change |
|------|--------|
| `src/pages/shebuilds/SheBuilds.jsx` | New page component. |
| `src/pages/shebuilds/SheBuilds.module.css` | New scoped styles, ported from reference. |
| `src/App.jsx` | Route `/shebuilds`: `<UnderConstruction/>` → `<SheBuilds/>`. `/Under-Construction` unchanged. |
| `src/components/navigation-bar/Navbar.jsx` | Route-aware `sheTheme` class via `useLocation()`. |
| `src/components/navigation-bar/Navbar.module.css` | Pink theme overrides under `.sheTheme`. |
| `index.html` | Add Fraunces + Pacifico + Plus Jakarta Sans font links. |

CSS Modules are used so the reference's generic class names (`.nav`, `.hero`, `.btn`,
`.footer`, `.member`, etc.) are locally scoped and cannot collide with the site's global CSS.

## Page structure

Top → bottom inside the page wrapper:

1. `<Navbar/>` — shared component, themed pink while on this route.
2. **Splash overlay** — full-screen, see below.
3. **Hero** — script eyebrow ("Hi! I'm Gigi"), display headline ("She codes. She leads.
   SheBuilds."), info chips (date / venue / free), CTA buttons, and the cycling mascot in a
   white sticker frame with the starburst date badge.
4. **Sponsors** — pink section, seamless marquee of placeholder sponsor cards, pauses on hover.
5. **The Women** — section header + responsive grid of 12 placeholder members with generated
   gradient SVG avatars; cards reveal on scroll.
6. **Footer** — the reference's pink footer (For Her, RSVP button, socials, copyright). Used
   on this page only; the shared `<Footer/>` is NOT used here.

The reference's own `<nav>` is removed entirely.

## Components

### MascotCycle
Cross-fades between `assets/mascot/Pose 1.png`, `Pose 2.png`, `Pose 3.png` on a loop.
- Stacked images, opacity transition; active index advances on an interval.
- Reused in both the splash and the hero frame.
- Mascot PNGs confirmed transparent (RGBA, alpha 0–255).

### SheBuildsSplash
Full-screen pink cover shown on page mount.
- Contains `MascotCycle` + `SheBuilds.svg` logo scaling in.
- Holds ~1.5s, then fades out and unmounts.
- Plays on **every** entry to `/shebuilds` (nav click, direct URL, refresh).
- Implemented mount-based: `useState` flag + timeout in the page component. No router
  interception needed (matches "every entry" requirement).

## Navbar theming

Approach (chosen): `<Navbar/>` reads `useLocation()`; when `pathname === '/shebuilds'` it adds
a `styles.sheTheme` class to its root. Pink overrides live in `Navbar.module.css` under
`.sheTheme` — blush/glass background, rose link colors, gradient JOIN US button, SheBuilds
link emphasized. Theme auto-reverts when navigating away. No other pages change; no prop
drilling.

Rejected alt: a `theme` prop passed from each page (touches every page, more surface area).

## Data & behavior

- **Members:** hardcoded array of 12 `{name, role, photo:null}`; gradient SVG avatar generated
  per card (ported from reference JS).
- **Sponsors:** hardcoded placeholder cards ("Your Brand Here" style); array duplicated for a
  seamless marquee loop.
- **CTAs:** "Reserve your seat" / RSVP → JOIN US form `https://forms.gle/vfEcZzgwc1ugVaCTA`
  (opens new tab). "Meet the women" → smooth-scroll anchor to the grid section.
- **Marquee:** CSS scroll animation, `animation-play-state: paused` on hover.
- **Member reveal:** `IntersectionObserver` in `useEffect` adds an `in` class for staggered
  fade-up.

## Motion & accessibility

- Splash: pink cover, mascot cross-fade + logo scale-in, ~1.5s hold, fade out.
- Hero mascot: continuous cross-fade cycle.
- Marquee: continuous horizontal scroll, pause on hover.
- Member cards: scroll-reveal fade-up.
- `prefers-reduced-motion: reduce`: disable looping/scroll animations; splash shows briefly
  then fades quickly; member cards render visible immediately.

## Risks / notes

- **Mascot asset size:** PNGs are 4096×4096 — very heavy. Downscale to ~600px (or export
  optimized) before shipping to avoid a large payload. To be handled in the plan.
- **Pacifico font:** already referenced by the existing navbar SheBuilds logo; adding the font
  link benefits both.
- React port replaces the reference's vanilla DOM-generation script with JSX `.map()` rendering
  and `useEffect`-driven observers.

## Success criteria

- Visiting `/shebuilds` shows the mascot splash, then the SheBuilds page.
- Navbar is the shared GDGoC navbar, restyled pink only on this route, reverting elsewhere.
- Hero shows the cycling mascot; sponsors marquee loops; member grid reveals on scroll.
- Pink reference footer renders on this page; other pages unaffected.
- CTAs open the JOIN US form; "Meet the women" scrolls to the grid.
- No global CSS regressions on other pages.
