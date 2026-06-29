---
name: Hand In Hand
description: A steady, confidential ministry brand system for faith-rooted personal support.
colors:
  ink: "#0e0e0e"
  surface: "#131313"
  surface-low: "#1c1b1b"
  surface-high: "#2a2a2a"
  gold: "#e9c176"
  gold-deep: "#412d00"
  paper: "#e5e2e1"
  muted: "#d1c5b4"
  outline: "#9a8f80"
  rule: "#4e4639"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "normal"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "normal"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section: "96px"
  section-lg: "144px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.gold-deep}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  field-underline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "16px 0"
---

# Design System: Hand In Hand

## 1. Overview

**Creative North Star: "The Quiet Confessional"**

This system should feel like a private room held open by someone steady: low light, direct language, no performance. The dark surface is not decorative dark mode; it creates privacy and seriousness for visitors who may be cautious, ashamed, protective, or evaluating trust on behalf of someone else.

The visual language is intentionally sparse. Serif type carries humanity and gravity, Manrope carries clarity and legibility, and gold appears only where commitment, action, or spiritual weight needs focus. Layouts use generous spacing, firm rules, square edges, and tonal panels instead of cheerful illustration or glossy nonprofit polish.

It explicitly rejects the anti-references in PRODUCT.md: churchy brochure, therapy startup, crisis hotline, luxury nonprofit, corporate SaaS, guilt-heavy revival language, and generic inspirational ministry branding.

**Key Characteristics:**

- Near-black privacy with paper text and restrained gold emphasis.
- Serif-led hierarchy with sans-serif body copy for clarity.
- Flat, square, rule-based surfaces; depth comes from tone and inset atmosphere.
- Simple calls to action that feel consequential, not promotional.
- Language and layout that treat all three audiences with equal seriousness.

## 2. Colors

The palette is a restrained dark neutral system with a single warm gold accent. Gold should stay rare enough to remain meaningful.

### Primary

- **Candle Gold**: The sole accent for primary actions, active navigation, spiritual emphasis, and moments of commitment.
- **Deep Gold Ground**: Text color used on gold-filled actions and selected text; it keeps gold buttons high-contrast and grounded.

### Neutral

- **Private Ink**: The deepest background for footer bands, solemn sections, and high-privacy moments.
- **Charcoal Surface**: The default body and page shell background.
- **Low Charcoal**: Alternating panels, quiet cards, and secondary blocks.
- **Raised Charcoal**: Higher-emphasis surfaces when a tonal step is needed.
- **Paper**: Primary text on dark surfaces.
- **Warm Muted Text**: Secondary prose, supporting lines, and lower-priority explanatory copy.
- **Old Brass Outline**: Form labels, subdued metadata, and non-primary dividers.
- **Ash Rule**: Borders, hairlines, grid separators, and structural lines.

### Named Rules

**The One Accent Rule.** Gold is the only accent. Do not introduce blues, purples, greens, or red alert tones unless a future system explicitly defines semantic states.

**The Privacy First Rule.** Charcoal surfaces carry the brand. Do not switch public ministry pages to cream, white, beige, or cheerful pastel backgrounds.

**The Gold Is Consequence Rule.** Use gold for action and sacred emphasis, not decoration. If every label is gold, none of them are.

## 3. Typography

**Display Font:** Source Serif 4 with Georgia fallback
**Body Font:** Manrope with system sans fallback
**Label/Mono Font:** Manrope; no monospace voice is used

**Character:** The pairing is grave but readable. Source Serif 4 gives the ministry a human, spoken quality; Manrope keeps instructions, forms, and navigation clear enough for visitors under stress.

### Hierarchy

- **Display** (600, `clamp(3rem, 8vw, 6rem)`, `0.98` line-height): Hero statements and the largest trust-building claims. Keep letter spacing no tighter than `-0.04em`.
- **Headline** (500, `clamp(2.25rem, 5vw, 4.5rem)`, `1` line-height): Section headings and page-level transitions.
- **Title** (500, `clamp(1.875rem, 3vw, 3rem)`, `1.12` line-height): Cards, form headings, founder blocks, and process labels.
- **Body** (400, `1rem` to `1.5rem`, `1.7` line-height): Explanatory copy. Keep paragraphs at or below 65-75 characters where possible.
- **Label** (800, `0.65rem` to `0.75rem`, uppercase, `0.18em` to `0.24em` letter spacing): Navigation, short buttons, and form labels only.

### Named Rules

**The No Costume Rule.** Do not use monospace to create seriousness. This brand is not technical, industrial, or terminal-like.

**The Label Rationing Rule.** Uppercase tracked labels may identify controls and navigation, but repeated tiny section eyebrows are prohibited as a default page scaffold.

## 4. Elevation

