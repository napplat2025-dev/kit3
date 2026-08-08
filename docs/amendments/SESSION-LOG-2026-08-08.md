# KitchenThree — Session Reset Log

**8 Aug 2026.** Chat session on claude.ai (not Cowork). Repo `kit3` worked from
the uploaded zip in the sandbox. Nothing pushed; live site and GitHub untouched.
Two deliverables sit beside this file: `amendments-master.md` (the full ledger)
and `kit3-edited-files/` (the four changed files).

---

## 1. What's WRITTEN INTO CODE this session (in the sandbox copy)

All four files re-verified — parse clean. Not built full (npm install didn't
finish in-session); the production `next build` runs in Claude Code before merge.
**Seven changes across four files — this is the complete branch.**

- **A1 + A4 + D2 + D3 — `src/app/services/ServicesClient.tsx`**
  · Pillar 05 (Cloud Kitchen): full-occupancy-as-proof + two ways in; lead bullet
    custom design & build "led by our own head of technical design" (no name).
  · Pillar 02 (Design Services) → three-discipline pillar, tagline "Kitchen.
    Store. Brand." — commercial kitchen design / store design / concept branding
    lead the bullets, brand work kept beneath. (D2)
  · Pillar 07 → "Site Selection & Store Fit-Out", tagline "Found. Leased. Built.
    Furnished." — contractor + full FF&E/OS&E procurement, one disclosed fee,
    open-supplier line (F9). (D3)
  · Still 9 pillars, nothing dropped.

- **A2 + D2/D3 naming — `src/app/faq/page.tsx`**
  Cloud-kitchen answer gains the availability-truth sentence (A2). Nine-pillar
  sentence and the itemised list updated to "design services (kitchen, store,
  and brand)" and "site selection and store fit-out" so the site tells one story.

- **A3 + D4 — `src/app/invest/page.tsx`**
  Amber "No Active Opportunity" → teal "Active Opportunity — Cloud Kitchen Supply
  Expansion" (A3). Below it, a linkless "In the Pipeline" block for the food
  industry platform — research numbers, no outbound links, "demo access and the
  opportunity brief are shared with registered partners on request." (D4)

- **B1 — `src/app/page.tsx`**  ⚠ PREVIEW-GATED
  New "Operating Leadership" strip between Trusted By and Services — Alfred
  Melkon, three credential chips, "Meet the full team" link. **Karim gives the
  final yes/no on the Vercel preview before this merges.** If he dislikes it on
  screen, revert this one file; the other three still ship.

- **B2 — RESOLVED, no code.** Frozen line, cafeterias, and the Cookies&Pies→KT
  rebrand were already on /our-story. El Mahata turned out to be a *client's*
  food truck (not KT's) that closed during COVID — so it does NOT belong in the
  own-venture timeline. It's now a **case-study candidate (B3)**: KT designed/
  built it for a client; closure was an external shock. Photos + detail live on
  the KitchenThree Facebook page — mine that when B3 unblocks (FB is gated; Karim
  points to specific posts or drops images in).

---

## 2. DECIDED this session (into the ledger, some not yet coded)

- **A1–A4** approved (wording softened so "full" never closes a sentence —
  proof first, open door second).
- **A4 attribution:** public copy never names Girgis Rafaat → "our own head of
  technical design", credential kept. Standing rule.
- **B1** built, preview-gated (above).
- **B2** corrected: frozen line + school cafeterias + the Cookies&Pies→KT
  rebrand are ALREADY on /our-story (2018 entries). Only **El Mahata** is
  genuinely missing sitewide. Its timeline entry is drafted — **needs its
  launch year** to drop in.
- **D2** — pillar 02 "Design Services" becomes the three-discipline design
  pillar (kitchen / store / brand), tagline "Kitchen. Store. Brand." **Approved
  in principle; NOT yet coded** (see §3).
- **D3** — pillar 07 "Site Selection & Lease Advisory" extends to "Site
  Selection & Store Fit-Out" (fit-out as contractor + full FF&E/OS&E
  procurement, one disclosed fee). **Approved in principle; NOT yet coded.**
