# Design guardrails — changhangko.cc

This portfolio must feel authored, specific and intentionally art-directed. Do not introduce generic AI-generated frontend conventions.

## Preserve the site's own language
- Keep the genome / mutation / decode concept, monochrome editorial character, asymmetric composition, and deliberate typography.
- Prefer content-specific layouts over reusable marketing templates.
- Do not redesign distinctive existing work merely to satisfy generic design rules.

## Avoid by default
- Generic startup purple / indigo / blue palettes or decorative gradients.
- Gradient hero text, glow effects, glassmorphism, excessive blur, decorative blobs, or floating pills.
- Repeated three-card benefit grids, card-everything UI, arbitrary bento grids, or excessive centered symmetry.
- Default SaaS iconography and first-thought metaphors.
- Arbitrary type sizes, excessive radii, multiple competing accents, or shadows with inconsistent lighting.
- Generic AI copy, hype verbs, vague slogans, invented metrics, testimonials, awards, names, or social proof.
- Em dashes as a habitual copywriting crutch.
- Generic “Learn more” / “Submit” CTAs when a specific action label is possible.

## Engineering / accessibility checks
- Use semantic sibling landmarks: header, main, footer/contentinfo.
- Every interaction needs appropriate hover, active, focus, loading, empty and error states when applicable.
- Every non-essential animation must respect prefers-reduced-motion.
- Auto-moving content lasting more than five seconds needs an accessible pause/stop mechanism where WCAG requires it.
- Prefer IntersectionObserver to continuous scroll listeners for reveal behavior.
- Prefer min-height:100dvh over fixed 100vh for full viewport layouts.
- Avoid arbitrary extreme z-index values; maintain an intentional stacking scale.
- Use a coherent type scale and text-wrap:balance / pretty where suitable.
- Maintain readable contrast and keyboard navigation.

## Review process for future changes
Before production deployment, audit the changed area separately for:
1. visual authorship / generic-AI patterns
2. typography
3. colour and surfaces
4. layout and spacing
5. interaction states and motion
6. accessibility
7. copy authenticity

Every finding should point to a concrete selector, value, component or sentence. Zero findings is an acceptable result. Fix root causes rather than accumulating patches.

These guardrails are inspired by the audit principles in Jacob Perks' “How to stop your frontend looking AI-generated” (Medium, 2026-08-02), adapted to this portfolio rather than treated as absolute stylistic rules.

## Human-led design review — Oliur principles
These checks extend the anti-generic-AI rules above. The goal is not to hide the use of AI; it is to make sure every visible decision has a reason tied to Garry's work and taste.

### Start from intent, not a component library
- Before adding a section, state its single job in plain language. If the job is unclear, do not design the section yet.
- Choose one focal point per view. Size, contrast and spacing must support that focal point instead of making every element compete.
- Never accept the first generated layout. Generate/implement, critique, remove, then refine.
- AI may accelerate execution and exploration; final hierarchy, selection, sequencing and deletion remain human decisions.

### Remove before adding
- For every new visual element ask: does this improve navigation, comprehension, project evidence, or the portfolio's authored identity?
- If the answer is no, remove it. Empty space is an active layout tool, not an area that needs decoration.
- Do not add gradients, shadows, blur, cards, badges, icons, animation or texture merely to make a sparse area feel 'designed'.

### Use real evidence
- Prefer Garry's actual project drawings, photographs, models, diagrams, screenshots and process artifacts over generic/generated decoration.
- A visual must relate directly to the claim beside it. Avoid unrelated filler imagery.
- Never invent project metrics, outcomes, quotes, clients, awards or process details.
- Imperfection is acceptable when it is authentic: contact sheets, working diagrams, model photos, crop marks, annotations and process traces can carry more authorship than polished decoration.

### Hierarchy and typography
- Main reading text must be comfortable at 100% browser zoom. Small type is reserved for metadata/annotation, never the primary reading experience.
- Use a small, intentional type system. Futura is the print/PDF Latin face; Chinese needs a compatible CJK fallback. The website keeps its established genome/editorial typography unless intentionally redesigned.
- Do not use size merely for spectacle. Large type must indicate actual importance.
- Maintain deliberate contrast between primary, secondary and metadata levels.
- Use whitespace to establish rhythm and grouping before introducing borders, cards or backgrounds.

### Portfolio-specific authorship
- Preserve the genome / mutation / decode navigation because it comes from the portfolio's concept, not from a generic UI trend.
- Each project category may have its own editorial rhythm when the content demands it; consistency does not mean forcing every project into the same template.
- Project pages should show why a decision was made, what changed, and what Garry contributed. A polished screen without reasoning is insufficient.
- Chinese copy must be immediately understandable to a native Mandarin reader. Prefer concrete verbs and actions over translated design jargon or abstract nouns.
- Ask: “Could this exact section plausibly belong to 500 unrelated AI-generated portfolios?” If yes, make it more specific or remove it.

### Current-site watch list
These are not automatic failures, but must be justified when touched:
- `#projectTransition` currently uses `z-index:9999`; replace extreme stacking values with a documented stacking scale when that system is next refactored.
- Studio Library presentation uses large radii, gradients and shadows. These are acceptable only where they deliberately frame the embedded product/interface; do not spread this treatment to the general portfolio shell.
- Profile/header gradients are functional readability fades. Keep them subtle and do not turn them into decorative gradient language.
- Editor/debug overlays use blur, high z-index and utility styling. Keep these isolated from the public-facing visual language.
- Print/PDF preview shadow is screen-only and must never appear in the printed artifact.

### Pre-ship human pass
Before a production change is considered finished, answer:
1. What should the viewer notice first?
2. What can be removed?
3. Which element is uniquely tied to this project or Garry?
4. Is every visual evidence for something being said?
5. Can a Mandarin reader understand the Chinese copy on the first read?
6. Does the page still work at 100% zoom without tiring the reader?
7. Are we showing design judgement, not merely polished output?
