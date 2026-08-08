# KitchenThree — Master Amendment Ledger

**Created 8 Aug 2026** · Covers: website (code + Sanity), proposals, deck, open terms.
Save into the vault as `knowledge/amendments-master.md`.

**How this works:** every change is one numbered item. Karim rules on each: approve,
amend, or drop. Status updates as we go. Nothing ships until approved; approved site
items travel feature branch → Vercel preview → Karim approval → main.

**Status legend:** PROPOSED · APPROVED · AMENDED (with note) · DROPPED ·
BLOCKED-ON-KARIM · DONE

**Source of truth order (locked):** Karim direct → website → proposal artifacts → deck.

---

## A — Website: capacity truth & the investment story (code lane, repo `kit3`)

**A1 · Fix the "we have the infrastructure" claim on /services** — APPROVED (softened wording) · edited in repo copy
Where: `src/app/services/ServicesClient.tsx` line 34 (cloud-kitchen pillar).
Old: "Whether you need a fully equipped production facility or short-term rental
kitchen, we have the infrastructure."
New (proposed): "Our facilities have run at full occupancy since 2021 — proof the
model works. Join the waitlist for space, or have us design and build your own
kitchen to the same standard."
Bullets reframed: rentals → waitlist; add design-and-build as the open route.

**A2 · Fix the FAQ cloud-kitchen answer** — APPROVED (softened wording) · edited in repo copy
Where: `src/app/faq/page.tsx` line 45.
Keep the four models as capabilities; add the availability truth: central facilities
at full occupancy since 2021; new capacity comes via the build service (A4) and the
investment program (A3); rental interest → waitlist.

