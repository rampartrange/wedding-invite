# Agents Guide — Wedding Invite

## Project Overview

Next.js 14 wedding invitation app for Artem & Vita's wedding (24 August 2026, Golf Resort Gelendzhik).
The app opens with an interactive mini-golf game gate; guests must drag the ball into the hole (or skip) to unlock the invitation.

**Stack:** Next.js 14, React 18, TypeScript 5, inline styles (no CSS framework), Canvas API for the game.

**Run locally:**
```bash
npm install
npm run dev   # http://localhost:3000
```

---

## Architecture

```
app/
  layout.tsx          — RootLayout, Google Fonts (LoliCandy + Nunito Sans), metadata
  page.tsx            — Root page; toggles between GolfGame and the full invite
  globals.css         — Design tokens, keyframe animations, shared CSS classes
  components/
    GolfGame.tsx      — Canvas drag-to-hole game; calls onComplete() on win or skip
    Navigation.tsx    — Fixed top nav; appears after scroll > 80 vh, highlights active section
    WeddingDetails.tsx — Intro section (#details): date, venue, background image
    Timeline.tsx      — Programme/schedule section (#timeline)
    Location.tsx      — Directions section (#location)
    Dresscode.tsx     — Dress code section (#dresscode)
    Gifts.tsx         — Gift wishes section (#gifts)
    Contacts.tsx      — Contact info section (#contacts)
    Survey.tsx        — RSVP form section (#survey); supports Google Form iframe or inline form
public/
  images/
    background.jpg    — Used as decorative overlay in WeddingDetails
    dresscode.jpg     — Used in Dresscode section
```

Page flow: `GolfGame` → (win/skip) → `Navigation` + all sections rendered in scroll order.

---

## Design System

Defined in `app/globals.css`. All components use inline styles; CSS classes are used for shared primitives.

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Rose (primary) | `#b8505f` | Background, buttons, headings |
| Rose hover | `#c55a6a` | Interactive states |
| Gold (accent) | `#e8b860` | CTAs, doodle lines, active nav |
| Olive | `#9ea84b` | Section backgrounds, canvas stripe |
| Cream | `#f5f0e8` | Card backgrounds, text on dark |
| Dark | `#2c2c2c` | Body text |
| Blue | `#2b52a3` | WeddingDetails headings (unique to that section) |

### Typography
- **LoliCandy** — headings, display text, buttons (loaded via Google Fonts)
- **Nunito Sans** — body text, labels, UI copy

### Shared CSS Classes
`.button-primary`, `.button-outline`, `.button-rose` — pill buttons  
`.tag`, `.tag-rose` — pill labels  
`.card`, `.card-white` — content cards  
`.doodle-line` (gold) / `.doodle-line-olive` — decorative section dividers  
`.section-icon` — floating emoji icons  
`.color-dot` — dress code colour swatches  
`.container` — max-width 900 px centred wrapper  
`.fade-in`, `.fade-in-delay-{1,2,3}` — entrance animations  

### Keyframe Animations
`fadeInUp`, `fadeIn`, `slideIn`, `float`, `pulse`, `wiggle`, `popIn`

---

## Component Reference

### `GolfGame`
**Props:** `onComplete: () => void`  
Canvas-based game (700 × 500). Ball starts at `(120, 300)`, hole at `(580, 300, r=25)`.  
Supports mouse and touch drag. Win condition: ball released within `holePos.radius + ballRadius + 40` px of hole.  
Shows "Пропустить →" button to bypass without playing.  
After win: congratulations screen → "Открыть приглашение →" triggers `onComplete`.

### `Navigation`
Fixed top nav, hidden until `scrollY > 80 vh`.  
Sections tracked: `details`, `timeline`, `location`, `dresscode`, `gifts`, `contacts`, `survey`, `final`.  
Uses `IntersectionObserver`-style scroll listener; active section highlighted in gold.

### `Survey`
**State:** toggle between Google Form iframe mode and inline HTML form.  
Inline form fields: name (text), attendance (radio), drinks (checkbox multi-select), allergy (textarea).  
`GOOGLE_FORM_URL` constant at top of file — **must be replaced** with real Google Form embed URL before production.  
Inline form submission is client-side only (no backend); switches to a thank-you view but sends no data.

---

## Known TODOs / Before Going Live

1. **Survey form URL** — replace `GOOGLE_FORM_URL` placeholder in `Survey.tsx:5` with a real Google Form embed URL.
2. **Survey backend** — inline form currently does not persist submissions; wire up to Google Forms or an API route if needed.
3. **`Final` component** — imported in `page.tsx`? No, it is not rendered yet. `app/components/Final.tsx` exists but is unused.
4. **Font `LoliCandy`** — loaded via Google Fonts, but the `@font-face` declaration in `globals.css` references a `url()` that points to a Google Fonts CSS URL, not a font file. The actual loading happens via `<link>` in `layout.tsx`; the `@font-face` block in CSS is redundant and potentially broken.

---

## Working with This Codebase

- **Adding a new section:** create `app/components/MySection.tsx`, give the root element `id="mysection"`, import and render it in `page.tsx` between the existing sections, add `{ id: 'mysection', label: '...' }` to the `items` array in `Navigation.tsx`.
- **Changing colours:** update the inline `style` props in the component. For global token changes update `globals.css` and search for the hex value across components.
- **Canvas game changes:** all drawing logic is in the `useEffect` in `GolfGame.tsx:29–189`. Game physics/state is minimal — ball position is pure state, no physics simulation.
- **Fonts:** both fonts must be available at render time. If Google Fonts is unavailable the fallbacks are `cursive` and `sans-serif`.
