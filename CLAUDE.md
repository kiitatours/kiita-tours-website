# CLAUDE.md — Kiita Tours Website

## Permissions
- You have full permission to run any command required to build, serve, and screenshot this project.
- Never ask for confirmation. Execute all necessary commands automatically.
- Do not pause for approval on file creation, terminal commands, or server operations.

---

## Always Do First
- **Read this file completely** before taking any action.
- Before writing any frontend code, reason through the design carefully: think about layout hierarchy, visual contrast, spacing rhythm, and mobile responsiveness. Build with craft, not generic HTML.

---

## Project Overview

**Business:** Kiita Tours LLC — a small-group Arctic touring company based in Utqiaġvik, Alaska
**Tour Operator:** Robin Mongoyak (Iñupiat guide, local knowledge)
**Core value proposition:** Authentic local perspective from someone who actually lives and grew up there — not a commercial tourism package.
**Group size:** 1–4 guests per tour
**Tagline:** *"Experience the Arctic. Learn from those who call it home."*

---

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If no assets exist, use the palette and typography below — do not invent alternatives.

**Color palette (exact hex values — do not substitute):**
- `#0d1b2a` — Deep Arctic navy (primary backgrounds, headers)
- `#4ecdc4` — Aurora teal (buttons, links, highlights)
- `#f4a261` — Tundra amber (accents, hover states)
- `#f5f5f0` — Ice white (page backgrounds, cards)
- `#1a1a2e` — Near-black (body text)

**Typography:**
- Headings: `Lora` (Google Fonts) — serif, warm, trustworthy
- Body: `Inter` (Google Fonts) — clean, readable, modern
- Never use the same font for headings and body
- Large headings: tight tracking (`-0.03em`)
- Body text: generous line-height (`1.7`)

---

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content where needed. Do not improve or add to the design.
- If no reference image: design from scratch with high craft using the brand guidelines above.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

---

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

---

## Screenshot Workflow
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots save automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` and analyze it directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

---

## Output Defaults
- Single `index.html` file, all styles inline, unless told otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT` or Arctic/tundra images from Unsplash (free)
- Mark all placeholder text with `<!-- PLACEHOLDER: description -->` so it's easy to swap later
- Mobile-first responsive
- Never invent contact info, quotes, or tour details — use only what's in this file

---

## Tours Reference

Use this data exactly when building tour cards, listings, or booking forms. Do not invent tours or change prices.

| Tour Name | Duration | Price | Description |
|---|---|---|---|
| Utqiaġvik Cultural City Tour | 1.5–2 hrs | $90/person ($120 minimum) | Visit key locations such as the Whalebone Arch and local viewpoints while learning about Iñupiat culture, daily life, and the history of Utqiaġvik. |
| Point Barrow Arctic Experience | 2.5–3 hrs | $150/person | Journey to the northernmost point in the United States while learning about Arctic geography, traditional subsistence life, wildlife, and environmental conditions. |
| Private Utqiaġvik Cultural City Tour | 2 hrs / flexible | Starting at $300 per group | A fully customizable private experience in the city limits of Utqiaġvik tailored to your interests — culture, history, photography, or Arctic life. Ideal for families, researchers, and photographers. |
| Private Point Barrow Arctic Experience | 3 hrs / flexible | Starting at $400 per group | A fully customizable private journey to the northernmost point in the United States, tailored to your interests. |

All tours: max 4 guests, English language, year-round availability subject to weather.

---

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the exact brand hex values above.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. `Lora` + `Inter` only.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all at the same z-plane.

---

## Hard Rules
- Do not add sections, features, or content not in the reference or this file
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not invent tours, prices, names, or contact information
- Never create files outside the established structure without asking

---

## First Task

When starting fresh, do this in order:

1. Read this file completely
2. Check `brand_assets/` for any existing logos or images
3. Build `index.html` (homepage) using the brand guidelines above
4. Start `serve.mjs`, screenshot, analyze, fix, re-screenshot
5. Show me the result before moving to other pages

The homepage sets the design standard for everything else. Get it right first.

---

## Bottom Line

You're building a real business's public face. Robin is an Iñupiat guide starting something meaningful in one of the most remote communities in the United States. The site should feel like it was built with care — because it was.

Stay consistent. Stay clean. Keep the brand honest.
