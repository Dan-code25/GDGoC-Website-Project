# SheBuilds — Design System & Color Schema

A design language for the **SheBuilds** one-page site under GDGoC TUP Manila — an
event celebrating and empowering **women in tech**. The system is extracted
directly from the official SheBuilds key visual (the "Gigi" eyes artwork): soft
blush backgrounds, a confident hot-pink brand color, white sticker outlines, and
playful accents (blue sparkles, lilac gradients, hearts and blossoms).

> **Tone:** playful, soft, confident, feminine — but never fragile. Rounded
> sticker shapes, generous whitespace, and a single bold pink that carries the
> whole brand.

---

## 1. Color Palette

All colors are pulled from the key visual. Use CSS custom properties so the
whole page stays in sync.

### Brand / Primary

| Token | Hex | Use |
|---|---|---|
| `--rose-hot` | `#FF54B0` | **Primary brand.** Buttons, links, the "SheBuilds" wordmark, key accents. |
| `--rose-deep` | `#F4308F` | Hover / pressed states, gradient ends, emphasis. |
| `--rose-soft` | `#FF84C5` | Secondary pink (eyeshadow tone). Tags, soft fills, gradients. |

### Surfaces (pinks)

| Token | Hex | Use |
|---|---|---|
| `--blush` | `#FDE4F9` | **Page background.** The dominant soft pink. |
| `--cotton` | `#FFE2F8` | Alternating section background. |
| `--petal` | `#FED5F5` | Card backgrounds, chips, soft panels. |
| `--white` | `#FFFFFF` | Sticker outlines, cards, highlights, text on pink. |

### Accents

| Token | Hex | Use |
|---|---|---|
| `--blue-spark` | `#3B6EFF` | Sparkle accent (the star glints in Gigi's eyes). Tiny highlights only. |
| `--lilac` | `#C9A0E8` | Lilac/purple gradient (bottom-right swoosh). Backgrounds & gradients. |
| `--ink` | `#1F1F1F` | Primary text (the deep eye color). Headlines & body. |
| `--ink-soft` | `#6B5566` | Muted body text, captions, metadata. |

### Signature gradients

```css
/* Brand sweep — buttons, wordmark */
--grad-rose: linear-gradient(135deg, #FF84C5 0%, #FF54B0 45%, #F4308F 100%);
/* Dreamy page atmosphere — bottom-right swoosh */
--grad-dream: linear-gradient(120deg, #FFE2F8 0%, #FED5F5 40%, #C9A0E8 100%);
/* Soft card glow */
--grad-petal: linear-gradient(160deg, #FFFFFF 0%, #FFE2F8 100%);
```

---

## 2. Typography

A pairing that mirrors the artwork: a flowing **script** for the playful
"SheBuilds" energy, a soft **serif** for warm-but-confident headings, and a
clean **sans** for readable body copy. (Loaded from Google Fonts.)

| Role | Font | Notes |
|---|---|---|
| Script accent | **Pacifico** | Echoes the SheBuilds logo. Eyebrows, "For Her" flourishes, small labels. Use sparingly. |
| Display / headings | **Fraunces** | Soft, characterful serif. Section titles, hero headline. Weights 400–900, optical "soft" feel. |
| Body / UI | **Plus Jakarta Sans** | Modern, friendly geometric sans. Paragraphs, nav, buttons, captions. |

```css
--font-script: 'Pacifico', cursive;
--font-display: 'Fraunces', 'Georgia', serif;
--font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
```

**Scale (clamp-based, responsive):**

| Step | Size |
|---|---|
| Hero | `clamp(2.75rem, 7vw, 5.5rem)` |
| Section title | `clamp(2rem, 4.5vw, 3.25rem)` |
| Card name | `1.25rem` |
| Body | `1.0625rem` / line-height `1.7` |
| Caption / role | `0.9rem`, letter-spacing `0.02em` |

---

## 3. Shape, Depth & Motion

- **Radius:** everything is rounded and sticker-like. `--r-sm: 14px`,
  `--r-md: 22px`, `--r-lg: 34px`, `--r-pill: 999px`.
- **Sticker outline:** key elements get a thick white border + soft pink shadow,
  mimicking the cut-sticker look of the wordmark and date badge.
  `border: 3px solid #fff; box-shadow: 0 14px 40px rgba(255,84,176,.22);`
- **Shadows:** always tinted pink, never neutral grey.
  `--shadow-soft: 0 10px 30px rgba(255,84,176,.16);`
  `--shadow-pop: 0 18px 50px rgba(244,48,143,.28);`
- **Motion:** gentle and bouncy. Floating hearts/sparkles, a marquee sponsor
  slider, staggered fade-up reveals on scroll, and springy hover lifts on cards
  (`cubic-bezier(.34,1.56,.64,1)`). Respect `prefers-reduced-motion`.

---

## 4. Decorative Language

Reusable motifs lifted from the key visual:

- ✦ **Blue sparkles** — small 4-point stars, used as bullets and accents.
- ♥ **Hearts** — outlined pink hearts, floating in backgrounds.
- ❀ **Cherry blossoms** — soft pink 5-petal flowers in corners.
- 〰 **Sticker squiggles** — little pink hand-drawn strokes near headings.
- **Blobs** — organic gradient blobs (`--grad-dream`) blurred behind sections
  for atmosphere/depth.

---

## 5. Component Patterns

- **Buttons** — pill, `--grad-rose` fill, white text, pink pop-shadow; hover
  lifts 2px and deepens. Secondary = white fill, pink text, pink border.
- **Chips / tags** — `--petal` background, `--rose-deep` text, pill radius.
- **Badge** — the starburst "MAY 30" date badge style: white, pink text,
  serrated/scalloped edge feel via layered shadow.
- **Sponsor slider** — infinite horizontal marquee of white sticker cards on
  `--cotton`; pauses on hover.
- **Member card** — portrait (1:1, rounded, white sticker frame) with name
  (Fraunces) and latest role (caption, `--rose-deep`) below. Hover lifts + a
  blue-spark twinkle appears.

---

## 6. Layout & Page Order

1. **Sticky nav** — GDGoC TUPM mark, links back to the main site + in-page
   anchors, pink CTA.
2. **Hero** — the SheBuilds key visual as the centerpiece in a white sticker
   frame, headline + date + RSVP CTA alongside, dreamy blobs behind.
3. **Sponsors** — auto-scrolling slider/marquee of partner logos.
4. **SheBuilds (the women)** — single "SheBuilds" title, then a responsive grid
   of every member across the years, each with photo + latest position below
   (NOT split by year).
5. **Footer** — GDGoC TUP Manila sign-off, socials, "For Her" script flourish.

---

## 7. Accessibility Notes

- Body text uses `--ink` on light pink — keep contrast ≥ 4.5:1; never put small
  `--rose-soft` text on `--blush`.
- Decorative motifs are `aria-hidden`.
- All interactive elements keep visible focus (pink outline).
- Honor `prefers-reduced-motion`: disable marquee + float animations.
