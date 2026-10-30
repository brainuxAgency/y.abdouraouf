---
name: portfolio-editorial-design
description: Design or refactor Abdouraouf Youssouf's developer portfolio as a distinctive, premium, editorial website. Use when working on the portfolio, personal website, project showcase, or its responsive visual system. Prioritise evidence, restraint, real project work, and art direction over generic AI-generated aesthetics.
---

# Portfolio Editorial Design — Abdouraouf Youssouf

## Role
Act as a senior independent art director, digital designer and frontend engineer. The goal is not to make a trendy portfolio. The goal is to create a credible, memorable personal website for a Full-Stack developer who builds SaaS products, bespoke business applications and web products.

## First step: inspect before changing
1. Inspect the repository, current routes, components, dependencies, styling system, assets and deployment setup.
2. Identify the current working features and preserve them unless there is a clear reason to change them.
3. Inventory every project and claim already present. Classify each as verified, needs confirmation, unfinished, or unsupported.
4. Do not invent clients, testimonials, outcomes, revenue, uptime, Lighthouse scores, years of experience, number of projects, locations, team sizes or performance figures.
5. Do not claim the whole frontend of a project when Abdouraouf only contributed to part of it. For 2B Réalisation, represent his contribution as backend work with Next.js and the administration interface for viewing form submissions; do not claim authorship of the public-facing frontend.
6. Ripostera is a product in development. Label it clearly as “En développement” and do not imply all planned automation features are finished.

## Design objective
Build a portfolio that feels individually art-directed, like the website of a thoughtful product engineer with strong judgement. It must not resemble a generic AI portfolio, SaaS landing-page template, agency theme or component-library demo.

The visual distinction must come from composition, hierarchy, typography, carefully selected real evidence and considered spacing — not from decorative effects.

## Art direction: quiet precision
Use a light, editorial, architectural visual language with a strong typographic hierarchy and asymmetric but disciplined grid.

Suggested starting tokens (adjust only with a reason):
- Main background: `#F7F7F4` — soft neutral, not a beige/cream aesthetic.
- Primary text: `#191B1F` — ink black.
- Secondary text: `#62666F` — restrained grey.
- Lines and dividers: `#D9DAD5`.
- Accent: `#2449D8` — a single precise signal blue, used sparingly for links, active states and one or two key moments.
- Project image background: use the real asset's colours; do not add gradient overlays to force consistency.

Typography:
- Choose one high-quality sans-serif family with a clear personality and broad language support; optionally use a second family only where it creates a real editorial contrast.
- Avoid defaulting automatically to Inter, Roboto, Space Grotesk or the usual AI combinations. Verify available fonts and licensing; use a sensible local/system fallback.
- Use sentence case for navigation, labels and headings. Do not put an uppercase tracked eyebrow over every section.
- The main headline should be large, compact and confident, but not oversized to the point of being a gimmick.

Layout:
- Règle stricte de padding responsive : `p-2` sur mobile et `md:p-5` sur desktop (`p-2 md:p-5` ou `px-2 md:px-5`) dans TOUS les composants pour éviter tout débordement.
- Content should mostly align to a consistent left edge.
- Build a clear page grid, with carefully chosen negative space and occasional asymmetry.
- Avoid equal-width repeated cards. Let the lead project occupy more space; present supporting projects with different proportions where the content justifies it.
- Use thin separators and square or subtly rounded corners. Do not use a large-radius card for every element.
- Treat real screenshots, product interfaces, diagrams or project imagery as primary evidence. Never fabricate interface screenshots or display fake terminal output as decoration.
- Use one memorable visual move only. Everything else should remain quiet and purposeful.

## Explicit anti-patterns
Do not use:
- Purple/blue gradient backgrounds, multicolour gradients, glowing buttons or gradient text.
- Glassmorphism, frosted panels, floating blobs, noisy backgrounds, decorative particles or animated cursor trails.
- A centered hero with an enormous heading and three identical feature cards below it.
- A fake terminal, fake code snippets, fake activity logs, fake status badges or simulated dashboards merely to look technical.
- Statistics that cannot be substantiated, such as “100% satisfaction”, “99.9% uptime”, “100/100 Lighthouse” or arbitrary delivery numbers.
- Giant technology carousels, repeated technology logos, endless skill badges or lists duplicated in multiple sections.
- Emojis as primary icons, excessive pill buttons, excessive border radii, needless scroll-triggered animations or motion for motion's sake.
- Template phrases such as “Solutions innovantes et performantes”, “propulser votre vision”, “de l'idée à la réalité” or vague claims about scalability without evidence.
- A section whose only purpose is to fill page length.