**A3 · Publish the active investment opportunity on /invest** — APPROVED · edited in repo copy
Where: `src/app/invest/page.tsx`, the section beginning "We do not publicly list
investment opportunities…" (~line 200).
Replace with: **Active opportunity — Cloud Kitchen Supply Expansion.** Demand is
proven, not projected: Kitchen Hive at full occupancy since June 2021, named tenants
(Vinny's Pizza Bar, Garten). Three unmet segments with zero supply: (1) unfurnished
cloud kitchens, (2) custom-designed furnished cloud kitchens, (3) furnished
short-term-rental cloud kitchens — all to the KitchenThree execution standard.
KitchenThree brings the standard, operating capability, pipeline, and brand; the
investor brings capital. Terms shared on qualified contact — no numbers on the page
until Karim supplies them. Existing register form stays as the CTA.

**A4 · Productise Segment 2 as a build service** — APPROVED · edited in repo copy (folded into the cloud-kitchen pillar)
Where: /services cloud-kitchen pillar (extends A1).
"Custom Cloud Kitchen Design & Build" — led by our own head of technical design (300+ commercial kitchen projects, full
MEP) — no individual named on public copy, per Karim. Delivered under the disclosed-management-fee model. This is the route for the
client who can't get Kitchen Hive space: no space to rent → we build yours. Needs no
investor; it is a client service, not part of A3.

---

## B — Website: history & credibility

**B1 · Surface Alfred Melkon on the homepage** — APPROVED FOR PREVIEW · built into the branch; Karim gives the final yes/no on the Vercel preview
Where: `src/app/page.tsx` + `src/app/constants/homeData.ts`.
His /team bio is already excellent (Founding Advisor & Operating Partner, full
Cilantro/McDonald's/Molly's record) — the problem is placement. Add a homepage
credibility strip: "Operating leadership: Alfred Melkon — GM of Cilantro, 84 stores
from loss to profit in 18 months; 10 years McDonald's Egypt; Molly's Bakery 0→8
stores in 30 months."

**B2 · El Mahata** — RESOLVED as case-study candidate (B3), NOT a timeline entry
Correction to the original item: the frozen line and the school cafeteria contracts
are already told in the 2018 "Full Scale" timeline entry — my first check was
truncated and wrongly reported them absent. The rebrand is also already covered
("Everything came together under one name: Kitchen Three", 2018 Nine Pillars).
The only genuinely missing venture is **El Mahata** (Egyptian street-food truck,
6th of October City). Entry is drafted; it drops into the timeline the moment
Karim supplies the launch year.

**B3 · Case-studies section** — BLOCKED-ON-KARIM
Where: /clients or a new /work page. Skeleton: Cookies & Pies (2013–present),
Fresco (2017–20), infant food (2017–20), frozen line, school cafeterias, El Mahata,
Kitchen Hive (2021–, full occupancy). Needs Karim's detail per case (queue item 6).

---

## C — Website: technical & blog

**C1 · Reconcile the HACCP article slug + fix the blog date** — PROPOSED
Code side: static route is `/blog/haccp-requirements-egypt-small-business`; the
sitemap fallback list says `haccp-requirements-egypt`. Fix the fallback to the real
slugs. Content side: the date mismatch lives in Sanity — query via the Sanity
connector, correct as a draft, Karim reviews in `/studio`, publishes.

**C2 · Blog revival** — LATER (queue item 8)
Cold since April 2026. Separate work item, not part of the amendment branches.

---

## D — Vault amendments merge

**D1 · Merge the queued amendments** — IN PROGRESS (dictated)
Karim is dictating amendments directly in chat instead of pasting the vault file;
each one gets located in the site structure, proposed, ruled on, then written. If
the written 10 in `content/website-current-verbatim.md` still matter, they
reconcile against this ledger later.

**D2 · Pillar 02 becomes the three-discipline design pillar** — DONE (coded)
Current structure: pillar 02 "Design Services" (slug `design-services`) is
brand-only; technical kitchen design is a single bullet under pillar 05; store
design exists nowhere on the site. Change: keep the title and slug (SEO safe),
retagline to "Kitchen. Store. Brand.", rewrite the description to name the three
disciplines in Karim's order — (1) commercial kitchen design by our own technical
team (300+ projects, full MEP), (2) store & dining-space design, (3) concept
branding — and lead the bullets with those three, existing brand bullets kept
beneath. The kitchen design bullet also stays in pillar 05 deliberately: that is
where the client who can't rent space is reading. FAQ's nine-pillar enumeration
updates from "food brand design" to "design services (kitchen, store, and brand)"
to match.

**D3 · New service: store fit-out & procurement, delivered as contractor** — DONE (coded, pillar 07 extended + FAQ updated)
Karim's dictation: store build as a contractor, plus all furniture, cutlery, and
procurement needs — a fit-out service. Recommended placement: extend pillar 07
(currently "Site Selection & Lease Advisory") into the full get-you-open pillar —
new title "Site Selection & Store Fit-Out", tagline "Found. Leased. Built.
Furnished." Description gains: once the lease is signed we are the contractor —
full store fit-out and complete procurement (furniture, tableware, cutlery,
smallwares, equipment) under one disclosed management fee. No hidden supplier
commissions — where a Kitchen Three company supplies part of the project itself,
it is engaged and invoiced openly, like any other vendor. Three new bullets: fit-out as your contractor (one accountable party
from bare shell to opening day) · complete FF&E + OS&E procurement · supplier
network with negotiated pricing under a disclosed fee. Alternative placement if
preferred: a tenth pillar — but "nine integrated pillars" is repeated across FAQ
and our-story, so that is a brand decision, not a copy edit. Pricing language
stays compliant with F2: fee described as disclosed, never a percentage.

**D4 · Second /invest listing: the food industry platform** — DONE (coded, linkless pipeline block)
The platform is live at food-industry-platform.vercel.app ("food industry —
Egypt's F&B community, structured"): a 14-module B2B platform in private beta on a
founding-100 model, with published pricing and a live research page (44 months,
11,885 messages coded, 22 pain points ranked) crediting Kitchen Three as research
partner. Revised change: /invest gets a named "In the pipeline" block — platform
name, one-liner, the research numbers, status line "private beta · investment
vehicle being structured · registered partners receive the opportunity brief
first", linking to the platform and its research page. No terms on the page; the
named raise waits for the entity, consistent with the platform's own public
framing (built by a new independent entity, KT as research partner). Pre-link
fixes on the platform side — these live in the platform's own repo, a separate
execution lane from the kit3 branch: (1) the June 4 roundtable date, now past —
flagged; (2) APPROVED by Karim: strip the two roadmap annotations that print
sequencing strategy — the Regulatory Hub no-liquidity note and the Seasonal Ops
subscription-trigger note — keep the module names, cut the why; (3) APPROVED by
Karim: drop the live seat counter — the founding program stays, the number
returns once it shows momentum. Distribution reality (Karim, 8 Aug): the demo is
effectively private — only Ingy has seen it — but the landing URL is publicly
reachable with no gate; treat page contents as public-if-found until gated or
launched. Final D4 shape: the /invest block goes up WITHOUT outbound links — it
names the platform, carries the research numbers, and ends "demo access and the
opportunity brief are shared with registered partners on request." Links to the
platform and its research page are added the day Karim calls it public, after
the platform-side fixes land.

---

## E — Arabic site

**E1 · Arabic version of the site** — SEQUENCED
Starts only after A–D land on production (Karim's stated order).

---

## F — Proposals: renaming & standard language (feeds the proposal masters)

**F1 · Tier names and prices, everywhere** — PROPOSED
Top-line Feasibility Study — 100,000 EGP (~2 weeks) · Two-Concept Comparison —
150,000 EGP · Full Feasibility + Concept Definition — 140,000 EGP (duration TBD,
see H). All older figures (70k / 90k / 85k×2 / 170k / 125k) are dead and must not
appear in any document.

**F2 · Execution fee language** — PROPOSED
"Disclosed management fee on managed spend." Quoted to the client as a fixed EGP
figure — never a percentage, never "cost-plus." The fee appears inside the study
document, priced against the study's own capex figure — never in a separate
proposal afterwards.

**F3 · Positioning language** — PROPOSED
The study is the plan KitchenThree will be held to. Strip any Go/No-Go framing
from every template.

**F4 · Savings-share clause** — PROPOSED
25% KitchenThree / 75% client on spend under the study's budget. Standard clause
in every execution block.

**F5 · Leakage protection language** — PROPOSED
The study names supplier categories and budget lines. Named vendors and negotiated
rates are delivered with the execution engagement only.

**F6 · Capital-range gate as a start condition** — PROPOSED
No study begins without the client confirming a capital range. Standard clause;
also drives discovery questionnaire v2 (queue item 3).

**F7 · One canonical brand name on all documents** — PROPOSED (interpretation —
confirm)
Standardise on "Kitchen Three" across proposals, ending the Kitchen 3 /
KitchenThree / Kitchen Three drift. ← This is my reading of "the renaming on the
proposals." If Karim meant something else (e.g. renaming the tiers or the
documents themselves), amend this item.

**F8 · Open terms carried as bracketed slots** — PROPOSED
Until H resolves, proposal masters carry [DECISION] slots — never invented answers.

**F9 · Supplier transparency & dual-role clause** — PROPOSED (from Karim, 8 Aug)
Standard clause in every execution block: Kitchen Three takes no undisclosed
commissions from suppliers, as a general rule. Where Kitchen Three or an affiliate
under the KF LLC umbrella supplies goods or services to the project itself, it is
engaged as a disclosed external supplier and invoiced at agreed rates; those
supplies form part of managed spend, and the management fee applies to managed
spend including them. The fee basis remains the agreed percentage scale; what the
client sees on paper stays governed by F2.

---

## G — Deck

**G1 · Deck is do-not-send; rebuild from the website** — PROPOSED
`Kitchen 3 V6 fv 1.pdf` stays retired. Rebuild (queue item 7) uses the site as
source. One item here so nothing quotes the deck meanwhile.

---

## H — Open terms (blocked on Karim)

**H1** · Study payment: 100% upfront vs 50/50 — the existing drafts contradict.
**H2** · Is the study credit against execution capped, and at what.
**H3** · Duration of the 140,000 EGP tier.
**H4** · Final management-fee percentage once real contractor rates are in.