This system is flat by default. Depth comes from tonal shifts, borders, inset shadows, and radial atmosphere inside signature panels rather than floating cards. Shadows should never create glossy product-card lift.

### Shadow Vocabulary

- **Inset Vigil** (`inset 0 0 7rem rgb(0 0 0 / 0.24)`): Used in the message frame to create a quiet internal glow.
- **Deep Inset Vigil** (`inset 0 0 7rem rgb(0 0 0 / 0.42)`): Used in the unseen panel where the surface should feel more private and enclosed.

### Named Rules

**The Flat-by-Default Rule.** Surfaces rest on the page. Do not combine a decorative 1px border with a large soft drop shadow.

**The Tonal Depth Rule.** Use `surface`, `surface-low`, `surface-high`, borders, and inset atmosphere before reaching for exterior shadows.

## 5. Components

### Buttons

- **Shape:** Square, no radius (`0px`). Buttons should feel firm and deliberate, not soft or playful.
- **Primary:** Candle Gold background with Deep Gold Ground text; `16px 32px` padding; Manrope extra-bold uppercase label with tracked letters.
- **Hover / Focus:** Primary buttons may lower opacity or invert to transparent gold-outline treatment. Focus states must be visibly stronger than hover and should use the gold border/outline.
- **Secondary / Ghost:** Transparent background, Paper text, Ash Rule border, gold hover border and text.

### Cards / Containers

- **Corner Style:** Square corners (`0px`).
- **Background:** Use Charcoal Surface, Low Charcoal, or Private Ink. Alternate tonal blocks rather than creating nested cards.
- **Shadow Strategy:** No exterior shadows at rest. Use inset shadows only for signature atmospheric panels.
- **Border:** Thin Ash Rule or dark structural borders only; no thick side-stripe accents.
- **Internal Padding:** Use generous padding (`40px` to `64px`) for trust-building panels; avoid cramped content.

### Inputs / Fields

- **Style:** Transparent underline fields with Paper input text, Old Brass labels, and muted placeholders.
- **Focus:** Underline shifts to Candle Gold. Add an accessible focus outline when keyboard focus is present.
- **Error / Disabled:** Not fully defined yet. Future error states must preserve the serious tone and meet WCAG AA without introducing harsh alarm styling by default.

### Navigation

- **Style:** Fixed top navigation on a semi-opaque Charcoal Surface with a subtle bottom border and blur.
- **Typography:** Brand mark uses Source Serif 4 in Candle Gold. Links use small uppercase tracked serif labels.
- **States:** Active links use Candle Gold and a thin bottom border. Inactive links should stay subdued but must remain readable.
- **Mobile:** Horizontal overflow link row below the primary bar; preserve tap target clarity and avoid wrapping nav labels into cramped lines.

### Section Frames

- **Style:** Full-width bands with constrained inner content (`max-width: 80rem`) and responsive horizontal padding.
- **Spacing:** Sections breathe generously (`96px` to `144px` vertical spacing) with tighter groupings only when copy forms a single thought.
- **Behavior:** Use sections as narrative pacing, not as floating cards.

### Signature Atmosphere Panels

- **Style:** Square dark panels using radial and linear gradients with inset shadow.
- **Purpose:** Represent unseen weight, private struggle, or a message moment without literal stock imagery.
- **Rule:** These panels are atmospheric surfaces, not decorative placeholders. If a page needs literal people, churches, or real ministry context, use real imagery instead of abstract panels.

## 6. Do's and Don'ts

### Do:

- **Do** preserve the near-black, paper, and gold identity when adding new public pages.
- **Do** use gold sparingly for action, active state, and spiritual emphasis.
- **Do** keep body copy direct, shame-free, and concrete.
- **Do** treat people seeking help, potential walkers, and church leaders with equal visual priority.
- **Do** keep surfaces square, flat, and structured with thin borders and tonal changes.
- **Do** verify contrast for muted text, placeholders, labels, and nav links; WCAG AA is the baseline.
- **Do** use process numbers only when the content is genuinely sequential and the order matters.

### Don't:

- **Don't** make this feel like a churchy brochure, therapy startup, crisis hotline, luxury nonprofit, corporate SaaS, guilt-heavy revival language, or generic inspirational ministry branding.
- **Don't** use cream, beige, white, pastel, purple-gradient, or cheerful nonprofit palettes.
- **Don't** add rounded cards, pill-heavy sections, glassmorphism, decorative drop shadows, or marketing-style metric blocks.
- **Don't** repeat tiny uppercase tracked eyebrows above every section heading.
- **Don't** use `border-left` or `border-right` greater than `1px` as a colored accent on cards, callouts, or list items.
- **Don't** introduce hand-drawn sketch SVGs, doodle illustrations, stripe backgrounds, or generic symbolic religious clip art.
- **Don't** let forms feel casual. Every field and checkbox should communicate care, discretion, and responsibility.
