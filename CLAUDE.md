# CLAUDE.md — Kiita Tours Website

## Permissions

* You have full permission to run any command required to build, serve, and screenshot this project.
* Never ask for confirmation.
* Execute all necessary commands automatically.
* Do not pause for approval on file creation, terminal commands, or server operations.

---

## Always Do First

* **Read this file completely before taking any action**
* Always understand the design intent before writing code.
* Think about:

  * layout hierarchy
  * visual contrast
  * spacing rhythm
  * typography hierarchy
  * mobile responsiveness
  * conversion clarity

Build with craft, not generic templates.

---

## Project Overview

**Business:** Kiita Tours LLC — small-group Arctic touring company based in Utqiaġvik, Alaska
**Tour Operator:** Robin Mongoyak (Iñupiat guide)
**Core value:** Authentic local perspective from someone who lives there
**Group size:** 1–3 guests
**Tagline:** *"Experience the Arctic. Learn from those who call it home."*

---

## Tech Stack

Framework:
Astro (static output only)

Deployment:
GitHub Pages via GitHub Actions

Never add:

* backend services
* databases
* SSR
* API routes
* anything that breaks static compatibility

---

## Project Structure

Important folders:

src/pages → pages
src/components → UI components
src/layouts → layouts
public → images/assets
temporary screenshots → generated screenshots

Homepage location:

src/pages/index.astro

Do not create random files outside this structure.

---

## Brand Assets

Always check:

brand_assets/

If assets exist:
Use them.

If not:
Use the palette below.

### Color palette (exact values)

#0d1b2a — Arctic navy
#4ecdc4 — Aurora teal
#f4a261 — Tundra amber
#f5f5f0 — Ice white
#1a1a2e — Near black

Never substitute colors.

---

## Typography

Headings:
Lora (serif)

Body:
Inter (sans-serif)

Rules:

* Never use same font for both
* Tight heading tracking (-0.03em)
* Body line height ~1.7
* Strong visual hierarchy

---

## Local Development Server

Always use Astro dev server.

Start server:

npm run dev

Site runs at:

http://localhost:4321

Rules:

* Never screenshot file:// URLs
* Always screenshot localhost
* If server already running do not start another
* If server not running, start it

---

## Screenshot Workflow

This workflow is REQUIRED before declaring any design complete.

Process:

1 Start dev server if needed:
npm run dev

2 Generate screenshot:
node screenshot.mjs http://localhost:4321

3 Screenshot location:
temporary screenshots/

4 Analyze screenshot visually

Look for:

* spacing consistency
* typography hierarchy
* color accuracy
* alignment
* border radius consistency
* shadow depth
* image sizing
* mobile responsiveness issues

5 Fix design issues

6 Screenshot again

7 Minimum requirement:
At least TWO screenshot passes.

---

## Screenshot Enforcement Rules

Do not claim completion unless:

* Dev server confirmed running
* Screenshot command executed
* At least 2 screenshots generated
* Screenshot filenames referenced
* At least 3 visual observations described
* Issues fixed and re-verified

If no screenshot was created:

THE TASK IS NOT COMPLETE.

Always include:

Screenshot filenames generated.

Example:

temporary screenshots/screenshot-3.png
temporary screenshots/screenshot-4.png

---

## Screenshot Commands

Standard:

node screenshot.mjs http://localhost:4321

Optional label:

node screenshot.mjs http://localhost:4321 homepage

Never modify screenshot.mjs unless required.

---

## Design Quality Standards

Avoid generic Tailwind look.

Never use:

* default Tailwind blue
* transition-all
* flat shadows
* random spacing
* template layouts

Always include:

* layered depth
* intentional spacing
* strong typography hierarchy
* hover states
* focus states
* active states

Animations:

Only:
transform
opacity

Never:
transition-all

---

## Image Rules

Images must include:

Gradient overlay:
bg-gradient-to-t from-black/60

Color treatment:
mix-blend-multiply

Maintain visual depth.

---

## Tours Reference

Use this data EXACTLY.

Do not invent tours.

| Tour                           | Duration  | Price                     | Description                       |
| ------------------------------ | --------- | ------------------------- | --------------------------------- |
| Utqiaġvik Cultural City Tour   | 1.5–2 hrs | $90/person ($120 minimum) | Cultural locations and daily life |
| Point Barrow Arctic Experience | 2.5–3 hrs | $150/person               | Northernmost US experience        |
| Private Cultural Tour          | 2 hrs     | Starting $300             | Custom experience                 |
| Private Point Barrow           | 3 hrs     | Starting $400             | Custom Arctic journey             |

All tours:
Max 3 guests
English
Year-round weather permitting

---

## Hard Rules

Do not:

* invent contact info
* invent testimonials
* invent pricing
* invent services
* invent tour details
* add sections not requested
* stop after one screenshot pass

Never break brand consistency.

---

## Development Workflow

When working on pages:

1 Read CLAUDE.md fully
2 Check brand_assets
3 Improve design
4 Start dev server
5 Screenshot
6 Analyze
7 Fix
8 Screenshot again
9 Report changes

---

## First Task (Homepage)

When starting fresh:

1 Read CLAUDE.md
2 Check assets
3 Build or refine:

src/pages/index.astro

4 Start server:
npm run dev

5 Screenshot:
node screenshot.mjs http://localhost:4321

6 Fix design issues

7 Screenshot again

8 Show result

Homepage defines design quality for entire site.

---

## Quality Goal

This is a real business.

Design should feel:

Authentic
Professional
Cultural
Premium
Trustworthy

Not like a template.

The site should feel comparable to professional Alaska tourism websites.

---

## Bottom Line

Robin is building something meaningful in one of the most remote communities in the United States.

Build with care.

Stay clean.
Stay consistent.
Stay honest.