- **D4** — /invest gets a named "In the pipeline" block for the food industry
  platform (food-industry-platform.vercel.app), research numbers included,
  **NO outbound links** (linking would be the platform's public launch), closing
  "demo access and the opportunity brief are shared with registered partners on
  request." **Approved in shape; NOT yet coded.** Links added only when Karim
  calls the platform public.
- **F-series** proposal-standard language logged: F1 tier names/prices
  (100k/150k/140k, all older figures dead), F2 disclosed management fee quoted
  as fixed EGP never %, F3 no Go/No-Go, F4 savings-share 25/75, F5 leakage
  protection, F6 capital-range gate, F7 standardise on "Kitchen Three" (Karim
  never explicitly confirmed — carry as proposed), F9 supplier transparency /
  dual-role clause (KF-umbrella company supplies openly as external supplier AND
  the % fee still applies on managed spend incl. those supplies).
- **Fee mechanics clarified:** fee IS the % scale on managed spend; the "fixed
  EGP, never a %" rule (F2) is about what the client sees on paper, not the
  math. No conflict with the handoff.

---

## 3. PENDING — first moves when we resume

1. **C1** — blog fix: reconcile the HACCP slug (static route
   `haccp-requirements-egypt-small-business` vs sitemap fallback
   `haccp-requirements-egypt`) in `sitemap.ts`; pin + correct the article date
   in Sanity as a draft (Sanity connector), Karim reviews in `/studio`.
2. **El Mahata as a case study (B3)** — client food-truck build, closed by COVID.
   Needs Karim's detail (client name or "a client", what KT delivered, when);
   photos from the KT Facebook page.
3. **Arabic version of the site (E1)** — after A–D land on production.
4. Proposal masters (queue items 1–3) — separate doc work, not the site branch.

*D2, D3, D4 are now CODED (§1) — no longer pending.*

## 4. PLATFORM-SIDE fixes (food-industry-platform — its OWN repo, separate lane)

- Remove the two roadmap strategy annotations (Regulatory Hub "needs no
  marketplace liquidity", Seasonal Ops "readiest subscription trigger") — keep
  module names, cut the why. **Approved.**
- Remove the live "98 of 100 seats remaining" counter — keep the founding
  program; the number returns once it shows momentum. **Approved.**
- Fix the past June 4 roundtable date.
- Gate the demo — it is currently publicly reachable with no lock (only Ingy has
  been shown it, but the URL is open). Real gate needed before it counts as
  private.

## 5. STILL BLOCKED ON KARIM

- El Mahata launch year (unblocks B2).
- Case studies detail per venture (B3 / queue item 6).
- Open terms H1–H4: study payment 100% vs 50/50; study-credit cap; 140k tier
  duration; final management-fee %.
- Confirm F7 (brand-name standardisation) is wanted.
- Vault §Amendments (`content/website-current-verbatim.md`) — reconcile the
  written 10 against this ledger if they still matter.

---

## 6. Claude Code handoff prompt (paste when ready to ship the full branch)

Ships all seven changes: A1/A2/A3/A4 + D2/D3/D4 (site truth, design pillar,
fit-out, platform pipeline) — plus B1 (Alfred strip), which is preview-gated.

> Work in the `kit3` repo. **Confirm you can reach `kit3` before touching
> anything** — the repo must be selected for this task (a prior session had it
> excluded from the allowlist). If you can't reach it, stop and tell me.
>
> I have four edited files from a chat session (in `kit3-edited-files/`, names
> flattened with `__`):
> `services__ServicesClient.tsx` → `src/app/services/ServicesClient.tsx`;
> `faq__page.tsx` → `src/app/faq/page.tsx`;
> `invest__page.tsx` → `src/app/invest/page.tsx`;
> `home__page.tsx` → `src/app/page.tsx`.
>
> Steps, and tell me exactly where I run each one:
> 1. Create a feature branch `amend-services-invest-leadership` off main.
> 2. Apply the four files to those paths.
> 3. Run `npm install` then `npx next build` — it must pass before anything
>    else. If it fails, show me the error, don't work around it.
> 4. Push the branch and give me the **Vercel preview URL**.
> 5. Stop there. I review the preview — especially the new Alfred "Operating
>    Leadership" strip on the homepage; I may ask to revert just that one file.
> 6. Only after I say so, merge to main.
>
> Never push to main directly. Never auto-merge.

---

*Token note: Fable 5 was mis-selected earlier and burned tokens for no reason —
irrelevant to the work, logged only so the reset is complete. This session ran on
Opus.*
