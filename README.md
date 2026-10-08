# Raiyan Haque — Portfolio

A responsive portfolio built with React 18, Vite, Three.js, React Three Fiber, and Drei. The design preserves the interactive workspace, project monitor, and developer character, with a dark palette and mint accents.

## Development

Use Node.js 22 LTS (`.nvmrc` is included).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` produces the static site in `dist/`. Deploy that directory to your existing static hosting provider. No application server is required.

## Editing content

- `src/constants/index.js`: navigation, curated projects, toolkit categories, experience bullet points, and contact email.
- `src/sections/`: individual page sections.
- `src/components/`: shared controls and 3D scenes.
- `src/index.css`: responsive layouts, typography, colors, and motion preferences.
- `public/models/` and `public/textures/`: existing 3D assets and project videos.
- `public/assets/projects/`: eight original SVG project logos and matching monitor splash screens.
- `src/components/Education.jsx`: expandable degree, scholarship, and full coursework details.
- `public/draco/`: local Draco decoder files from Three.js, so compressed models do not require an external decoder CDN.

Experience follows the latest user-supplied chronology: three connected Cox Communications roles (May–August 2026 Software Engineer Intern; September 2025–January 2026 part-time Data Analyst; May–August 2025 Data Analyst Intern), followed by GSU event coordination (September 2023–May 2025) and research (October 2023–April 2025). Responsibilities use the supplied descriptions; no technical duties were invented for the part-time Data Analyst entry.

## Contact form

The form uses the existing EmailJS service. Copy `.env.example` to `.env.local` to configure another service, template, or public key. The template should use `from_name`, `from_email`, `reply_to`, `to_name`, `to_email`, and `message`. Public browser identifiers are intentionally not treated as secret credentials; never put private keys in `VITE_*` variables.

Success and failure are displayed inline, and a direct email link remains available. Browser verification must mock EmailJS; an actual delivery test requires a deliberate submission. Configure allowed origins and any provider-side abuse controls in the EmailJS dashboard before deployment.

## Interaction and loading

- Interface is the default hero world. Its desk includes a sliding layout puzzle mirrored in a floating 3D blueprint. Cloud replaces the desk with a procedural server district: connect Gateway → Compute → Storage to bring towers online. Applied AI replaces it with an orbiting neural constellation: match three pairs of signals to activate its layers. Each mode changes the environment, controls, colors, and live scene status.
- The explorer passport awards 100 XP and a badge for each completed world. Game state survives mode switches, and replay preserves earned badges. Sliding puzzles are shuffled through legal moves, so they remain solvable. Memory mismatches stay visible until the next card is chosen; there are no timers or penalties.
- The optional discovery trail connects seven checkpoints: the three world missions, education, toolkit, project details, and experience. Its map links directly to each world or section. Portfolio content is always available. Progress stays in memory with no tracking or storage and resets on reload.
- Games have native HTML controls, keyboard support, live feedback, and replay buttons. They remain playable without WebGL or with motion paused. Cloud and AI environments use procedural geometry without new downloads or dependencies; continuous 3D animation pauses offscreen.

- Experience entries are keyboard-operable disclosures. The first role starts expanded.
- Project filters organize six featured builds by AI/data, web, and mobile. Selection updates the engineering highlights, repository link, and project-specific logo on the 3D monitor.
- Existing demo videos remain mapped only to WellCo, Golapi Care, and PopDaLock. Projects without videos show their logo screen, with a repository link. Logos also remain visible while a video loads and return when playback stops.
- The complete toolkit includes all technical skills from the resume, plus tools documented in its experience bullets and selected GitHub projects. The toolkit is contained in the original About card, with six category buttons. Every skill group in the selected category appears together, without pagination or an internal scroll area. Cloud & DevOps shows AWS services and delivery tools, including Jenkins, together.
- Large video files are requested only after selecting **Play demo** on a project with an existing video. Switching projects or stopping the demo releases the video resource.
- 3D sections load as they approach the viewport and stop continuous rendering offscreen.
- The navigation motion control pauses automatic animation. The initial setting respects `prefers-reduced-motion`.
- A failed or unsupported 3D scene falls back to HTML; portfolio content remains usable.
- The site uses local Draco decoders and a procedural globe. General Sans currently loads from its existing font CDN, with system fallbacks.

## Dependency notes

Unused GSAP, Leva, react-globe.gl, and Tailwind packages were removed. The redesigned interface uses plain CSS. Patch overrides for fflate and brace-expansion address vulnerabilities in pinned transitive dependencies without changing their major APIs.

Three.js remains a sizable, lazily loaded graphics dependency. The retained source videos are large; compress or replace them before using video previews heavily.

## Project curation

Featured projects: [Elevest](https://github.com/Raiyanhq/elevest-micro-invest-), [WellCo](https://github.com/Raiyanhq/WellCo), [FocusNFlow](https://github.com/Raiyanhq/U28_FocusNFlow), [Note!t](https://github.com/Raiyanhq/Note-t_project), [Golapi Care](https://github.com/Raiyanhq/Golapi-Care), and [PopDaLock](https://github.com/Raiyanhq/PopDaLock-app). Smaller workbench cards link to the memory game and this portfolio.

Descriptions are based on public repository READMEs, selected implementation files, and the supplied resume. FocusNFlow is labeled as a team project with Raiyan’s documented Frontend/UI Lead role. Elevest uses mock ETF data and simulated returns. The starter flower page and simple rotating-geometry experiment remain accessible through GitHub rather than taking featured positions.
