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
