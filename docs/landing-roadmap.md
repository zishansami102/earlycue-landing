# Landing page roadmap — parked sections & decisions

*Working doc, Aug 2026. Source: copy analysis session (copywriter + investor lens + visual brainstorm).*
*Status: Pain ✅, Curve ✅, Intelligence ✅. Remaining parked below.*

---

## Page structure (current)

1. Hero — keep (tweak subhead, see Copy edits)
2. AgentPanel — keep
3. FormatMarquee — keep for now → later upgrade to **Format Index ticker**
4. ✅ Pain — "The Obituary Feed" (`PainFeed.astro`)
5. ✅ The Curve (`TheCurve.astro`, absorbed HowItWorks, owns `#how`)
6. ✅ Intelligence — "Seven decisions" teardown (`Intelligence.astro`) — REPLACED the planned
   "Brief Materializes" outcome section after positioning pivot: sell the decision intelligence
   (contrast + earliness + element-level scores), not the artifact. Olunix.com's annotated-artifact
   pattern was the graphic reference. Brief-as-deliverable demoted to a possible later beat.
7. NicheGallery — keep, fix header duplication
8. Decode — keep (partially overlaps Intelligence beat rows now — consider slimming or merging later)
9. Band (water photo) → **replace with Odometer Race**
10. FAQ — keep (survivorship line now lives in Pain section — trim FAQ #1)
11. CtaFinal — keep

Generated assets (gpt-image-2, `public/assets/gen/`): si-01..07 + si-brand-01/02 (street-interview
spread), pain-ba, pain-recipe, brief-s1..s4 (consistent-cast beat frames used in Intelligence).

---

## Section 2 (next up): The Curve — signature lifecycle graphic

**Job:** one picture that sells the ICP the timing edge AND hands the investor the thesis (napkin diagram). Highest-leverage section on the page.

- One large format-lifecycle curve (rise → peak → saturation → decay) that **draws itself on scroll**.
- Two entry markers drop onto it: **EarlyCue** on the steep rising slope, **trend tools / ad-spy** just past peak.
- The area between them shades green, labeled **"your window."**
- Tiny reel thumbnails dot the curve at phases: "3 creators" → "hundreds" → "your competitor's ad."
- Fold the three HowItWorks steps (track → decompose → call+brief) into small annotations under the curve; retire HowItWorks as a separate section.
- Effort: 1–2 days. Pattern: Apple scroll-draw + Linear product-as-hero discipline.
- Optional deeper variant (later): draggable playhead scrubbing a real format's 60-day history (thumbnails swap, phase label flips Emerging → Climbing → Peak → Saturated).

## Section 3: Outcome — "The Brief Materializes"

**Job:** show the deliverable (differentiator #3: "reports don't get budget; work does").

- A ready-to-shoot brief renders as a tangible document card — script beats, shot list, 3 hook variants — **assembling line by line**, stamped *"Generated on day 5 of the format's life."*
- Beside it, small and grey: what a trend tool gives you — a bare link to a viral video, labeled *"day 34."*
- Effort: ~1 day. The artifact IS the argument.
- Supporting variant: "Monday morning, before/after" — left: Slack thread of pasted reel links + "should we try this??"; right: one EarlyCue alert card with curve-position badge + brief attached.

## Section 4: Odometer Race (replaces Band.astro water photo)

**Job:** machine scale vs human doomscrolling, felt in real time.

- Two counters side by side: "A strategist doomscrolling" ticks +1 reel every ~40s (progress ring shows the crawl); "EarlyCue" blurs upward. Visitor's own reading time becomes the demo: 2 vs 1,900.
- Caption: "…and it never sleeps."
- MUST be labeled as a rate illustration, not a live production stat (see Honesty rule).
- Effort: ~half a day. Cheapest high-impact item.

## Later / once real data flows

- **Format Index ticker** — upgrade FormatMarquee into Bloomberg-style strip: "street interview ▲ +214% WoW · climbing · week 2", decaying formats red ▼. Investor signal: "we're building the S&P of reel formats." Only with real prototype data.
- **Cohort strips** — rows of thumbnails by week-of-adoption within one format, performance bars shrinking week 1 → week 5. Caption: "an outlier video ≠ a rising format." Looks like methodology = moat.
- **Graveyard marquee row** — dead formats, strikethrough, lifespans ("Reddit-story splitscreen · Jan–May"). Counter-scrolls under the live marquee. Seeds "formats die" + longitudinal data.
- **Pipeline schematic strip** — mono/blueprint one-liner (ingest → decompose → cluster → cohort-track → alert → brief), nodes pulse as AgentPanel demo hits matching tool calls.
- **Why-now sparkline chips** — inline: cost per AI video ↓ · creative's share of paid performance ↑ 70–80% · formats born per week ↑.

## Copy edits (quick, do alongside)

- Hero subhead: "…helps you create your version" → "…and hands you the brief to shoot your version."
- Doomscroll joke used twice (HowItWorks h2 + NicheGallery h2) — keep exactly one.
- HowItWorks step 3 "Deliver the call, and the brief" — "the call" is trader jargon; earn it: "the call: which format, and whether it's still climbing."
- NicheGallery header restates FAQ #4 — tighten.

## Rules (do not violate)

1. **Honesty rule:** no invented cumulative stats (e.g. "38M reels decomposed"). Rates and mechanisms may be illustrated (odometer, curve, demo); cumulative claims must be real or absent. Keep "Sample data" / "Illustrative" captions.
2. **No wall of real viral videos** — looks identical to the survivorship products we position against.
3. **No 3D globe / geographic flourish** — our axis is time, not geography. Every graphic keeps time on the x-axis.
4. **No full-page scroll-hijack** — investors skim in 45s; scroll effects stay local to a section.
5. Asset generation: gpt-image-2 (OpenAI) for reel-style thumbnails when a key is available; until then reuse `/public/assets/tiles/*`.