These are constraints for this specific portfolio, not a universal claim that these techniques are always bad. If a visual device is proposed, explain the job it serves and why it belongs here.

## Positioning and copy
Primary positioning:
“Développeur Full-Stack spécialisé en React et Next.js”

Supporting statement:
“Je conçois des applications web sur mesure, des outils métier et des produits SaaS, avec une attention particulière à la qualité du code, à l’expérience utilisateur et à l’utilité réelle du produit.”

Prioritise these three service areas:
1. MVP et plateformes SaaS.
2. Applications métier et outils internes sur mesure.
3. Reprise, amélioration et évolution d'applications existantes.

Avoid presenting the portfolio as a marketing agency. Do not advertise services that cannot be evidenced by the existing work.

## Recommended page narrative
1. Header: name/monogram, a few clear navigation links, one quiet contact action.
2. Hero: a specific positioning statement, a short supporting paragraph, and two clear actions (“Voir les projets” and “Parler de mon projet”). No stats in the hero.
3. Selected work: show the strongest verified work first, with real screenshots or carefully prepared visual artifacts.
4. Project details: for each project state the problem/context, Abdouraouf's exact contribution, relevant stack, and the current status or result when verified.
5. Services: three focused offers, written in client language rather than technical jargon.
6. Approach: a brief, practical description of how a project moves from understanding the need to delivery.
7. About: concise and factual. Mention the Master 2 in computer engineering if it helps establish credibility; do not turn the section into a long biography.
8. Contact: simple, direct and functional. Do not publish prices; invite prospects to discuss scope and a quote.
9. Footer: restrained and functional.

The final length may be shorter when the available evidence does not justify a section.

## Project rules
- Ripostera: present as the developer's own SaaS product, explicitly “En développement”. Clearly distinguish implemented capabilities from planned ones.
- CRM-HMRENOV26: include only details and technologies that are confirmed in the project/code or supplied by Abdouraouf. Do not publish confidential customer data or internal screenshots.
- 2B Réalisation: URL `https://www.2brealisation.com/2br`. State only the verified contribution: backend implemented with Next.js and an administration interface to view contact-form messages. Make clear that the public frontend was built by another developer if attribution is described.
- For every other project, inspect the repository and available materials. If evidence is missing, omit it or label the missing detail for confirmation rather than inventing a case study.

## Interactions and motion
- Interactions should be subtle and useful: link underlines, restrained transitions, clear hover/focus states, and a calm navigation behaviour.
- Prefer short transitions with no bouncing or spring effects.
- Respect `prefers-reduced-motion`.
- Every interaction must work on keyboard and touch. Do not make essential content dependent on hover.

## Accessibility and engineering
- Keep the existing stack unless there is a concrete technical reason to change it.
- Maintain responsive behaviour at narrow mobile, tablet and desktop widths.
- Use semantic HTML, a logical heading hierarchy, visible keyboard focus, sufficient contrast and descriptive image alt text.
- Optimise image sizes and avoid heavy animation or unnecessary client-side JavaScript.
- Validate internal links, external links, contact form validation and submission states. Never display a success message unless submission really succeeded.
- Keep secrets and private configuration out of client bundles.
- Set accurate metadata, Open Graph information, canonical URLs where appropriate, sitemap and robots directives.

## Required working process
### Pass 1 — Audit and design plan
Before coding, report:
- Existing stack and routes.
- Existing features to preserve.
- Project/claim inventory and anything unsupported.
- A concise design system: palette, typography, layout grid, image treatment, motion rules.
- A rough text wireframe for desktop and mobile.
- One distinctive visual decision specific to this portfolio and why it is suitable.

Compare the plan against generic AI portfolio patterns. If the plan could be reused unchanged for a random SaaS or developer, make it more specific before proceeding.

### Pass 2 — Implement
Refactor the existing project rather than replacing it blindly. Use real project materials. Remove unsupported claims and redundant decoration. Keep copy concise and grounded.

### Pass 3 — Critique and validate
If browser preview or screenshots are available, review desktop and mobile screenshots. Look for weak hierarchy, repeated patterns, awkward spacing, synthetic-looking project visuals, over-decoration and generic copy. Make at least one refinement pass after reviewing.

Run available lint, type checks, tests and production build. Check routes, responsive layout, keyboard focus, reduced motion, broken links and forms.

### Final report
Summarise the actual files changed, the key design choices, tests run and any remaining items requiring Abdouraouf's confirmation. Do not say a test passed unless it was run. Do not claim a screenshot review if no screenshots were inspected.
